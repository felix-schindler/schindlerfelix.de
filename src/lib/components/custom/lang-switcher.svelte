<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { getLocale, locales, setLocale } from '$lib/paraglide/runtime';

	const langNames: Record<string, string> = {
		en: '🇬🇧 English',
		de: '🇩🇪 Deutsch',
		zh: '🇨🇳 简体中文'
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
		<span class="sr-only">{langNames[getLocale()]}</span>
		{langNames[getLocale()]}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{#each locales as lang (lang)}
			<DropdownMenu.Item onclick={() => setLocale(lang)}>{langNames[lang]}</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
