import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./types.ts";

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
