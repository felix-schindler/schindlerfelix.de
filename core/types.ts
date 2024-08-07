import type PocketBase from "pocketbase";
import type { RecordService } from "pocketbase";

export type AllowedLanguage = "en" | "de" | "zh";

type RecordID = string;
type DateString = string;

export type State = {
	language: AllowedLanguage;
};

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
};

type Region = BaseFields & {
	name_en: string;
	name_de: string;
	name_zh: string;
};

export interface TypedPocketBase extends PocketBase {
	collection(idOrName: "regions"): RecordService<Region>;
	collection(idOrName: "locations"): RecordService<Location>;
}
