<script>
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
			{number + 1}. <a href={item.link}> {item.title}</a>
		</div>
	{/each}
{:else}
	<p>Something went wrong...</p>
{/if}

<style>
	a {
		font-size: 30px;
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
		padding: 10px 10px;
	}

    img{
        width: 40px;
        height: 40px;
    }
</style>
