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

export default async function Home(props: PageProps<never, State>) {
	const language = props.state.language;

	const [locations, rawNotes, rawExperiences] = await Promise.all([
		pb.collection("locations").getFullList({
			filter: "parent=null",
		}),
		pb.collection("notes").getFullList({
			expand: language,
			fields: "slug,expand",
		}),
		pb.collection("experience").getFullList({
			expand: language,
			sort: "-from",
		}),
	]);

	const experiences = rawExperiences.map((e) => {
		return {
			type: e.type,
			from: new Date(e.from),
			until: e.until ? new Date(e.until) : undefined,
			technologies: e.technologies,
			...e.expand[language]!,
		};
	});

	const notes = rawNotes.map((note) => {
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
				<Timeline
					edu={experiences.filter((e) => e.type === "edu")}
					work={experiences.filter((e) => e.type === "work")}
					lang={language}
				/>
				<Photos locations={locations} lang={language} />
				<Notes
					lang={language}
					notes={notes}
				/>
			</div>
		</>
	);
}
