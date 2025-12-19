import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preview, { htmlFormatter } from 'remark-preview';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [preview(htmlFormatter())]
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: [
				'/',
				'/api/episodes',
				'/episodes',
				'/episodes/1',
				'/episodes/2',
				'/episodes/3',
				'/episodes/4',
				'/episodes/5',
				'/episodes/6',
				'/episodes/7',
				'/episodes/8',
				'/episodes/9',
				'/episodes/10',
				'/episodes/11',
				'/episodes/12',
				'/episodes/13',
				'/episodes/14',
				'/episodes/15',
				'/episodes/16',
				'/episodes/17',
				'/episodes/18',
				'/episodes/19',
				'/episodes/20'
			]
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;
