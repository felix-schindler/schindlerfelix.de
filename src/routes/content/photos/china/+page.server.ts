import type { PageServerLoad } from "./$types";
import { join } from "node:path";
import { readdir } from "node:fs/promises";

export const load: PageServerLoad = async () => {
	// @ts-ignore - If you don't use Deno, Deno isn't defined.
	const dirname = import.meta.dirname ?? Deno.cwd();
	const files = await readdir(join(dirname, "static", "img", "photos", "china"));
	files.sort();

	return {
		files,
	};
};
