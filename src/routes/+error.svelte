<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>{page.status} &middot; Felix Schindler</title>
</svelte:head>

<div class="mx-auto mt-32 max-w-xl space-y-6 px-4 text-center">
	<h1 class="text-8xl font-heading font-semibold tracking-tighter">{page.status}</h1>
	{#if page.error?.message}
		<p class="text-lg text-muted-foreground">{page.error.message}</p>
	{/if}
	<Button href="/" variant="outline">Go to homepage</Button>
</div>
