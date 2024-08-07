import { join } from "@std/path";

import { loadFiles } from "@/core/mod.ts";
import ImageCollection from "@/components/photos/ImageCollection.tsx";
import Parallax from "@/components/photos/Parallex.tsx";
import ScrollEffect from "@/islands/ScrollEffect.tsx";

import type { PageProps } from "fresh";
import type { AllowedLanguage } from "@/core/types.ts";
import type { State } from "@/utils.ts";

const baseImagePath = join("img", "photos", "korea");

function getLocalceName(
	lang: AllowedLanguage,
	placeName: string,
): { name: string; translation?: string } {
	const name = placeName.split(" ")[1];
	let translation = undefined;

	if (lang === "zh") {
		switch (name) {
			case "서울":
				translation = "首尔";
				break;
			case "제주도":
				translation = "济州岛";
				break;
			case "인천":
				translation = "仁川";
				break;
			case "속초":
				translation = "束草";
				break;
			default:
				translation = undefined;
		}
	} else {
		switch (name) {
			case "서울":
				translation = "Seoul";
				break;
			case "제주도":
				translation = "Jeju Island";
				break;
			case "인천":
				translation = "Incheon";
				break;
			case "속초":
				translation = "Sokcho";
				break;
			default:
				translation = undefined;
		}
	}

	return { name, translation };
}

export default async function Korea(props: PageProps<never, State>) {
	const lang = props.state.language;
	const files = await loadFiles(baseImagePath);

	return (
		<>
			<head>
				<meta property="og:title" content="Felix Schindler" />
				<meta property="og:url" content="https://www.schindlerfelix.de/" />
				<meta
					property="og:image"
					content="https://www.schindlerfelix.de/img/photos/korea-thumb.avif"
				/>
				<meta property="og:type" content="website" />
			</head>
			<ScrollEffect />
			<Parallax
				country={{
					name: "Korea",
					mask: "/img/photos/korea/mask.avif",
					sky: "/img/photos/sky.avif",
					bottom: "50",
				}}
			/>
			<ImageCollection
				cities={[
					...Object.entries(files).map(([city, _files]) => ({
						...getLocalceName(lang, city),
						images: _files.map((f) => "/" + join(baseImagePath, city, f)),
					})),
				]}
				lang={props.state.language}
			/>
		</>
	);
}
