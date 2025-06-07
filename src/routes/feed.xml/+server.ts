import type { RequestHandler } from '@sveltejs/kit';
import { getXml } from '$lib/xml';
import type { EpisodeType, FeedType } from '$lib/types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const episodes: EpisodeType[] = [];

	const pathData = import.meta.glob('/src/episodes/*.md', { eager: true }) as FeedType;

	const paths = Object.entries(pathData)
		.sort((a, b) => a[1].metadata.number - b[1].metadata.number)
		.reduce((acc: FeedType, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {});

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as EpisodeType;

			const episode = { ...metadata, description: metadata.preview.split('\n').join('') };
			episodes.push(episode);
		}
	}

	const body = await getXml(episodes);

	return new Response(body, {
		headers: { 'Cache-Control': 'max-age=0, s-maxage=3600', 'Content-Type': 'application/xml' }
	});
};
