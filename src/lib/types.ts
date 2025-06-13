export type EpisodeType = {
	title: string;
	date: string;
	description: string;
	audio: string;
	number: number;
	author: string;
	cover?: string;
	preview: string;
};

export type FeedType = Record<string, { metadata: EpisodeType }>;
