<script>
	import { page } from "$app/stores";
	import "./markdown.css"; // GitHub Markdown theme
	import "./prism-nord.css"; // Nord style for code block (prism syntax highlighting)

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<article class="markdown-body">
	{#if path != "/blog"}
		<a href="/blog">&larr; Back</a>
	{/if}
	<slot />
</article>

<style lang="scss">
	.markdown-body {
		border-radius: var(--radius);
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;

		@media (max-width: 767px) {
			padding: 15px;
		}
	}

	a {
		display: block;
		margin-block: 1em;
	}
</style>
