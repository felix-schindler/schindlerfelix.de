<script lang="ts">
	import ImageCollection from "$lib/components/ImageCollection.svelte";
</script>

<ImageCollection
	country={{
		name: "Germany",
		mask: "/img/photos/germany/mask-stgt.png",
		sky: "/img/photos/germany/sky.jpg",
	}}
	cities={[
		{
			name: "Stuttgart",
			images: [
				"/img/photos/germany/stgt/1.jpeg",
				"/img/photos/germany/stgt/2.jpeg",
				"/img/photos/germany/stgt/3.jpeg",
				"/img/photos/germany/stgt/4.jpeg",
				"/img/photos/germany/stgt/5.jpeg",
			],
		},
	]}
>
	<h3>Sources</h3>
	<p>
		Photo by <a
			href="https://unsplash.com/@prerna_bhardwaj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Prerna Bhardwaj</a
		>
		on
		<a
			href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</p>
	<p>
		Photo by <a
			href="https://unsplash.com/@oleg_mit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Oleg Mitiukhin</a
		>
		on
		<a
			href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</p>
</ImageCollection>

<style>
	/* Overwrite */
	:global(.hero-title) {
		font-size: 12vw;
		bottom: 35vh;
	}

	@media screen and (max-width: 768px) {
		:global(.hero-title) {
			bottom: 80vh;
			font-size: 15vw;
		}
	}
</style>
