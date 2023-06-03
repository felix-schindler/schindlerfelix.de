import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/translations';

export async function load({ url }) {
	const { pathname } = url;
	const initLocale = locale.get() || getDefaultLocale(); // set default if no locale already set
	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
}

function getDefaultLocale(): string {
	enum LANG {
		DE = 'de',
		EN = 'en',
		ZH = 'zh',
	};

	let defaultLocale: string = LANG.EN; // get from cookie, user session, ...

	if (browser) {
		const navLang = navigator.language;
		if (navLang.startsWith(LANG.EN)) {
		} else if (navLang.startsWith(LANG.DE)) {
			defaultLocale = LANG.DE;
		} else if (navLang.startsWith(LANG.ZH)) {
			defaultLocale = "zh-Hans";
		}
	}

	return defaultLocale;
}
