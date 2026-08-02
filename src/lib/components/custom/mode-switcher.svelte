<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { m } from '$lib/paraglide/messages';
	import { Moon, Sun, SunMoon } from '@lucide/svelte';
	import { userPrefersMode, resetMode, setMode } from 'mode-watcher';

	const themeLabels = {
		light: m.common_theme_light,
		dark: m.common_theme_dark,
		system: m.common_theme_system
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
		<span class="sr-only">{m.common_theme_current()}</span>
		{#if userPrefersMode.current === 'dark'}
			<Moon class="h-[1.2rem] w-[1.2rem]" />
		{:else if userPrefersMode.current === 'light'}
			<Sun class="h-[1.2rem] w-[1.2rem]" />
		{:else}
			<SunMoon class="h-[1.2rem] w-[1.2rem]" />
		{/if}
		<span>{themeLabels[userPrefersMode.current]()}</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Item onclick={() => setMode('light')}>
			<Sun class="h-[1.2rem] w-[1.2rem]" />
			{m.common_theme_light()}
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')}>
			<Moon class="h-[1.2rem] w-[1.2rem]" />
			{m.common_theme_dark()}
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>
			<SunMoon class="h-[1.2rem] w-[1.2rem]" />
			{m.common_theme_system()}
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
