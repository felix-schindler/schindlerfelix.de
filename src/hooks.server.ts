import { isAllowedLanguage, type AllowedLanguage } from '$lib/types';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const newLang = event.url.searchParams.get('lang');

	// Set new language (if valid)
	if (newLang && isAllowedLanguage(newLang)) {
		event.cookies.set('lang', newLang, { path: '/' });
	}

	// Load and validate current language
	let currentLang = event.cookies.get('lang');
	if (!currentLang || !isAllowedLanguage(currentLang)) {
		currentLang = 'en';
	}

	event.locals.lang = currentLang as AllowedLanguage;

	return resolve(event);
};
