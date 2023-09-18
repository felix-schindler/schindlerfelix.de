<script>
	import ImageCollection from "$lib/components/ImageCollection.svelte";
	import Markdown from "$lib/components/Markdown.svelte";
</script>

<ImageCollection
	country={{
		name: "China",
		mask: "/img/photos/china/mask.png",
		sky: "/img/photos/china/sky.jpg",
	}}
	cities={[
		{
			name: "西安市",
			english: "Xi'an",
			images: [],
		},
	]}
>
	<Markdown>
		<h2>Sources</h2>
		<p>
			This is just a placeholder for now, until I start adding pictures.
			Inspiration and pictures by <a href="https://eliasruiz.com/china"
				>Elias Ruiz</a
			>
		</p>
	</Markdown>
</ImageCollection>

<style>
	/* Overwrite */
	:global(.hero-title) {
		font-size: 20vw;
		bottom: 10%;
	}
</style>
