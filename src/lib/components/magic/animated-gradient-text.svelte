<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Snippet } from 'svelte';
	import { Button } from '../ui/button';

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
		'max-w-fit bg-white/40 shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
		className
	)}
>
	<div
		class={cn(
			'animate-gradient absolute inset-0 block h-full w-full [border-radius:inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] p-[1px] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
			colorClass
		)}
	></div>

	<div class="flex items-center">
		🎉
		<hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />

		<span
			class="animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
		>
			{@render children?.()}
		</span>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
			><path d="m9 18 6-6-6-6" /></svg
		>
	</div>
</Button>
