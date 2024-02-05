import { Codingame_API_Exeption } from "../Codingamer_Exeption";

export async function __fetch_follower_ids(user_id: number, signal : AbortSignal): Promise<number[]> {
	try {
		const res = await fetch("https://www.codingame.com/services/CodinGamer/findFollowerIds", {
			"headers": {
			  "accept": "application/json, text/plain, */*",
			  "accept-language": "en-US,en;q=0.9",
			  "content-type": "application/json;charset=UTF-8",
			  "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
			  "sec-ch-ua-mobile": "?0",
			  "sec-ch-ua-platform": "\"Linux\"",
			  "sec-fetch-dest": "empty",
			  "sec-fetch-mode": "cors",
			  "sec-fetch-site": "same-origin"
			},
			"referrer": "https://www.codingame.com/profile/961697f63a0daf0d4649a6f1c368acf81098515",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `[${user_id}]`,
			"method": "POST",
			"mode": "cors",
			"credentials": "include",
			signal
		});
		if (!res.ok)
			throw new Codingame_API_Exeption(`fetch_follower_ids error with status ${res.status}`,
			"fetch_follower_ids response_not_ok", "response_not_ok", "fetch_follower_ids");
		return await res.json() as number[];
	} catch (error : any) {
		if (error instanceof DOMException && error.name === "TimeoutError")
			throw new Codingame_API_Exeption(`fetch_follower_ids timeout`,
			"fetch_follower_ids timeout", "timeout", "fetch_follower_ids");
		throw error;
	}
}