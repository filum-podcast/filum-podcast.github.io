<script lang="ts">
	import { base } from '$app/paths';
	import { getFormattedDate } from '$lib/date';
	type Props = {
		items: {
			title: string;
			number: string;
			date: string;
		}[];
	};

	let { items }: Props = $props();
</script>

{#if items.length}
	<ul class="list">
		{#each items as episode}
			<li class="item">
				<a class="link" href="{base}/episodes/{episode.number}">
					<p>Episode {episode.number}</p>
					<h3 class="episode">
						<span class="episode__title">"{episode.title}"</span>
					</h3>
					<time class="episode__date" datetime={episode.date}>{getFormattedDate(episode.date)}</time
					>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.list {
		display: grid;
		gap: 50px;
		margin: 0;
		padding: 0;
		padding: 20px 0 54px;
		list-style: none;
	}

	.link {
		display: grid;
		gap: 5px;
		width: fit-content;
		text-decoration: none;
	}
	.episode__title {
		color: var(--color--text);
	}
</style>
