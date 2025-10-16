<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { t } from '$lib/i18n';
	import { Send, Trash } from '@lucide/svelte';

	const { form } = $props();
</script>

<form class="space-y-2" method="POST">
	<Card.Root class="mx-auto max-w-3xl">
		<Card.Header>
			<Card.Title>
				<h2 class="mb-0">{$t('tanuki.feedback')}</h2>
			</Card.Title>
			{#if form?.message}
				<p>{form.message}</p>
			{/if}
		</Card.Header>
		<Card.Content class="space-y-2">
			<Input placeholder={$t('tanuki.email')} name="email" type="email" value={form?.from} />
			<Textarea
				placeholder={$t('tanuki.message')}
				name="text"
				value={form?.text}
				class="min-h-32"
				required
			/>
			<div class="mt-4 flex items-center gap-2">
				<Checkbox class="cursor-pointer" id="read_legal" name="read_legal" />
				<Label class="cursor-pointer" for="read_legal">{$t('tanuki.read_legal')}</Label>
			</div>
		</Card.Content>
		<Card.Footer class="space-x-1">
			<Button type="submit"><Send /> {$t('tanuki.send')}</Button>
			<Button type="reset" variant="secondary"><Trash /> {$t('tanuki.cancel')}</Button>
		</Card.Footer>
	</Card.Root>
</form>
