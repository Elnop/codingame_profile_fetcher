import { Codingame_API_Exeption } from "../Codingamer_Exeption";
import { __T_FindCodingamePointsStatsByHandle_body } from "../types/__fetch_basic_data"

export async function __fetch_basic_data(publicHandle: string, signal: AbortSignal): Promise<__T_FindCodingamePointsStatsByHandle_body> {
	try {
		const res = await fetch("https://www.codingame.com/services/CodinGamer/findCodingamePointsStatsByHandle", {
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
			"referrer": "https://www.codingame.com/profile/"+publicHandle,
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `[${publicHandle}]`,
			"method": "POST",
			"mode": "cors",
			"credentials": "include",
			signal
		});
		if (!res.ok)
			throw new Codingame_API_Exeption(`fetch_basic_data error with status ${res.status}`,
			"fetch_basic_data response_not_ok", "response_not_ok", "fetch_basic_data");
		return await res.json() as __T_FindCodingamePointsStatsByHandle_body;
	} catch (error : any) {
		if (error instanceof DOMException && error.name === "TimeoutError")
			throw new Codingame_API_Exeption(`fetch_basic_data timeout`,
			"fetch_basic_data timeout", "timeout", "fetch_basic_data");
		throw error;
	}
}