<script>
	import { page } from "$app/stores";
	import Markdown from "$lib/components/Markdown.svelte";

	let path;
	$: path = $page.url.pathname;
</script>

{#if !path.includes("/photos/")}
	<Markdown>
		<slot />
	</Markdown>
{:else}
	<slot />
{/if}
