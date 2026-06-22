<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Snippet } from 'svelte';
	import { Button } from '../ui/button';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	const {
		href,
		children,
		class: className,
		colorClass
	}: {
		href: string;
		children?: Snippet;
		class?: string;
		colorClass?: string;
	} = $props();
</script>

<Button
	{href}
	variant="outline"
	size="sm"
	class={cn(
		'group max-w-fit bg-white/40 shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
		className
	)}
>
	<div
		class={cn(
			'animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[var(--bg-size)_100%] mask-subtract! p-px [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
			colorClass
		)}
	></div>

	<div class="flex items-center">
		<span
			class="animate-gradient inline bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent"
		>
			{@render children?.()}
		</span>

		<ChevronRightIcon
			class="ml-1 size-3 transition-transform ease-in-out group-hover:translate-x-0.5"
		/>
	</div>
</Button>
