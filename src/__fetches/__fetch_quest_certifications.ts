import { Codingame_API_Exeption } from "../Codingamer_Exeption";
import { T_Quest_Certification } from "../types/T_Quest_Certification.d";

export async function __fetch_quest_certifications(public_handle : string, user_id: number, signal : AbortSignal): Promise<T_Quest_Certification[]> {
	try {
		const res = await fetch("https://www.codingame.com/services/QuestCertification/findTopQuestCertifications", {
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
			throw new Codingame_API_Exeption(`fetch_quest_certifications error with status ${res.status}`,
			"fetch_quest_certifications response_not_ok", "response_not_ok", "fetch_quest_certifications");
		return await res.json() as T_Quest_Certification[];
	} catch (error : any) {
		if (error instanceof DOMException && error.name === "TimeoutError")
			throw new Codingame_API_Exeption(`fetch_quest_certifications timeout`,
			"fetch_quest_certifications timeout", "timeout", "fetch_quest_certifications");
		throw error;
	}
}