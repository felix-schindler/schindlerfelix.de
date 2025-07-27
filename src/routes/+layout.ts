import { loadTranslations } from '$lib/i18n';
import { isAllowedLanguage, type AllowedLanguage } from '$lib/types';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
	let initLocale = url.searchParams.get('lang'); // get from cookie, user session, ...

	if (!isAllowedLanguage(initLocale)) {
		initLocale = 'en';
	}

	await loadTranslations(initLocale, url.pathname); // keep this just before the `return`

	return {
		currentLang: initLocale as AllowedLanguage
	};
};
