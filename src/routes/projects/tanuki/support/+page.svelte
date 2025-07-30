<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { t } from '$lib/i18n';
	import { Send, Trash } from '@lucide/svelte';
</script>

<form
	method="GET"
	action="mailto:contact-project+felix-schindler-gitlab-ios-33025310-issue-@incoming.gitlab.com"
	class="space-y-2"
>
	<Card.Root class="mx-auto max-w-3xl">
		<Card.Header>
			<Card.Title>
				<h2 class="mb-0">{$t('tanuki.support')}</h2>
			</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-2">
			<Input placeholder={$t('tanuki.subject')} name="subject" />
			<Textarea placeholder={$t('tanuki.message')} name="body" />
		</Card.Content>
		<Card.Footer class="space-x-1">
			<Button type="submit"><Send /> {$t('tanuki.send')}</Button>
			<Button type="reset" variant="secondary"><Trash /> {$t('tanuki.cancel')}</Button>
		</Card.Footer>
	</Card.Root>
</form>
