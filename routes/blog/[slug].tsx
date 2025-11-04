import type { PageProps } from "fresh";

import { pb } from "@/core/mod.ts";
import { ButtonLink, SiteTitle } from "@/components/mod.tsx";
import { back_to_home } from "@/core/i18n/mod.ts";
import type { State } from "@/utils.ts";

const heading = {
	"en": "Notes",
	"de": "Notizen",
	"zh": "笔记",
} as const;

export default async function Notes(
	props: PageProps<never, State>,
) {
	const slug = encodeURIComponent(props.params.slug);
	const lang = props.state.language;
	const note =
		(await pb.collection("notes").getFirstListItem(`slug='${slug}'`, {
			expand: lang,
		})).expand[lang];

	if (note === undefined) {
		throw new Error(`Note with '${slug}' not found`);
	}

	const body = note.content;

	return (
		<>
			<head>
				<title>
					{note.title} &middot; {heading[lang]}
				</title>
				<link rel="stylesheet" href="/github-markdown.css" />
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
				<SiteTitle name={heading[lang]} />
				<p class="my-2.5">
					<ButtonLink
						name={`← ${back_to_home[lang]}`}
						href="/#notes"
					/>
				</p>

				<main
					data-color-mode="auto"
					data-light-theme="light"
					data-dark-theme="dark"
					class="markdown-body !font-sans"
					dangerouslySetInnerHTML={{
						__html: body,
					}}
				/>
			</div>
		</>
	);
}
