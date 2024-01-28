import i18n, { type Config } from "sveltekit-i18n";
import lang from "./lang.json";

const deLoaders = [
	{
		locale: "de",
		key: "common",
		loader: async () => (await import("./de/common.json")).default,
	},
	{
		locale: "de",
		key: "home",
		routes: ["/"], // you can use regexes as well!
		loader: async () => (await import("./de/home.json")).default,
	},
	{
		locale: "de",
		key: "about",
		routes: ["/about"],
		loader: async () => (await import("./de/about.json")).default,
	},
	{
		locale: "de",
		key: "content",
		routes: ["/content"],
		loader: async () => (await import("./de/content.json")).default,
	},
];

const enLoaders = [
	{
		locale: "en",
		key: "common",
		loader: async () => (await import("./en/common.json")).default,
	},
	{
		locale: "en",
		key: "home",
		routes: ["/"], // you can use regexes as well!
		loader: async () => (await import("./en/home.json")).default,
	},
	{
		locale: "en",
		key: "about",
		routes: ["/about"],
		loader: async () => (await import("./en/about.json")).default,
	},
	{
		locale: "en",
		key: "content",
		routes: ["/content"],
		loader: async () => (await import("./en/content.json")).default,
	},
];

const zhHansLoaders = [
	{
		locale: "zh-Hans",
		key: "common",
		loader: async () => (await import("./zh-Hans/common.json")).default,
	},
	{
		locale: "zh-Hans",
		key: "home",
		routes: ["/"], // you can use regexes as well!
		loader: async () => (await import("./zh-Hans/home.json")).default,
	},
	{
		locale: "zh-Hans",
		key: "about",
		routes: ["/about"],
		loader: async () => (await import("./zh-Hans/about.json")).default,
	},
	{
		locale: "zh-Hans",
		key: "content",
		routes: ["/content"],
		loader: async () => (await import("./zh-Hans/content.json")).default,
	},
];

const config: Config = {
	translations: {
		de: { lang },
		en: { lang },
		"zh-Hans": { lang },
	},
	loaders: [...deLoaders, ...enLoaders, ...zhHansLoaders],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
