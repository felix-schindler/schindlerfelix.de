<script>
	import { t } from '$lib/i18n';

	const { data } = $props();

	const dateFmt = new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' });
	const LAST_UPDATED = {
		original: new Date('2023-03-18'),
		translations: new Date('2024-02-10')
	};
</script>

<div class="mx-auto max-w-3xl space-y-2 break-words hyphens-auto">
	<h2>{$t('tanuki.privacy')}</h2>
	<p>
		<em class="block">
			{$t('tanuki.last_updated', {
				// @ts-expect-error This works
				date: dateFmt.format(LAST_UPDATED.original),
				t_date: dateFmt.format(LAST_UPDATED.translations)
			})}
		</em>
	</p>
	<p>{$t('tanuki.txt_1')}</p>
	<p>{$t('tanuki.txt_2')}</p>
	<p>{$t('tanuki.txt_3')}</p>
</div>
