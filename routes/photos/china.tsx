import { join } from "@std/path";
import type { PageProps } from "fresh";

import { loadFiles } from "@/core/mod.ts";
import ImageCollection from "@/components/photos/ImageCollection.tsx";
import Parallax from "@/components/photos/Parallex.tsx";
import ScrollEffect from "@/islands/ScrollEffect.tsx";
import type { State } from "@/utils.ts";

const baseImagePath = join("img", "photos", "china");

function getEnglishName(placeName: string): { name: string; english?: string } {
	const name = placeName.split(" ")[1];
	let english = undefined;

	switch (name) {
		case "西安":
			english = "Xi'an";
			break;
		case "终南山":
			english = "Zhongnan Mountain";
			break;
		case "上海":
			english = "Shanghai";
			break;
		case "朱家角镇":
			english = "Zhujiajiao Town";
			break;
		case "东方绿舟":
			english = "Oriental Land";
			break;
		case "青浦区":
			english = "Qingpu District, Shanghai";
			break;
		case "杭州":
			english = "Hangzhou";
			break;
		default:
			english = undefined;
	}

	return { name, english };
}

export default async function China(props: PageProps<never, State>) {
	const files = await loadFiles(baseImagePath);

	return (
		<>
			<head>
				<meta property="og:title" content="Felix Schindler" />
				<meta property="og:url" content="https://www.schindlerfelix.de/" />
				<meta
					property="og:image"
					content="https://www.schindlerfelix.de/img/photos/shanghai-thumb.avif"
				/>
				<meta property="og:type" content="website" />
			</head>
			<ScrollEffect />
			<Parallax
				country={{
					name: "China",
					mask: "/img/photos/china/mask.avif",
					sky: "/img/photos/sky.avif",
				}}
			/>
			<ImageCollection
				cities={[
					...Object.entries(files).map(([city, _files]) => ({
						...getEnglishName(city),
						images: _files.map((f) => "/" + join(baseImagePath, city, f)),
					})),
				]}
				lang={props.state.language}
			/>
		</>
	);
}
