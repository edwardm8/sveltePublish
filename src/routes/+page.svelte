<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-2xl">{data.post.title}</h1>
<div>{@html data.post.content}</div>

