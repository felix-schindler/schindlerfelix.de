import ImageCollection from "@/islands/ImageCollection.tsx";

export default function Germany() {
	return (
		<ImageCollection
			country={{
				name: "Germany",
				mask: "/img/photos/germany/mask-ber.avif",
				sky: "/img/photos/sky.avif",
			}}
			cities={[
				{
					name: "Stuttgart",
					images: [
						"/img/photos/germany/stgt/1.avif",
						"/img/photos/germany/stgt/2.avif",
						"/img/photos/germany/stgt/3.avif",
						"/img/photos/germany/stgt/4.avif",
						"/img/photos/germany/stgt/5.avif",
					],
				},
				{
					name: "Berlin",
					images: [
						"/img/photos/germany/berlin/1.avif",
						"/img/photos/germany/berlin/2.avif",
						"/img/photos/germany/berlin/3.avif",
						"/img/photos/germany/berlin/4.avif",
						"/img/photos/germany/berlin/5.avif",
						"/img/photos/germany/berlin/6.avif",
					],
				},
			]}
		/>
	);
}
