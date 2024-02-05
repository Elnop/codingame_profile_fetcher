type T_Rank_History = {
	rank: number;
	total: number;
	points: number;
	contestPoints: number;
	codegolfPoints: number;
	multiTrainingPoints: number;
	clashPoints: number;
	date: number;
}

type T_Codingame_Points_Ranking_Dto = {
	codingamePointsTotal: number;
	codingamePointsRank: number;
	codingamePointsContests: number;
	codingamePointsAchievements: number;
	codingamePointsXp: number;
	codingamePointsOptim: number;
	codingamePointsCodegolf: number;
	codingamePointsMultiTraining: number;
	codingamePointsClash: number;
	numberCodingamers: number;
	numberCodingamersGlobal: number;
}

type T_Form_Values = {
	city: string;
	school: string
}

type T_Row_Codingamer = {
	userId: number;
	pseudo: string;
	countryId: string;
	publicHandle: string;
	formValues: IFormValues;
	enable: boolean;
	schoolId: number;
	rank: number;
	avatar: number;
	cover: number;
	tagline: string;
	company: string;
	city: string;
	level: number;
	xp: number;
	category: string;
}
	
export type __T_FindCodingamePointsStatsByHandle_body = {
	codingamerPoints: number;
	achievementCount: number;
	codingamer: T_Row_Codingamer;
	codingamePointsRankingDto: T_Codingame_Points_Ranking_Dto;
	xpThresholds: T_Xp_Threshold[];
	rankHistory: T_Rank_History[];
}