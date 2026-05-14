<script lang="ts">
	import { pb } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { t } from '$lib/i18n';
	import { Send, Trash } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	let from = $state('');
	let text = $state('');
	let accepted = $state(false);

	function submitHandler(e: SubmitEvent) {
		e.preventDefault();

		if (!accepted) {
			toast.error('You need to accept the privacy policy to submit feedback.');
			return;
		}

		const promise = pb.collection('cup_feedback').create({
			from,
			text
		});

		toast.promise(promise, {
			loading: 'Sending feedback...',
			success: () => {
				text = '';
				return 'Feedback sent!';
			},
			error: (e) => `Failed to send feedback - ${String(e)}`
		});
	}
</script>

<form class="space-y-2" onsubmit={submitHandler}>
	<Card.Root class="mx-auto max-w-3xl">
		<Card.Header>
			<Card.Title>
				<h2 class="mb-0">{$t('cup.feedback')}</h2>
			</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-2">
			<Input placeholder={$t('cup.email')} name="email" type="email" bind:value={from} />
			<Textarea
				placeholder={$t('cup.message')}
				name="text"
				bind:value={text}
				class="min-h-32"
				required
			/>
			<div class="mt-4 flex items-center gap-2">
				<Checkbox
					class="cursor-pointer"
					id="read_legal"
					name="read_legal"
					bind:checked={accepted}
				/>
				<Label class="cursor-pointer" for="read_legal">{$t('cup.read_legal')}</Label>
			</div>
		</Card.Content>
		<Card.Footer class="space-x-1">
			<Button type="submit"><Send /> {$t('cup.send')}</Button>
			<Button type="reset" variant="secondary"><Trash /> {$t('cup.cancel')}</Button>
		</Card.Footer>
	</Card.Root>
</form>
