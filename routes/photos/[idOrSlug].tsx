import { pb } from "@/core/mod.ts";
import ImageCollection from "@/components/photos/ImageCollection.tsx";
import Parallax from "@/components/photos/Parallex.tsx";
import ScrollEffect from "@/islands/ScrollEffect.tsx";

import type { PageProps } from "fresh";
import type { State } from "@/utils.ts";

function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function Photos(props: PageProps<never, State>) {
	const idOrSlug = encodeURIComponent(props.params.idOrSlug);

	const parent = await pb.collection("locations").getFirstListItem(
		`id='${idOrSlug}' || name_en='${capitalizeFirstLetter(idOrSlug)}'`,
	);
	const locations = await pb.collection("locations").getFullList({
		filter: `parent='${parent.id}' && pictures:length > 0`,
	});

	return (
		<>
			<head>
				<meta property="og:title" content="Felix Schindler" />
				<meta property="og:url" content="https://www.schindlerfelix.de/" />
				<meta
					property="og:image"
					content={pb.files.getURL(parent, parent.pictures[0])}
				/>
				<meta property="og:type" content="website" />
			</head>
			<ScrollEffect />
			<Parallax
				country={{
					name: parent.name_en,
					mask: `/img/photos/${parent.name_en.toLowerCase()}-mask.avif`,
					sky: "/img/photos/sky.avif",
				}}
			/>
			<ImageCollection
				cities={locations.map((loc) => {
					return {
						name: loc.locale_name,
						translation: loc.locale_name !== loc[`name_${props.state.language}`]
							? loc[`name_${props.state.language}`]
							: undefined,
						images: loc.pictures.map((pic) => pb.files.getURL(loc, pic)),
					};
				})}
				lang={props.state.language}
			/>
		</>
	);
}
