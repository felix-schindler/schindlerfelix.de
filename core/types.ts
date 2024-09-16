import type PocketBase from "pocketbase";
import type { RecordService } from "pocketbase";

const ALLOWED_LANGUAGES = ["en", "de", "zh"] as const;
export type AllowedLanguage = typeof ALLOWED_LANGUAGES[number];

export function isAllowedLanguage(
	lang: string | null,
): lang is AllowedLanguage {
	return ALLOWED_LANGUAGES.includes(lang as AllowedLanguage);
}

type RecordID = string;
type DateString = string;

type BaseFields = {
	id: RecordID;
	updated: DateString;
	created: DateString;
};

export type Location = BaseFields & {
	name_en: string;
	name_de: string;
	name_zh: string;
	lat: number;
	lon: number;
	category: "region" | "city" | "small";
	parent: RecordID;
};

export interface TypedPocketBase extends PocketBase {
	collection(idOrName: "locations"): RecordService<Location>;
}
