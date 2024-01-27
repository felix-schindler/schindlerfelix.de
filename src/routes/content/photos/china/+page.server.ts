import type { PageServerLoad } from "./$types";
import { join } from "node:path";
import { readdir } from "node:fs/promises";

export const load: PageServerLoad = async () => {
	// Get list of files in directory using node js
	const dirname = import.meta.dirname ?? Deno.cwd();
	const files = (
		await readdir(join(dirname, "static", "img", "photos", "china"))
	).filter((f) => f !== "mask.png" && f !== "sky.jpg");

	return {
		files,
	};
};
