<script>
	import { t } from '$lib/i18n';

	const { data } = $props();

	const dateFmt = $derived(new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' }));
	const LAST_UPDATED = {
		original: new Date('2023-03-18'),
		translations: new Date('2024-02-10'),
		feedback: new Date('2025-10-16')
	};
</script>

<div class="mx-auto max-w-3xl space-y-2 break-words hyphens-auto sm:font-serif">
	<h1 class="mb-2 text-center text-4xl font-semibold tracking-tight">
		{$t('tanuki.privacy')}
	</h1>
	<h2>App</h2>
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
	<h2>Feedback</h2>
	<p>
		<em class="block">
			{$t('tanuki.last_updated', {
				// @ts-expect-error This works
				date: dateFmt.format(LAST_UPDATED.feedback),
				t_date: dateFmt.format(LAST_UPDATED.feedback)
			})}
		</em>
	</p>
	<p>{$t('tanuki.txt_4')}</p>
	<p>{$t('tanuki.txt_5')}</p>
</div>
