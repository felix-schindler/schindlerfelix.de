<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		pauseOnHover?: boolean;
		vertical?: boolean;
		repeat?: number;
		reverse?: boolean;
	};

	const {
		children,
		class: className,
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		reverse = false
	}: Props = $props();
</script>

<div
	class={cn(
		'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]',
		vertical ? 'flex-col' : 'flex-row',
		className
	)}
>
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each { length: repeat } as _, i (i)}
		<div
			class={cn(
				'flex shrink-0 justify-around [gap:var(--gap)]',
				vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
				pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
				reverse ? '![animation-direction:reverse]' : '![animation-direction:normal]'
			)}
		>
			{@render children?.()}
		</div>
	{/each}
</div>
