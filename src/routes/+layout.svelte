<script lang="ts">
	import "$lib/style/main.css"; // Global styling
	import { page } from "$app/stores";
	import { locale, t } from "$lib/translations";

	export let data: { views: string };

	let path: string, style: string;

	$: path = $page.url.pathname;
	$: path.includes("/photos/")
		? (style = "padding: 0")
		: (style = "padding: 0 1em");
</script>

<div class="hmf" lang={$locale}>
	<header>
		<nav>
			<a href="/" class:active={path == "/"}>{$t("common.nav.home")}</a>
			<a href="/about" class:active={path == "/about"}
				>{$t("common.nav.about")}</a
			>
			<a href="/content" class:active={path.startsWith("/content")}
				>{$t("common.nav.content")}</a
			>
		</nav>
	</header>
	<main {style}>
		<slot />
	</main>
	<footer>
		<div
			title={`${$t("common.since")} ${new Date(
				"2023-06-12"
			).toLocaleDateString()}`}
		>
			{$t("common.views")}<span class="mono">{data.views}</span>
		</div>
		<div>
			{$t("common.made_by.pre_name")}<a href="/about"
				>{$t("common.name.first")}</a
			>{$t("common.made_by.pre_location")}
			<a href="https://theländ.de" class="laend" rel="noopener noreferrer"
				>The Länd</a
			>
			{$t("common.made_by.after_location")}
		</div>
		<div class="links">
			<a href="/imprint">{$t("common.imprint")}</a>
			<a href="https://github.com/felix-schindler/blog">{$t("common.typo")}</a>
			<select bind:value={$locale}>
				<option value="de">Deutsch</option>
				<option value="en">English</option>
				<option value="zh-Hans">简体中文</option>
			</select>
		</div>
	</footer>
</div>

<style lang="scss">
	div.hmf {
		main {
			padding: 0 1em;
		}

		footer {
			display: flex;
			align-items: center;
			flex-direction: column;
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

			.links {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.25em;
				flex-wrap: wrap;

				*:not(:last-child)::after {
					content: ";";
				}
			}
		}
	}
</style>
