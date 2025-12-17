<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Location } from '$lib/types';
	import createGlobe from 'cobe';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	type Marker = {
		location: [number, number];
		size: number;
	};

	const {
		class: className,
		locations
	}: {
		class?: string;
		locations: Promise<Location[]>;
	} = $props();

	let pointerInteracting = $state<number>();
	let pointerInteractionMovement = 0;
	let canvas = $state<HTMLCanvasElement>();

	// We store markers in state so the effect can track them
	let markers = $state<Marker[]>([]);
	let width = $state(0);

	// Keep phi outside so rotation persists across re-renders
	let phi = 300;

	const x = new Spring(0, {
		stiffness: 0.04,
		damping: 0.4,
		precision: 0.005
	});

	const onResize = () => {
		if (canvas) width = canvas.offsetWidth;
	};

	onMount(() => {
		window.addEventListener('resize', onResize);
		onResize();

		locations
			.then((ls) => {
				markers = ls
					.filter((l) => l.geo.lat !== 0)
					.map((l) => ({
						location: [l.geo.lat, l.geo.lon] as [number, number],
						size: 0.025
					}));
			})
			.catch(console.error);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});

	$effect(() => {
		if (!canvas || width === 0) return;

		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: phi,
			theta: 0.25,
			dark: 1,
			diffuse: 0.4,
			mapSamples: 20000,
			mapBrightness: 2,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1, 1, 1],
			markers: markers, // Reactive: updates when promise resolves
			onRender: (state) => {
				if (!pointerInteracting) {
					phi -= 0.0005;
				}
				state.phi = phi + x.current;
			}
		});

		return () => {
			globe.destroy();
		};
	});
</script>

<main class={cn('absolute inset-0 mx-auto aspect-square w-full max-w-[600px]', className)}>
	<canvas
		bind:this={canvas}
		class="h-full w-full cursor-grab [contain:layout_paint_size] active:cursor-grabbing"
		onpointerdown={(e) => {
			pointerInteracting = e.clientX - pointerInteractionMovement;
		}}
		onpointerup={() => {
			pointerInteracting = undefined;
		}}
		onpointerout={() => {
			pointerInteracting = undefined;
		}}
		onmousemove={(e) => {
			if (pointerInteracting !== undefined) {
				const delta = e.clientX - pointerInteracting;
				pointerInteractionMovement = delta;
				x.set(delta / 200);
			}
		}}
	></canvas>
</main>
