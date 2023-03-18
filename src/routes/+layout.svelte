<script>
	import "../style/main.css"; // Global styling
	import { page } from "$app/stores";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/" class:active={path == "/"}>🏠 Home</a>
			<a href="/about" class:active={path == "/about"}>👨🏻‍💻 About</a>
			<a href="/blog" class:active={path.startsWith("/blog")}>✨ Blog</a>
			{#if path.startsWith("/projects")}
				<a href="/projects" class="active">📁 Projects</a>
			{:else}
				<a href="/projects">📂 Projects</a>
			{/if}
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<span>
			Made with ❤️‍🔥 by <a href="/about">Felix</a> in
			<a href="https://theländ.de" class="laend" rel="noopener noreferrer">
				The Länd
			</a>
		</span>
		<span>
			<a href="/imprint">📜 Imprint</a>
		</span>
	</footer>
</div>

<style lang="scss">
	div.hmf {
		header {
			display: flex;
			justify-content: space-around;
		}

		main {
			padding: 0 1em;
		}

		footer {
			display: flex;
			align-items: center;
			flex-direction: column-reverse;
			gap: 0.75em;

			@media (max-width: 1024px) {
				justify-content: space-around;
			}

			a.laend {
				text-decoration: none !important;

				color: yellow;
				background-color: black;

				font-weight: 600;
				text-transform: uppercase;
				padding: 0.2em 0.4em;

				transition: all 200ms;

				&:hover {
					color: black;
					background-color: yellow;

					box-shadow: 5px 5px;
				}

				&:active {
					box-shadow: 0 0;
				}
			}
		}
	}
</style>
