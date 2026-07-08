<script lang="ts">
	import LangSwitcher from '$lib/components/custom/lang-switcher.svelte';
	import ModeSwitcher from '$lib/components/custom/mode-switcher.svelte';
	import AnimatedGradientText from '$lib/components/magic/animated-gradient-text.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Toaster } from '$lib/components/ui/sonner';
	import { t } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	let { children, data } = $props();

	$effect(() => {
		document.documentElement.lang = data.lang;
	});
</script>

<a class="skip-link" href="#main-content">{$t('common.skip_link')}</a>

<div>
	<header class="flex flex-col flex-wrap items-center justify-between gap-2 p-4 sm:flex-row">
		<nav aria-label={$t('common.nav_site')} class="flex flex-wrap items-center gap-2">
			<ModeSwitcher />
			<LangSwitcher currentLang={data.lang} />
		</nav>
		<nav aria-label={$t('common.nav_projects')} class="flex flex-wrap items-center gap-2">
			<AnimatedGradientText href="/projects/tanuki">Tanuki for GitLab</AnimatedGradientText>
			<AnimatedGradientText href="/projects/cup">Cup for Gitea</AnimatedGradientText>
		</nav>
	</header>
	<main id="main-content" class="px-4 md:p-0" tabindex="-1">
		{@render children()}
	</main>
	<footer class="mt-10 p-4 text-center">
		&copy; Felix Schindler 2019-{new Date().getUTCFullYear()} &middot;
		<Button href="/privacy" variant="link" class="p-0 text-base">{$t('common.privacy')}</Button>
	</footer>

	<Toaster richColors position="bottom-center" />
	<ModeWatcher />
</div>
