import { Codingame_API_Exeption } from "../Codingamer_Exeption";
import { T_Topic_Skill } from "../types/T_Topic_Skill";


export async function __fetch_topic_skills(public_handle : string, user_id: number, signal : AbortSignal): Promise<T_Topic_Skill[]> {
	try {
		const res = await fetch("https://www.codingame.com/services/CodingamerPuzzleTopic/findTopicsByCodingamerId", {
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
			"referrer": "https://www.codingame.com/profile/"+public_handle,
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `[${user_id}]`,
			"method": "POST",
			"mode": "cors",
			"credentials": "include",
			signal
		  });
		  if (!res.ok)
			throw new Codingame_API_Exeption(`fetch_topic_skills error with status ${res.status}`,
			"fetch_topic_skills response_not_ok", "response_not_ok", "fetch_topic_skills");
		return await res.json() as T_Topic_Skill[];
	} catch (error : any) {
		if (error instanceof DOMException && error.name === "TimeoutError")
			throw new Codingame_API_Exeption(`fetch_topic_skills timeout`,
			"fetch_topic_skills timeout", "timeout", "fetch_topic_skills");
		throw error;
	}
}