<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Snippet } from 'svelte';

	const {
		children,
		class: className
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class={cn('grid w-full auto-rows-[20rem] grid-cols-3 gap-4', className)}>
	{@render children()}
</div>
