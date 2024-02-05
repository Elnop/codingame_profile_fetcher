import { Codingamer } from "../Codingamer/Codingamer"
import { Codingame_API_Exeption } from "../Codingamer_Exeption";

export async function get_codingamer_by_url(profile_url: string) : Promise<Codingamer> {
	if (typeof profile_url !== "string" || !profile_url.startsWith("https://www.codingame.com/profile/"))
		throw new Codingame_API_Exeption("get_codingamer_by_url : bad profile url, need starts with https://www.codingame.com/profile/",
			"get_codingamer_by_url : bad_argument", "bad_argument", "get_codingamer_by_url");
	const public_handler = profile_url.split("https://www.codingame.com/profile/")[1];
	const codingamer = new Codingamer(public_handler);
	await codingamer.update_all();
	return codingamer;
}