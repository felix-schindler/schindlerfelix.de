<script>
	import "$lib/style/markdown.css"; // GitHub Markdown theme
	import "$lib/style/prism-nord.css"; // Nord style for code block (prism syntax highlighting)
	import { page } from "$app/stores";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="markdown-body">
	<slot />
</div>

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
</style>
