<script>
	import moment from 'moment';
	export let data; 
</script>
{#if data.image}
    <img src={data.image.url} alt={data.title} />
{/if}
<h1>
	{data.title}
</h1>
<h3>{data.description || ''}</h3>

{#if data.items}
	{#each data.items as item}
		{@const number = data.items.indexOf(item)}
		<div class="item">
			{number + 1}. 
			<a href={item.link}> {@html item.title}</a>
			<div class="metadata">
				<span>{item.author || item.creator || ""}</span>
				<span>{moment(item.isoDate).fromNow()}</span>
			</div>
			<div class="snippet">{item.contentSnippet || ""}</div>
		</div>
	{/each}
{:else}
	<p>Something went wrong...</p>
{/if}

<style>
	.snippet {
		font-size: 18px;
	}
	a {
		font-size: 25px;
		text-decoration: underline;
		color: black;

		&:visited {
			color: gray;
		}

		&:hover {
			text-decoration: none;
		}
	}

	.item {
		display: flex;
		flex-direction: column;
		padding: 10px 10px;
	}

	.metadata{
		display: flex;
		gap:10px;
		margin: 10px 0px 10px 0px;
	}

    img{
        width: 40px;
        height: 40px;
    }
</style>
