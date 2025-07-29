<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/components/utils';

	let className: string | undefined = undefined;
	export { className as class };
	export let magnification: number = 60;
	export let distance: number = 140;

	let mouseX = Infinity;
	function handleMouseMove(e: MouseEvent) {
		mouseX = e.pageX;
	}

	function handleMouseLeave() {
		mouseX = Infinity;
	}
</script>

<Motion let:motion>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		use:motion
		on:mousemove={(e) => handleMouseMove(e)}
		on:mouseleave={handleMouseLeave}
		class={cn(
			'mx-auto flex h-14 w-max items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10',
			className
		)}
	>
		<slot {mouseX} {magnification} {distance}></slot>
	</div>
</Motion>
