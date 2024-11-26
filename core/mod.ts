import PocketBase from "pocketbase";
import type { TypedPocketBase } from "@/core/types.ts";

// THE PocketBase instance
export const pb = new PocketBase("https://pb.schindlerfelix.de")
	.autoCancellation(false) as TypedPocketBase;

/** @var Record<string, Record<number, string>> */
export const tw = {
	red: {
		500: "rgb(239, 68, 68)",
		600: "rgb(220, 38, 38)",
	},
	blue: {
		100: "rgb(219, 234, 254)",
		950: "rgb(23, 37, 84)",
	},
	green: {
		500: "rgb(34, 197, 94)",
	},
	emerald: {
		700: "rgb(4, 120, 87)",
	},
} as const;

export async function loadFiles(
	baseImagePath: string,
): Promise<Record<string, Array<string>>> {
	const { join } = await import("@std/path");

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

	return files;
}
