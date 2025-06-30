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
	locale_name?: string;
	geo: {
		lat: number;
		lon: number;
	};
	category: "region" | "city" | "small";
	parent: RecordID;
	pictures: string[];
};

export type NoteContent = BaseFields & {
	title: string;
	description: string;
	content: string;
};

export type Note = BaseFields & {
	slug: string;
	de: RecordID;
	en: RecordID;
	zh: RecordID;
	expand: {
		de: NoteContent | undefined;
		en: NoteContent | undefined;
		zh: NoteContent | undefined;
	};
};

type ExperienceType = "work" | "edu";

export type ExperienceContent = BaseFields & {
	title: string;
	description: string;
};

export type Experience = BaseFields & {
	type: ExperienceType;
	from: DateString;
	until: DateString;
	technologies: string[];
	de: RecordID;
	en: RecordID;
	zh: RecordID;
	expand: {
		de: ExperienceContent | undefined;
		en: ExperienceContent | undefined;
		zh: ExperienceContent | undefined;
	};
};

export type ExperienceMerged = {
	id: string;
	updated: string;
	created: string;
	title: string;
	description: string;
	type: ExperienceType;
	from: Date;
	until: Date | undefined;
	technologies: string[];
};

export type Project = BaseFields & {
	type: "work" | "university" | "personal" | "school";
	technologies: string[];
	link?: string;
	de: RecordID;
	en: RecordID;
	zh: RecordID;
	expand: {
		de: ProjectContent | undefined;
		en: ProjectContent | undefined;
		zh: ProjectContent | undefined;
	};
};

type ProjectContent = BaseFields & {
	title: string;
	description: string;
};

export type MergedProject = BaseFields & {
	type: "work" | "university" | "personal" | "school";
	technologies: string[];
	link?: string;
	title: string;
	description: string;
};

export interface TypedPocketBase extends PocketBase {
	collection(idOrName: "locations"): RecordService<Location>;
	collection(idOrName: "notes"): RecordService<Note>;
	collection(idOrName: "experience"): RecordService<Experience>;
	collection(idOrName: "projects"): RecordService<Project>;
}
