<script>
	import { t } from '$lib/i18n';

	const { data } = $props();

	const dateFmt = $derived(new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' }));
	const LAST_UPDATED = {
		original: new Date('2026-05-14'),
		feedback: new Date('2025-05-14')
	};
</script>

<div class="mx-auto max-w-3xl space-y-2 wrap-break-words hyphens-auto">
	<h1 class="mb-2 text-center text-4xl font-heading font-semibold tracking-tight">
		{$t('cup.privacy')}
	</h1>
	<h2>App</h2>
	<p>
		<em class="block">
			{$t('cup.last_updated', {
				// @ts-expect-error This works
				date: dateFmt.format(LAST_UPDATED.original)
			})}
		</em>
	</p>
	<p>{$t('cup.txt_1')}</p>
	<p>{$t('cup.txt_2')}</p>
	<h2>Feedback</h2>
	<p>
		<em class="block">
			{$t('cup.last_updated', {
				// @ts-expect-error This works
				date: dateFmt.format(LAST_UPDATED.feedback),
				t_date: dateFmt.format(LAST_UPDATED.feedback)
			})}
		</em>
	</p>
	<p>{$t('cup.txt_4')}</p>
	<p>{$t('cup.txt_5')}</p>
</div>
