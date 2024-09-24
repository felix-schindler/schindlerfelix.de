import {
	About,
	Intro,
	Languages,
	Notes,
	Photos,
	Timeline,
} from "@/components/home/mod.tsx";
import type { PageProps } from "fresh";
import { State } from "@/utils.ts";
import { pb } from "@/core/mod.ts";

const notesHeading = {
	"en": "Notes",
	"de": "Notizen",
	"zh": "笔记",
} as const;

export default async function Home(props: PageProps<never, State>) {
	const language = props.state.language;

	const notes = (await pb.collection("notes").getFullList({
		expand: language,
		fields: "slug,expand",
	}))
		.map((note) => {
			console.log(note);
			return {
				slug: note.slug,
				...note.expand[language]!,
			};
		});

	return (
		<>
			<head>
				<meta property="og:title" content="Felix Schindler" />
				<meta property="og:url" content="https://www.schindlerfelix.de/" />
				<meta
					property="og:image"
					content="https://www.schindlerfelix.de/img/icons/icon-512x512.png"
				/>
				<meta property="og:type" content="website" />
			</head>
			<div class="flex flex-col gap-5">
				<Intro lang={language} />
				<About lang={language} />
				<Languages lang={language} />
				<Timeline lang={language} />
				<Photos lang={language} />
				<Notes
					heading={notesHeading[language]}
					notes={notes}
				/>
			</div>
		</>
	);
}
