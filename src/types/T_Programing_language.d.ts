export type T_Certification = {
	candidateId: number;
	certificationHistoryId: number;
	codingamerId: number;
	communityStats: number[];
	comparativeScore: number;
	date: number;
	diplomaPreviewId: number;
	handle: string;
	languageName: string;
	lastTryDate: number;
	legacy: boolean;
	lowerScoreWarning: boolean;
	programmingLanguageId: string;
	score: number;
	type: string;
	visible: boolean;
}

export type T_Programming_Language = {
	certification?: T_Certification;
	languageName: string;
	logoId: number;
	programmingLanguageId: string;
	puzzleCount: number;
  }