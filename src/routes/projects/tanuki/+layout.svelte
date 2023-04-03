<script>
	import { page } from "$app/stores";

	let path;
	$: path = $page.url.pathname;
</script>

<h1>
	<img
		src="https://gitlab.com/uploads/-/system/project/avatar/33025310/Tanuki-200kb.png"
		alt="Tanuki app icon"
	/>
	Tanuki for GitLab
</h1>

<p class="subtitle">
	Native GitLab client for iOS and iPadOS, made with SwiftUI.
</p>

{#if path != "/content/projects/tanuki"}
	<a href="/content/projects/tanuki">&larr; Back</a>
{/if}

<slot />

<style>
	h1 img {
		border-radius: var(--radius);
		vertical-align: bottom;
		max-height: 1.25em;
	}

	p.subtitle {
		font-size: larger;
	}
</style>
