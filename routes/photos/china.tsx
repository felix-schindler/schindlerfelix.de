import { join } from "$std/path/join.ts";
import ImageCollection from "@/islands/ImageCollection.tsx";

const baseImagePath = join("img", "photos", "china");

export default async function China() {
	const files = (await Array.fromAsync(
		Deno.readDir(join(Deno.cwd(), "static", baseImagePath)),
	)).map((f) => f.name).toSorted();

	return (
		<ImageCollection
			country={{
				name: "China",
				mask: "/img/photos/mask.png",
				sky: "/img/photos/sky.jpg",
			}}
			cities={[
				{
					images: files.map((f) => `/${baseImagePath}/${f}`),
				},
			]}
		/>
	);
}
