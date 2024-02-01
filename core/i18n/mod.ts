import type { AllowedLanguage } from "@/core/types.ts";

const ALLOWED_LANGUAGES: Array<AllowedLanguage> = ["en", "de", "zh"];

export function isAllowedLanguage(lang: string): lang is AllowedLanguage {
	return ALLOWED_LANGUAGES.includes(lang as AllowedLanguage);
}

// Really common translation
export const back_to_home: Record<AllowedLanguage, string> = {
	en: "Back to home page",
	de: "Zurück zur Startseite",
	zh: "返回主页",
};
