<script>
	import "../style/main.css"; // Global styling
	import { page } from "$app/stores";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/" class:active={path == "/"}>Home</a>
			<a href="/about" class:active={path == "/about"}>About</a>
			<a href="/blog" class:active={path == "/blog"}>Blog</a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<span>&copy; 2022 &middot; Felix Schindler</span>
		<span>
			Made in
			<a rel="noopener noreferrer" href="https://theländ.de">
				<mark>The Länd</mark>
			</a>
		</span>
		<span>
			<a href="/imprint">Imprint</a>
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

			mark {
				color: yellow;
				background-color: black;

				font-weight: 600;
				text-transform: uppercase;
				border-radius: 0;
				padding: 0.2em 0.4em;

				&:hover {
					color: black;
					background-color: yellow;
				}
			}
		}
	}
</style>
