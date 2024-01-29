import { Handlers, PageProps } from "$fresh/server.ts";
import { join } from "$std/path/join.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.5.0/mod.ts";

export const handler: Handlers = {
	async GET(_req, ctx) {
		const { slug } = ctx.params;
		console.log({ dir: import.meta.dirname, slug });

		try {
			const markdown = await Deno.readTextFile(
				join(Deno.cwd(), "routes", "blog", `${slug}.md`),
			);
			const body = render(markdown, {
				baseUrl: "https://www.schindlerfelix.de",
			});

			return ctx.render({ slug, body });
		} catch {
			return await ctx.next();
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
				<title>{slug} &middot; Notes</title>
				<style dangerouslySetInnerHTML={{ __html: CSS }} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
					.markdown-body {
						--color-canvas-default: transparent !important;
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
