import { join } from "$std/path/join.ts";
import ImageCollection from "@/islands/ImageCollection.tsx";

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
			english = "Qingpu District";
			break;
		case "杭州":
			english = "Hangzhou";
			break;
		default:
			english = undefined;
	}

	return { name, english };
}

export default async function China() {
	const files: Record<string, Array<string>> = {};
	const baseDirEntries = Deno.readDir(
		join(Deno.cwd(), "static", baseImagePath),
	);
	const directories = (await Array.fromAsync(baseDirEntries))
		.filter((e) => e.isDirectory)
		.map((e) => e.name)
		.toSorted();

	for (const city of directories) {
		const imageFiles = await Array.fromAsync(
			Deno.readDir(join(Deno.cwd(), "static", baseImagePath, city)),
		);
		const fileNames = imageFiles.map((f) => f.name);
		files[city] = fileNames.toSorted();
	}

	return (
		<ImageCollection
			country={{
				name: "China",
				mask: "/img/photos/mask.avif",
				sky: "/img/photos/sky.avif",
			}}
			cities={[
				...Object.entries(files).map(([city, files]) => ({
					...getEnglishName(city),
					images: files.map((f) => "/" + join(baseImagePath, city, f)),
				})),
			]}
		/>
	);
}
