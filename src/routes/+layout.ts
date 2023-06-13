import { loadTranslations, locale } from '$lib/translations';

export async function load({ url }) {
	const { pathname } = url;
	const initLocale = locale.get() || await getDefaultLocale(); // set default if no locale already set

	const [res] = await Promise.all([
		fetch("https://blog-api.deno.dev/views"),
		loadTranslations(initLocale, pathname),
	]);

	return {
		views: await res.text(),
	};
}

async function getDefaultLocale(): Promise<string> {
	enum LANG {
		DE = 'de',
		EN = 'en',
		ZH = 'zh',
	};

	let defaultLocale: string = LANG.EN;

	// Get from navigator (browser)
	const { browser } = await import('$app/environment');
	if (browser) {
		const navLang = navigator.language;

		// Check whether the navigator language if supported
		if (navLang.startsWith(LANG.EN)) {
			// Already set to EN
		} else if (navLang.startsWith(LANG.DE)) {
			defaultLocale = LANG.DE;
		} else if (navLang.startsWith(LANG.ZH)) {
			defaultLocale = "zh-Hans";
		}
	}

	return defaultLocale;
}
