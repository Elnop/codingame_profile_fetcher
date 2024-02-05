import { __fetch_basic_data } from "../__fetches/__fetch_basic_data";
import { __fetch_following_ids } from '../__fetches/__fetch_following_ids';
import { __fetch_follower_ids } from '../__fetches/__fetch_follower_ids';
import { __fetch_quest_certifications } from "../__fetches/__fetch_quest_certifications";

import { __T_FindCodingamePointsStatsByHandle_body } from "../types/__fetch_basic_data";
import { T_Quest_Certification } from '../types/T_Quest_Certification';
import { T_Xp_Threshold } from "../types/T_Xp_Threshold";
import { T_Topic_Skill } from "../types/T_Topic_Skill";
import { T_Programming_Language } from "../types/T_Programing_language";
import { __fetch_topic_skills } from "../__fetches/__fetch_topic_skills";
import { __fetch_programming_languages } from "../__fetches/__fetch_programming_languages";
import { __fetch_achievements } from "../__fetches/__fetch_achievements";
import { Codingame_API_Exeption } from '../Codingamer_Exeption';

function find_xp_threshold(thresholds: T_Xp_Threshold[], level: number) {
	const thresholds_obj = thresholds.find(xp_threshold => xp_threshold.level = level);
	if (!thresholds_obj)
		return 0;
	return thresholds_obj.xpThreshold;
}

export class Codingamer {
	public_handle: string;
	pseudo: string | undefined;
	level: number | undefined;
	xp: number | undefined;
	xp_threshold: number | undefined;
	rank: number | undefined;
	id: number | undefined;
	avatar_id: number | undefined;
	cover_id: number | undefined;
	country_id: string | undefined;
	school_id: number | undefined;
	company: string | undefined;
	city: string | undefined;
	category: string | undefined;
	codingamer_points: number | undefined;
	achievement_count: number | undefined;
	quest_certifications: T_Quest_Certification[] | undefined;
	topic_skills: T_Topic_Skill[] | undefined;
	programming_languages: T_Programming_Language[] | undefined;
	achievements: T_Achivement[] | undefined;
	following_ids: number[] | undefined;
	follower_ids: number[] | undefined;

	constructor(public_handle: string) {
		this.public_handle = public_handle;
	}

	public async update_all(abord_signal = AbortSignal.timeout(35000)): Promise<void> {
		await this.update_basic_data(abord_signal);
		await Promise.all<void>([
			this.update_quest_certifications(abord_signal),
			this.update_topic_skills(abord_signal),
			this.update_programming_languages(abord_signal),
			this.update_follower_ids(abord_signal),
			this.update_following_ids(abord_signal),
			this.update_achievements(abord_signal)
		]);
	}

	async update_basic_data(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		let data = await __fetch_basic_data(this.public_handle, abord_signal);
		if (!data)
			throw new Codingame_API_Exeption("fetch_basic_data, api_return_null",
			"fetch_basic_data : api_return_null", "api_return_null", "fetch_basic_data")
		this.pseudo = data.codingamer.pseudo;
		this.id = data.codingamer.userId;
		this.country_id = data.codingamer.countryId;
		this.school_id = data.codingamer.schoolId;
		this.rank = data.codingamer.rank;
		this.avatar_id = data.codingamer.avatar;
		this.cover_id = data.codingamer.cover;
		this.company = data.codingamer.company;
		this.city = data.codingamer.city;
		this.level = data.codingamer.level;
		this.xp = data.codingamer.xp;
		this.category = data.codingamer.category;
		this.codingamer_points = data.codingamerPoints;
		this.achievement_count = data.achievementCount;
		if (this.level)
			this.xp_threshold = find_xp_threshold(data.xpThresholds, this.level);
	}
	
	async update_quest_certifications(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_quest_certifications : user_id_undefined", "user_id_undefined", "update_quest_certifications");
		this.quest_certifications = await __fetch_quest_certifications(this.id, abord_signal);
	}

	async update_follower_ids(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_follower_ids : user_id_undefined", "user_id_undefined", "update_follower_ids")
		this.follower_ids  = await __fetch_follower_ids(this.id, abord_signal);
	}

	async update_following_ids(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_following_ids : user_id_undefined", "user_id_undefined", "update_following_ids")
		this.following_ids = await __fetch_following_ids(this.id, abord_signal);
	}

	async update_topic_skills(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_topic_skills : user_id_undefined", "user_id_undefined", "update_topic_skills")
		this.topic_skills = await __fetch_topic_skills(this.id, abord_signal);
	}

	async update_programming_languages(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_programming_languages, user_id_undefined", "user_id_undefined", "update_programming_languages")
		this.programming_languages = await __fetch_programming_languages(this.id, abord_signal);
	}

	async update_achievements(abord_signal = AbortSignal.timeout(5000)): Promise<void> {
		if (!this.id)
			throw new Codingame_API_Exeption("user_id undefined, call update_basic_data to update it",
			"update_achievements : user_id_undefined", "user_id_undefined", "update_achievements");
		this.achievements  = await __fetch_achievements(this.id, abord_signal);
	}

	get avatar_url() {
		if (!this.avatar_id)
			return undefined;
		return "https://static.codingame.com/servlet/fileservlet?id="+this.avatar_id;
	}

	get cover_url() {
		if (!this.avatar_id)
			return undefined;
		return "https://static.codingame.com/servlet/fileservlet?id="+this.cover_id;
	}
}