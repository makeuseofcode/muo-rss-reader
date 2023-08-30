<script>
	import addToLocalStorage from '$lib/addToLocalStorage';
	console.log(addToLocalStorage);
    $: feeds = JSON.parse(window.localStorage.getItem("feeds")) || [];
	let url;
	let ready = false;
</script>

<main let:dataUpdate={feeds}>
    <h1>RSS Reader</h1>
    <h3>Add a new feed:</h3>
    <!-- <span>Welcome to this fine reader.</span> -->
    <input
        type="url"
        placeholder="Enter a valid RSS link..."
        bind:value={url}
        on:input={() => {
            if (url.length > 0) {
                setTimeout(() => {
                    ready = true;
                }, 250);
            } else {
                ready = false;
            }
        }}
    />
</main>
<!-- <button type="submit" on:click={() => (ready = true)}>Check Availability</button> -->

{#if ready}
	{#await fetch(`/?url=${url}`).then((res) => res.json())}
		<p>Gathering information... Please wait</p>
	{:then data}
		{#if data.message === 'Internal Error'}
			<p>Something went wrong...Check your URL and try again</p>
		{:else}
			<div>
				{#if data.image}
					<img
						src={data.image.url}
						alt={data.title}
					/>
				{/if}
				<p>{data.title}</p>
				<p>{data.description || ''}</p>
				{console.log(data) || ''}
			</div>
			<button on:click={()=>{
                addToLocalStorage(data.title, url);
                location.reload();
                }}>Add to My Feeds</button>
		{/if}
	{/await}
{/if}
<!-- <a href="/get/hello">hello</a> -->

<style>
    img{
        width: 40px;
        height: 40px;
    }

    input{
        padding:15px;
        font-size: 20px;
        width: 50%;
    }

</style>