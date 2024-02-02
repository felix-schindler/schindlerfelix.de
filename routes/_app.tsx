import { Link } from "@/components/mod.tsx";
import translations from "@/core/i18n/footer.json" with { type: "json" };
import type { State } from "@/core/types.ts";
import type { PageProps } from "$fresh/server.ts";

export default function Layout(
	props: PageProps<never, State>,
) {
	const pathname = props.url.pathname;
	const lang = props.state?.language ?? "en";

	function getTitle(path: string): string {
		if (path.startsWith("/photos")) {
			return "Photos";
		} else if (path.startsWith("/projects")) {
			return "Projects";
		}

		switch (path) {
			case "/":
				return "Home";
			case "/legal":
				return "Legal";
			default:
				return "Felix Schindler";
		}
	}

	return (
		<html lang={lang}>
			<head>
				<meta charSet="utf-8" />

				{/* SEO 🤖 */}
				<title>{getTitle(pathname)}</title>
				<meta name="author" content="Felix Schindler" />

				{/* Look and feel ✨ */}
				<link rel="stylesheet" href="/styles.css" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="/pwa/manifest.json" />

				<meta name="color-scheme" content="light dark" />
				<meta
					name="theme-color"
					content="#FFFFFF"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#020617"
					media="(prefers-color-scheme: dark)"
				/>
				<meta name="view-transition" content="same-origin" />
			</head>
			<body
				class="min-h-screen grid grid-rows-a1a dark:bg-slate-950"
				style={{
					"padding":
						"env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
				}}
			>
				<header class={!pathname.startsWith("/photos") ? "p-2" : ""}>
					<p class="hidden">
						Hello, person with screen reader. If you find some time please do
						let me know how I can improve the accessibility for you on this
						website. For that either contact me via E-Mail{" "}
						<a href="mailto:webmaster@schindlerfelix.de">
							webmaster@schindlerfelix.de
						</a>{" "}
						or open an issue on{" "}
						<a href="https://github.com/felix-schindler/blog/issues">GitHub</a>.
						Thank you 😊
					</p>
				</header>
				<main
					class={`mx-auto w-full ${
						!pathname.startsWith("/photos")
							? "px-4 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg"
							: ""
					}`}
				>
					<props.Component />
				</main>
				<footer class="p-4 text-center">
					<p class="mb-1">
						<span>
							&copy; Felix Schindler 2019-{new Date().getUTCFullYear()} &middot;
						</span>{" "}
						<Link
							href="/legal"
							name={translations[lang].imprint}
						/>
					</p>
					<p class="flex flex-col sm:flex-row gap-1 items-center justify-center">
						<span lang="en">
							Made in{" "}
							<a
								href="https://www.thelaend.de/"
								class="inline-block text-sm py-1 px-1.5 uppercase font-bold bg-black text-yellow-bright select-none transition-transform hover:scale-95 dark:bg-yellow-bright dark:text-black"
							>
								The Länd
							</a>
						</span>{" "}
						<span class="hidden sm:inline">&middot;</span>{" "}
						<span class="inline-flex flex-wrap gap-2">
							{[{
								name: "English",
								short: "en",
							}, {
								name: "Deutsch",
								short: "de",
							}, {
								name: "简体中文",
								short: "zh",
							}].map((language) => (
								<a
									lang={language.short}
									href={`${props.url.pathname}?lang=${language.short}`}
									class="inline-block py-1 px-2 rounded-lg bg-black text-white dark:bg-white dark:text-black transition-transform hover:scale-95"
								>
									{language.name}
								</a>
							))}
						</span>
					</p>
				</footer>
			</body>
		</html>
	);
}
