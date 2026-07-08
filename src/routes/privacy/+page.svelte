<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('privacy.page_title')} &middot; Felix Schindler</title>
</svelte:head>

<div class="mx-auto sm:mt-16 max-w-3xl space-y-8 px-2 wrap-break-words hyphens-auto">
	<h1 class="mb-6 text-center text-4xl font-heading font-semibold tracking-tight">
		{$t('privacy.page_title')}
	</h1>

	<div class="space-y-4">
		<h2>{$t('privacy.general')}</h2>
		<p><em class="block">{$t('privacy.last_updated')}</em></p>
		<p>{$t('privacy.general_p1')}</p>
		<p>
			{$t('privacy.general_p2')}
			<a href="https://www.cloudflare.com/privacypolicy/" class="underline hover:no-underline">
				{$t('privacy.cloudflare_link')}
			</a>.
		</p>
	</div>

	<div class="space-y-4">
		<h2>{$t('privacy.contact')}</h2>
		<p>{$t('privacy.contact_p1')}</p>
	</div>

	<div class="space-y-4">
		<h2>{$t('privacy.rights')}</h2>
		<p>
			{$t('privacy.rights_p1')}
			<a href="mailto:webmaster@schindlerfelix.de" class="select-none underline hover:no-underline">
				webmaster[at]schindlerfelix.de
			</a>.
		</p>
	</div>
</div>
