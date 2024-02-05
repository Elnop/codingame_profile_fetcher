export type Codingame_API_Exeption_Function = 
	"get_codingamer_by_url"
	| "update_basic_data" 
	| "update_quest_certifications" 
	| "update_topic_skills"
	| "update_programming_languages"
	| "update_achievements"
	| "update_follower_ids"
	| "update_following_ids"
	| "fetch_basic_data"
	| "fetch_quest_certifications"
	| "fetch_topic_skills"
	| "fetch_programming_languages"
	| "fetch_achievements"
	| "fetch_follower_ids"
	| "fetch_following_ids";

export type Codingame_API_Exeption_Type = "timeout"
	| "bad_argument"
	| "user_id_undefined"
	| "response_not_ok"
	| "api_return_null";

export class Codingame_API_Exeption extends Error {
	name: string;
	type: Codingame_API_Exeption_Type;
	func: string;
	constructor(message: string, name: string,
		type: Codingame_API_Exeption_Type, func: Codingame_API_Exeption_Function)
	{
		super(message);
		this.name = name;
		this.func = func;
		this.type = type;
	}
}