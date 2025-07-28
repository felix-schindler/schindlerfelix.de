<script lang="ts">
	import LangSwitcher from '$lib/components/custom/lang-switcher.svelte';
	import ModeSwitcher from '$lib/components/custom/mode-switcher.svelte';
	import AnimatedGradientText from '$lib/components/magic/animated-gradient-text.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '../theme.css';

	let { children, data } = $props();
</script>

<div>
	<header class="flex flex-col flex-wrap items-center justify-between gap-2 p-4 sm:flex-row">
		<div class="flex flex-wrap items-center gap-2">
			<ModeSwitcher />
			<LangSwitcher currentLang={data.lang} />
		</div>
		<AnimatedGradientText href="/projects/tanuki">Tanuki for GitLab</AnimatedGradientText>
	</header>
	<main class="px-4 md:p-0">
		{@render children()}
	</main>
	<footer class="p-4"></footer>
</div>

<Toaster richColors position="bottom-center" />
<ModeWatcher />
