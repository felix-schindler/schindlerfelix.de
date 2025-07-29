<script lang="ts">
	import { ALLOWED_LANGUAGES, type AllowedLanguage } from '$lib/types';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { t } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const { currentLang }: { currentLang: AllowedLanguage } = $props();
	const initialUrl = page.url;

	async function updateLang(lang: string) {
		initialUrl.searchParams.set('lang', lang);
		await goto(initialUrl, { invalidateAll: true });
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>
		<span class="sr-only">{$t('common.current_lang')}</span>
		{$t(`common.${currentLang}`)}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{#each ALLOWED_LANGUAGES as lang (lang)}
			<DropdownMenu.Item onclick={() => updateLang(lang)}>{$t(`common.${lang}`)}</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
