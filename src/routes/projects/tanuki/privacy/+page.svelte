<script>
	import { t } from '$lib/i18n';

	const { data } = $props();

	const LAST_UPDATED = {
		original: new Date('2023-03-18'),
		translations: new Date('2024-02-10')
	};

	const dateFmt = new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' });
</script>

<h2>Privacy statement</h2>
<div class="space-y-2">
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
