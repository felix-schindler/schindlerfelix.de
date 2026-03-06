<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import type { AllowedLanguage, Experience } from '$lib/types';

	const { lang, e }: { lang: AllowedLanguage; e: Experience } = $props();

	let dateFmt = $derived(
		new Intl.DateTimeFormat(lang, {
			month: 'long',
			year: 'numeric'
		})
	);
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Description>
			{#if e.until}
				<p>{dateFmt.formatRange(Date.parse(e.from), Date.parse(e.until))}</p>
			{:else}
				<p>since {dateFmt.format(Date.parse(e.from))}</p>
			{/if}
		</Card.Description>
		<Card.Title>{e.expand[lang]?.title}</Card.Title>
		<p>{e.expand[lang]?.description}</p>
	</Card.Header>
	{#if e.technologies}
		<Card.Footer class="flex-wrap gap-1">
			{#each e.technologies as t (t)}
				<Badge variant="secondary">{t}</Badge>
			{/each}
		</Card.Footer>
	{/if}
</Card.Root>
