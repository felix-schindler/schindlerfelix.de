<script lang="ts">
	import "$lib/style/main.css"; // Global styling
	import { page } from "$app/stores";
	import { locale, t } from "$lib/translations";
	// import { onNavigate } from "$app/navigation";

	// onNavigate(() => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((fulfil) => {
	// 		document.startViewTransition(() => new Promise(fulfil));
	// 	});
	// });

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
		header > nav > a {
			view-transition-name: nav-link;
		}

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
