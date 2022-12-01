<script lang="ts">
	import { fade } from "svelte/transition";

	const btn_en = "more about me";
	const btn_zh = "更多关于我";
	let btn = btn_zh;
</script>

<div class="intro">
	<h1>Felix Schindler</h1>
	<p>
		Studying <span class="mono">computer science</span> as a German-Chinese double
		degree
	</p>
	<p>
		<small>
			{#key btn}
				<a
					href="/about"
					role="button"
					on:mouseenter={() => (btn = btn_en)}
					on:mouseleave={() => (btn = btn_zh)}
					in:fade
				>
					{btn}
				</a>
			{/key}
		</small>
	</p>
	<p class="icons">
		<a href="https://github.com/felix-schindler" rel="noopener noreferrer">
			<i class="bi bi-github" role="img" aria-labelledby="GitHub" />
		</a>
		<a href="mailto:webmaster@schindlerfelix.de">
			<i class="bi bi-envelope" role="img" aria-labelledby="Mail" />
		</a>
	</p>
</div>

<style lang="scss">
	div.intro {
		text-align: center;

		h1 {
			margin-top: 1em;
			margin-bottom: 0;
			font-size: 12vh;

			color: var(--accent);
		}

		p {
			margin-top: 1em;
			margin-bottom: 0;
			font-size: 4vh;

			&.icons a:hover {
				color: var(--accent);
			}
		}

		a[role="button"] {
			transition: 200ms all;

			&:hover {
				color: black;
				background-color: white;
				box-shadow: 0.25em 0.25em;
			}

			&:active {
				box-shadow: 0 0;
			}
		}
	}
</style>
