<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
	import { tick } from "svelte";

	export let gap = 10;
	export let maxColumnWidth = 350;
	export let hover = true;
	export let loading: "eager" | "lazy" = "lazy";

	const dispatch = createEventDispatcher();

	let slotHolder: HTMLDivElement | null = null;
	let columns: any[] = [];
	let galleryWidth = 0;
	let columnCount = 0;

	$: columnCount = Math.floor(galleryWidth / maxColumnWidth) || 1;
	$: columnCount && Draw();
	$: galleryStyle = `grid-template-columns: repeat(${columnCount}, 1fr); --gap: ${gap}px`;

	onMount(Draw);

	function HandleClick(
		e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }
	) {
		dispatch("click", {
			src: e.currentTarget.src,
			alt: e.currentTarget.alt,
			loading: e.currentTarget.loading,
			class: e.currentTarget.className,
		});
	}

	async function Draw() {
		await tick();

		if (!slotHolder) {
			return;
		}

		const images = Array.from(slotHolder.childNodes).filter(
			// @ts-ignore
			(child) => child.tagName === "IMG"
		);
		columns = [];

		// Fill the columns with image URLs
		for (let i = 0; i < images.length; i++) {
			const idx = i % columnCount;
			columns[idx] = [
				...(columns[idx] || []),
				// @ts-ignore
				{ src: images[i].src, alt: images[i].alt, class: images[i].className },
			];
		}
	}
</script>

<div id="slotHolder" bind:this={slotHolder}>
	<slot />
</div>

{#if columns}
	<div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
		{#each columns as column}
			<div class="column">
				{#each column as img}
					<img
						src={img.src}
						alt={img.alt}
						on:click={HandleClick}
						on:keydown={() => {}}
						class="{hover === true ? 'img-hover' : ''} {img.class}"
						{loading}
					/>
				{/each}
			</div>
		{/each}
	</div>
{/if}

<style>
	#slotHolder {
		display: none;
	}
	#gallery {
		width: 100%;
		display: grid;
		gap: var(--gap);
	}
	#gallery .column {
		display: flex;
		flex-direction: column;
	}
	#gallery .column * {
		width: 100%;
		margin-top: var(--gap);
	}
	#gallery .column *:nth-child(1) {
		margin-top: 0;
	}
	.img-hover {
		opacity: 0.9;
		transition: all 0.2s;
	}
	.img-hover:hover {
		opacity: 1;
		transform: scale(1.05);
	}
</style>
