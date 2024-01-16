<script lang="ts">
	import "$lib/style/main.css"; // Global styling
	import { page } from "$app/stores";
	import { locale, t } from "$lib/translations";

	import Instagram from "$lib/icons/Instagram.svelte";
	import LinkedIn from "$lib/icons/LinkedIn.svelte";
	// import Threads from "$lib/icons/Threads.svelte";

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
		<div class="links-1">
			<a href="https://www.linkedin.com/in/felix-schindler-0bb3952a6">
				<LinkedIn />
			</a>
			<a href="https://instagram.com/vhwjpzf1z0fi73a">
				<Instagram />
			</a>
			<!-- <a href="https://threads.net/@vhwjpzf1z0fi73a">
				<Threads />
			</a> -->
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

		.links-1 {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem;

			a:hover {
				color: var(--accent);
			}
		}
	}
</style>
