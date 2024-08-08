import { join } from "@std/path";
import { exists } from "@std/fs";
import { CSS, render } from "@deno/gfm";
import type { PageProps } from "fresh";

import { ButtonLink, SiteTitle } from "@/components/mod.tsx";
import translations from "@/core/i18n/notes.json" with { type: "json" };
import type { State } from "@/utils.ts";

// Additional syntax highlighting
// import "prism/prism-bash?no-check";
// import "prism/prism-nginx?no-check";

export default async function Notes(
	props: PageProps<never, State>,
) {
	// Encode the slug to prevent directory traversal
	const slug = encodeURIComponent(props.params.slug);
	const lang = props.state.language;
	const filePath = join(Deno.cwd(), "routes", "blog", lang, `${slug}.md`);

	if (!await exists(filePath)) {
		// TODO: This should return a 404 page
		throw new Error("Doesn't exist");
	}

	const markdown = await Deno.readTextFile(filePath);
	const title = markdown.split("\n")[0].split("# ")[1];
	const body = render(markdown, {
		baseUrl: "https://www.schindlerfelix.de",
	});

	return (
		<>
			<head>
				<title>
					{title} &middot; {translations[lang].notes.heading}
				</title>
				<style dangerouslySetInnerHTML={{ __html: CSS }} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
					.markdown-body {
						max-width: calc(100vw - 2rem);
					}

					.markdown-body {
						--color-canvas-default: transparent !important;
					}

					.markdown-body ul {
						list-style: disc;
					}

					.markdown-body pre {
						white-space: pre-wrap;
						word-wrap: break-word;
					}
				`,
					}}
				/>
			</head>
			<div>
				<SiteTitle name={translations[lang].notes.heading} />
				<p class="my-2.5">
					<ButtonLink
						name={`← ${translations[lang].back_to_home}`}
						href="/#notes"
					/>
				</p>

				<main
					data-color-mode="auto"
					data-light-theme="light"
					data-dark-theme="dark"
					class="markdown-body !font-sans"
					dangerouslySetInnerHTML={{ __html: body }}
				/>
			</div>
		</>
	);
}
