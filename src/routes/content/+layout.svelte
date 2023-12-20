<script>
	import { page } from "$app/stores";
	import Markdown from "$lib/components/Markdown.svelte";

	let path;
	$: path = $page.url.pathname;
</script>

{#if !path.includes("/photos/")}
	<Markdown>
		{#if path !== "/content"}
			<a href="/content#blog">&larr; Back</a>
		{/if}
		<slot />
	</Markdown>
{:else}
	<slot />
{/if}
