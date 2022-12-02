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
			<a href="/blog" class:active={path == "/blog"}>✨ Blog</a>
			<a href="mailto:webmaster@schindlerfelix.de">📧 Contact</a>
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
		& > header {
			display: flex;
			justify-content: space-around;
		}

		& > main {
			padding: 0 1em;
		}

		& > footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 0.5em;

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
