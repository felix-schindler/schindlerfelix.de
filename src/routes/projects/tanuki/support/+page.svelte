<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { t } from '$lib/i18n';
	import { Send, Trash } from '@lucide/svelte';
</script>

<h2>{$t('tanuki.support')}</h2>
<form
	method="GET"
	action="mailto:contact-project+felix-schindler-gitlab-ios-33025310-issue-@incoming.gitlab.com"
	class="space-y-2"
>
	<Input placeholder={$t('tanuki.subject')} name="subject" />
	<Textarea placeholder={$t('tanuki.message')} name="body" />
	<Button type="submit"><Send /> {$t('tanuki.send')}</Button>
	<Button type="reset" variant="secondary"><Trash /> {$t('tanuki.cancel')}</Button>
</form>
