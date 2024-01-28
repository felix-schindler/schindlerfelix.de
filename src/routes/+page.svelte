<script lang="ts">
	import { t } from "$lib/translations";
</script>

<div class="intro">
	<h1>{$t("common.name.full")}</h1>
	<p>{$t("home.study")}</p>
	<a href="/about" role="button">{$t("home.more")} ↗</a>
</div>

<style lang="scss">
	div.intro {
		text-align: center;

		h1 {
			margin-top: 1em;
			margin-bottom: 0;
			font-size: calc(1em + 10vh);

			color: transparent;
			background-image: linear-gradient(to bottom right, var(--accent), var(--accent-alt));
			background-clip: text;
			-webkit-background-clip: text;
			background-size: cover;
			background-repeat: no-repeat;

			@media (min-width: 1024px) {
				font-size: calc(1em + 12vh);
			}
		}

		p {
			margin-block: 1em;
			font-size: calc(1em + 3vh);

			@media (min-width: 1024px) {
				font-size: calc(1em + 4vh);
			}
		}

		a[role="button"] {
			transition: 200ms all;
			font-size: calc(0.9em + 1.75vh);

			&:hover {
				box-shadow: 0.25em 0.25em;
			}

			&:active {
				box-shadow: 0 0;
			}
		}
	}
</style>
