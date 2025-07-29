<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { t } from '$lib/i18n';
	import { Moon, Sun, SunMoon } from '@lucide/svelte';
	import { userPrefersMode, resetMode, setMode } from 'mode-watcher';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
		<span class="sr-only">{$t('common.theme.current')}</span>
		{#if userPrefersMode.current === 'dark'}
			<Moon class="h-[1.2rem] w-[1.2rem]" />
		{:else if userPrefersMode.current === 'light'}
			<Sun class="h-[1.2rem] w-[1.2rem]" />
		{:else}
			<SunMoon class="h-[1.2rem] w-[1.2rem]" />
		{/if}
		<span>{$t(`common.theme.${userPrefersMode.current}`)}</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Item onclick={() => setMode('light')}>
			<Sun class="h-[1.2rem] w-[1.2rem]" />
			{$t('common.theme.light')}
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')}>
			<Moon class="h-[1.2rem] w-[1.2rem]" />
			{$t('common.theme.dark')}
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>
			<SunMoon class="h-[1.2rem] w-[1.2rem]" />
			{$t('common.theme.system')}
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
