import { join } from "$std/path/join.ts";
import ImageCollection from "@/islands/ImageCollection.tsx";

const baseImagePath = join("img", "photos", "germany");

export default async function Germany() {
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

		files[city] = imageFiles
			.filter((f) => f.isFile && f.name.endsWith(".avif"))
			.map((f) => f.name)
			.toSorted();
	}

	return (
		<ImageCollection
			country={{
				name: "Germany",
				mask: "/img/photos/germany/mask-ber.avif",
				sky: "/img/photos/sky.avif",
			}}
			cities={[
				...Object.entries(files).map(([city, files]) => ({
					name: city.charAt(0).toUpperCase() + city.slice(1),
					images: files.map((f) => "/" + join(baseImagePath, city, f)),
				})),
			]}
		/>
	);
}
