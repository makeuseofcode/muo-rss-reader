<script>
	let feeds = JSON.parse(window.localStorage.getItem('feeds')) || [];
	feeds = feeds.reverse();
</script>

<nav>
	<a href="/">Home</a>
	<span>My Feeds:</span>
	<div class="my-feeds">
		{#each feeds as feed}
			{@const number = feeds.indexOf(feed)}
			<div>
				{number + 1}. <a href={`/feed/${feed.title}?url=${feed.url}`}>{feed.title}</a>
			</div>
		{/each}
	</div>
</nav>
<slot />

<style>
	nav {
		display: flex;
		font-size: 18px;
		background-color: white;
		padding: 10px;
		width: 100vw;
	}

	.my-feeds {
		display: flex;
		white-space: nowrap;
		overflow-x: scroll;
		margin-left: 30px;
		gap: 10px;
	}

	span {
		white-space: nowrap;
		font-weight: 900;
		margin-left: 20px;
		margin-right: -5px;
	}
</style>
