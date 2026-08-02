<script>
	import { m } from '$lib/paraglide/messages';

	const { data } = $props();

	const dateFmt = $derived(new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' }));
	const LAST_UPDATED = {
		original: new Date('2023-03-18'),
		translations: new Date('2024-02-10'),
		feedback: new Date('2025-10-16')
	};
</script>

<div class="wrap-break-words mx-auto max-w-3xl space-y-2 hyphens-auto">
	<h1 class="mb-2 text-center font-heading text-4xl font-semibold tracking-tight">
		{m.tanuki_privacy()}
	</h1>
	<h2>App</h2>
	<p>
		<em class="block">
			{m.tanuki_last_updated({
				date: dateFmt.format(LAST_UPDATED.original),
				t_date: dateFmt.format(LAST_UPDATED.translations)
			})}
		</em>
	</p>
	<p>{m.tanuki_txt_1()}</p>
	<p>{m.tanuki_txt_2()}</p>
	<p>{m.tanuki_txt_3()}</p>
	<h2>Feedback</h2>
	<p>
		<em class="block">
			{m.tanuki_last_updated({
				date: dateFmt.format(LAST_UPDATED.feedback),
				t_date: dateFmt.format(LAST_UPDATED.feedback)
			})}
		</em>
	</p>
	<p>{m.tanuki_txt_4()}</p>
	<p>{m.tanuki_txt_5()}</p>
</div>
