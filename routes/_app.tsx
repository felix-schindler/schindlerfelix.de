import type { PageProps } from "$fresh/server.ts";
import { Link } from "@/components/utils.tsx";

export default function Layout(
	props: PageProps,
) {
	const { Component } = props;
	const { pathname } = props.url;

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
		<html lang="en">
			<head>
				<meta charSet="utf-8" />

				{/* SEO 🤖 */}
				<title>{getTitle(pathname)}</title>
				<meta
					name="description"
					content="Personal website of Felix Schindler"
				/>
				<meta name="author" content="Felix Schindler" />

				{/* Look and feel ✨ */}
				<link rel="stylesheet" href="/styles.css" />
				<link rel="icon" href="/favicon.png" type="image/png" />
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
					<Component />
				</main>
				<footer class="mt-1 p-4">
					<div class="text-center">
						<Link
							href="/legal"
							name="Impressum & Datenschutz"
						/>
					</div>
					<p class="text-center" lang="en">
						Made in{" "}
						<span class="text-sm py-1 px-1.5 uppercase font-bold bg-black text-yellow-bright select-none">
							The Länd
						</span>
					</p>
				</footer>
			</body>
		</html>
	);
}