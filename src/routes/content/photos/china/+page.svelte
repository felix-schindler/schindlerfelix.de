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
			name: "西安",
			english: "Xi'an",
			images: [
				"https://source.unsplash.com/random/1",
				"https://source.unsplash.com/random/2",
				"https://source.unsplash.com/random/3",
				"https://source.unsplash.com/random/4",
				"https://source.unsplash.com/random/5",
			],
		},
	]}
>
	<Markdown>
		<h2>Sources</h2>
		<a href="https://eliasruiz.com/china">Elias Ruiz</a>
	</Markdown>
</ImageCollection>

<style>
	/* Overwrite */
	:global(.hero-title) {
		font-size: 20vw;
		bottom: 10%;
	}
</style>
