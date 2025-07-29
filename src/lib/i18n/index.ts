import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'de',
			key: 'common',
			loader: async () => (await import('./de/common.json')).default
		},
		{
			locale: 'zh',
			key: 'common',
			loader: async () => (await import('./zh/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'de',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./de/home.json')).default
		},
		{
			locale: 'zh',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./zh/home.json')).default
		},
		{
			locale: 'en',
			key: 'tanuki',
			routes: ['/projects/tanuki', '/projects/tanuki/support', '/projects/tanuki/privacy'],
			loader: async () => (await import('./en/tanuki.json')).default
		},
		{
			locale: 'de',
			key: 'tanuki',
			routes: ['/projects/tanuki', '/projects/tanuki/support', '/projects/tanuki/privacy'],
			loader: async () => (await import('./de/tanuki.json')).default
		},
		{
			locale: 'zh',
			key: 'tanuki',
			routes: ['/projects/tanuki', '/projects/tanuki/support', '/projects/tanuki/privacy'],
			loader: async () => (await import('./zh/tanuki.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
