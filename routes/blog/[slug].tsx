import { Handlers, PageProps } from "$fresh/server.ts";
import { join } from "$std/path/join.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";

import { ButtonLink } from "@/components/mod.tsx";
import translations from "@/core/i18n/notes.json" with { type: "json" };
import type { AllowedLanguage, State } from "@/core/types.ts";

// Additional syntax highlighting
import "prism/prism-bash?no-check";

type BlogProps = {
	lang: AllowedLanguage;
	slug: string;
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
			const body = render(markdown, {
				baseUrl: "https://www.schindlerfelix.de",
			});

			return await ctx.render({ lang, slug, body });
		} catch {
			return await ctx.renderNotFound();
		}
	},
};

export default function NotesHandler(
	props: PageProps<BlogProps, State>,
) {
	const lang = props.data.lang;

	return (
		<>
			<Head>
				<title>
					{encodeURIComponent(props.data.slug)} &middot;{" "}
					{translations[lang].notes.heading}
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
				<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
					{translations[lang].notes.heading}
				</h1>
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
					class="markdown-body"
					dangerouslySetInnerHTML={{ __html: props.data.body }}
				/>
			</div>
		</>
	);
}
