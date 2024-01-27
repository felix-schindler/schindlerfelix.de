<script lang="ts">
	import ImageCollection from "$lib/components/ImageCollection.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	const baseImagePath = "/img/photos/china";
</script>

<ImageCollection
	country={{
		name: "China",
		mask: "/img/photos/mask.png",
		sky: "/img/photos/sky.jpg",
	}}
	cities={[
		{
			images: data.files.map((f) => `${baseImagePath}/${f}`),
		},
	]}
/>

<style>
	/* Overwrite */
	:global(.hero-title) {
		font-size: 20vw;
		bottom: 10%;
	}
</style>
