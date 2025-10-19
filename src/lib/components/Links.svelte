<script lang="ts">
	import { base } from '$app/paths';
	import EmailIcon from '$lib/components/icons/email.svelte';
	import RssIcon from '$lib/components/icons/rss.svelte';
	import PatreonIcon from '$lib/components/icons/patreon.svelte';
	import ApplePodcastIcon from '$lib/components/icons/applepodcasts.svelte';
	import SpotifyIcon from '$lib/components/icons/spotify.svelte';
	import YoutubeMusicIcon from '$lib/components/icons/youtubemusic.svelte';

	const LINKS = [
		{
			title: 'Apple Podcast',
			icon: ApplePodcastIcon,
			url: 'https://podcasts.apple.com/us/podcast/filum-embroidery-podcast/id1809848488',
			external: true
		},
		{
			title: 'Spotify',
			icon: SpotifyIcon,
			url: 'https://open.spotify.com/show/3IZll2qfRy50C9aUvP6MTF',
			external: true
		},
		{
			title: 'Youtube',
			icon: YoutubeMusicIcon,
			url: 'https://www.youtube.com/playlist?list=PLEf7VAwo07YNH3L4nsgSY9IdaSVTVdbMZ',
			external: true
		},
		{
			title: 'Patreon',
			icon: PatreonIcon,
			url: 'https://www.patreon.com/mashareprintseva?utm_campaign=creatorshare_creator',
			external: true
		},
		{
			title: 'Email',
			icon: EmailIcon,
			url: 'mailto:mashareprintseva@gmail.com?subject=Hello!',
			external: false
		},
		{
			title: 'RSS Feed',
			icon: RssIcon,
			url: `${base}/feed.xml`,
			external: false
		}
	];
</script>

<section class="links">
	<h2 class="v-h">Links</h2>
	<ul class="links__list">
		{#each LINKS as item}
			<li class="links__item item">
				{#if item.external}
					<a
						class="item__link"
						href={item.url}
						aria-label={item.title}
						target="_blank"
						rel="noopener noreferrer"><item.icon /></a
					>
				{:else}
					<a class="item__link" href={item.url} aria-label={item.title}><item.icon /></a>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	.links {
		border-top: var(--border);
		border-bottom: var(--border);
		padding: 15px 0;
	}
	.links__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: clamp(10px, 9%, 51px);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item__link {
		display: grid;
	}

	@media (width <= 498px) {
		.links__list {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-auto-rows: min-content;
			align-items: center;
			justify-items: center;
			gap: 40px 20px;
			padding: 20px;
		}
	}
</style>
