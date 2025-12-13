import { isAllowedLanguage, type AllowedLanguage } from '$lib/types';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/projects/tanuki/support') {
		redirect(303, '/projects/tanuki/feedback');
	} else if (!event.url.pathname.includes('.')) {
		const newLang = event.url.searchParams.get('lang');

		// Set new language (if valid)
		if (newLang && isAllowedLanguage(newLang)) {
			event.cookies.set('lang', newLang, { path: '/' });
		}

		// Load and validate current language
		let currentLang: AllowedLanguage | undefined;
		const cookieLang = event.cookies.get('lang');
		if (cookieLang && isAllowedLanguage(cookieLang)) {
			currentLang = cookieLang;
		} else {
			// Get language from request
			const languages = event.request.headers.get('accept-language');
			const langMatch = languages?.match(/([a-zA-Z]{2})(?:-[a-zA-Z]{2})?/);
			if (langMatch && isAllowedLanguage(langMatch[1])) {
				currentLang = langMatch[1];
			}
		}

		if (!currentLang) {
			currentLang = 'en';
		}

		event.locals.lang = currentLang;
	}

	return resolve(event);
};
