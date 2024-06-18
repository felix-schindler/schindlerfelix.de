import { Handlers, PageProps } from "$fresh/server.ts";
import { join } from "@std/path";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "@deno/gfm";

import { ButtonLink, SiteTitle } from "@/components/mod.tsx";
import translations from "@/core/i18n/notes.json" with { type: "json" };
import type { AllowedLanguage, State } from "@/core/types.ts";

// Additional syntax highlighting
import "prism/prism-bash?no-check";
import "prism/prism-nginx?no-check";

type BlogProps = {
	lang: AllowedLanguage;
	title: string;
	body: string;
};

export const handler: Handlers<BlogProps, State> = {
	async GET(_req, ctx) {
		// Encode the slug to prevent directory traversal
		const slug = encodeURIComponent(ctx.params.slug);
		const lang = ctx.state.language;

		try {
			const markdown = await Deno.readTextFile(
				join(Deno.cwd(), "routes", "blog", lang, `${slug}.md`),
			);
			const title = markdown.split("\n")[0].split("# ")[1];
			const body = render(markdown, {
				baseUrl: "https://www.schindlerfelix.de",
			});

			return await ctx.render({ lang, title, body });
		} catch {
			return await ctx.renderNotFound();
		}
	},
};

export default function Notes(
	props: PageProps<BlogProps, State>,
) {
	const lang = props.data.lang;

	return (
		<>
			<Head>
				<title>
					{props.data.title} &middot; {translations[lang].notes.heading}
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
			</Head>
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
					dangerouslySetInnerHTML={{ __html: props.data.body }}
				/>
			</div>
		</>
	);
}
