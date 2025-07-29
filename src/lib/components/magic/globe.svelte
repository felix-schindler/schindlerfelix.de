<script lang="ts">
	import { cn } from '$lib/components/utils';
	import type { Location } from '$lib/types';
	import createGlobe from 'cobe';
	import { onDestroy, onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	const {
		class: className,
		locations
	}: {
		class?: string;
		locations: Promise<Location[]>;
	} = $props();

	let pointerInteracting: number | null = null;
	let pointerInteractionMovement = 0;
	let canvas = $state<HTMLCanvasElement>();
	const x = new Spring(0, {
		stiffness: 0.04,
		damping: 0.4,
		precision: 0.005
	});

	let phi = 300;
	let width = $state(0);
	const onResize = () => {
		width = canvas?.offsetWidth ?? 0;
	};
	let globe = $state<ReturnType<typeof createGlobe>>();

	onMount(() => {
		// Adds the resize event listener when the component is mounted
		window.addEventListener('resize', onResize);
		onResize();

		// Initializes the globe with specific options
		globe = createGlobe(canvas!, {
			devicePixelRatio: 2,
			width: width,
			height: width,
			phi: phi,
			theta: 0.25,
			dark: 1,
			diffuse: 0.4, // 1.2
			mapSamples: 20000,
			mapBrightness: 2, // 6
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1, 1, 1],
			markers: [],
			onRender: (state) => {
				if (!pointerInteracting) {
					phi -= 0.0005;
				}
				state.phi = phi + x.current;
				state.width = width * 2;
				state.height = width * 2;
			}
		});

		globe.render();

		locations
			.then((ls) => {
				// Destroy old glboe
				globe?.destroy();

				// Create new globe with markers
				globe = createGlobe(canvas!, {
					devicePixelRatio: 2,
					width: width,
					height: width,
					phi: phi,
					theta: 0.25,
					dark: 1,
					diffuse: 0.4, // 1.2
					mapSamples: 20000,
					mapBrightness: 2, // 6
					baseColor: [0.3, 0.3, 0.3],
					markerColor: [251 / 255, 100 / 255, 21 / 255],
					glowColor: [1, 1, 1],
					markers: ls
						.filter((l) => l.geo.lat !== 0)
						.map((l) => {
							return {
								location: [l.geo.lat, l.geo.lon],
								size: 0.025
							};
						}),
					onRender: (state) => {
						if (!pointerInteracting) {
							phi -= 0.0005;
						}
						state.phi = phi + x.current;
						state.width = width * 2;
						state.height = width * 2;
					}
				});

				// Render new globe
				globe.render();
			})
			.catch((e) => {
				console.error(e);
			});

		return () => {
			// Removes the resize event listener when the component is unmounted to prevent memory leaks
			window.removeEventListener('resize', onResize);

			// Destory globe
			globe?.destroy();
		};
	});

	onDestroy(() => {
		globe?.destroy();
	});
</script>

<main class={cn('absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]', className)}>
	<canvas
		class="h-full w-full [contain:layout_paint_size]"
		bind:this={canvas}
		onpointerdown={(e) => {
			pointerInteracting = e.clientX - pointerInteractionMovement;
			canvas!.style.cursor = 'grabbing';
		}}
		onpointerup={() => {
			pointerInteracting = null;
			canvas!.style.cursor = 'grab';
		}}
		onpointerout={() => {
			pointerInteracting = null;
			canvas!.style.cursor = 'grab';
		}}
		onmousemove={(e) => {
			if (pointerInteracting !== null) {
				const delta = e.clientX - pointerInteracting;
				pointerInteractionMovement = delta;
				x.set(delta / 200);
			}
		}}
	></canvas>
</main>
