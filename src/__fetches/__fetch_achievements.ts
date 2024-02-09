import { Codingame_API_Exeption } from "../Codingamer_Exeption";
import { T_Achivement } from "../types/T_Achivement";

export async function __fetch_achievements(user_id: number, signal : AbortSignal): Promise<T_Achivement[]> {
	try {
		const res = await fetch("https://www.codingame.com/services/Achievement/findByCodingamerId", {
			"headers": {
				"accept": "*/*",
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
			throw new Codingame_API_Exeption(`fetch_achievements error with status ${res.status}`,
			"fetch_achievements response_not_ok", "response_not_ok", "fetch_achievements");
		return await res.json() as T_Achivement[];
  	} catch (error : any) {
	  	if (error instanceof DOMException && error.name === "TimeoutError")
		  throw new Codingame_API_Exeption(`fetch_achievements timeout`,
		  "fetch_achievements timeout", "timeout", "fetch_achievements");
	  throw error;
	}
}