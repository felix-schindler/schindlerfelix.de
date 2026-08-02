<script>
	import { m } from '$lib/paraglide/messages';

	const { data } = $props();

	const dateFmt = $derived(new Intl.DateTimeFormat(data.lang, { dateStyle: 'long' }));
	const LAST_UPDATED = {
		original: new Date('2026-05-14'),
		feedback: new Date('2025-05-14')
	};
</script>

<div class="wrap-break-words mx-auto max-w-3xl space-y-2 hyphens-auto">
	<h1 class="mb-2 text-center font-heading text-4xl font-semibold tracking-tight">
		{m.cup_privacy()}
	</h1>
	<h2>App</h2>
	<p>
		<em class="block">{m.cup_last_updated({ date: dateFmt.format(LAST_UPDATED.original) })}</em>
	</p>
	<p>{m.cup_txt_1()}</p>
	<p>{m.cup_txt_2()}</p>
	<h2>Feedback</h2>
	<p>
		<em class="block">{m.cup_last_updated({ date: dateFmt.format(LAST_UPDATED.feedback) })}</em>
	</p>
	<p>{m.cup_txt_4()}</p>
	<p>{m.cup_txt_5()}</p>
</div>
