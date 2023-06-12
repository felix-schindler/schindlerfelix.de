<script>
	import ImageCollection from "$lib/components/ImageCollection.svelte";
	import Markdown from "$lib/components/Markdown.svelte";
</script>

<ImageCollection
	country={{
		name: "Germany",
		mask: "/img/photos/germany/mask-ber.png",
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
		{
			name: "Berlin",
			images: [
				"/img/photos/germany/berlin/1.jpeg",
				"/img/photos/germany/berlin/2.jpeg",
				"/img/photos/germany/berlin/3.jpeg",
				"/img/photos/germany/berlin/4.jpeg",
				"/img/photos/germany/berlin/5.jpeg",
				"/img/photos/germany/berlin/6.jpeg",
			],
		},
	]}
>
	<Markdown>
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
	</Markdown>
</ImageCollection>
