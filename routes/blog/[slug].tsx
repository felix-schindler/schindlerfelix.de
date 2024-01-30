import { Handlers, PageProps } from "$fresh/server.ts";
import { join } from "$std/path/join.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";

// Additional syntax highlighting
import "prism/prism-bash?no-check";

export const handler: Handlers = {
	async GET(_req, ctx) {
		const { slug } = ctx.params;

		try {
			const markdown = await Deno.readTextFile(
				join(Deno.cwd(), "routes", "blog", `${slug}.md`),
			);
			const body = render(markdown, {
				baseUrl: "https://www.schindlerfelix.de",
			});

			return await ctx.render({ slug, body });
		} catch {
			return await ctx.renderNotFound();
		}
	},
};

export default function NotesHandler(
	props: PageProps<{ slug: string; body: string }>,
) {
	const { slug, body } = props.data;

	return (
		<>
			<Head>
				<title>{encodeURIComponent(slug)} &middot; Notes</title>
				<style dangerouslySetInnerHTML={{ __html: CSS }} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
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
			<main
				data-color-mode="auto"
				data-light-theme="light"
				data-dark-theme="dark"
				class="markdown-body"
				dangerouslySetInnerHTML={{ __html: body }}
			/>
		</>
	);
}
