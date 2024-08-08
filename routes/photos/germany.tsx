import { join } from "@std/path";

import { loadFiles } from "@/core/mod.ts";
import ImageCollection from "@/components/photos/ImageCollection.tsx";
import Parallax from "@/components/photos/Parallex.tsx";
import ScrollEffect from "@/islands/ScrollEffect.tsx";

import type { PageProps } from "fresh";
import type { State } from "@/utils.ts";

const baseImagePath = join("img", "photos", "germany");

export default async function Germany(props: PageProps<never, State>) {
	const files = await loadFiles(baseImagePath);

	return (
		<>
			<head>
				<meta property="og:title" content="Felix Schindler" />
				<meta property="og:url" content="https://www.schindlerfelix.de/" />
				<meta
					property="og:image"
					content="https://www.schindlerfelix.de/img/photos/berlin-thumb.avif"
				/>
				<meta property="og:type" content="website" />
			</head>
			<ScrollEffect />
			<Parallax
				country={{
					name: "Germany",
					mask: "/img/photos/germany/mask.avif",
					sky: "/img/photos/sky.avif",
				}}
			/>
			<ImageCollection
				cities={[
					...Object.entries(files).map(([city, _files]) => ({
						name: city.charAt(0).toUpperCase() + city.slice(1),
						images: _files.map((f) => "/" + join(baseImagePath, city, f)),
					})),
				]}
				lang={props.state.language}
			/>
		</>
	);
}
