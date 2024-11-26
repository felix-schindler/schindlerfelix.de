import { pb } from "@/core/mod.ts";
import { ButtonLink, SiteTitle, Tech } from "@/components/mod.tsx";
import translations from "@/core/i18n/projects/project-list.json" with {
	type: "json",
};

import type { PageProps } from "fresh";
import type { State } from "@/utils.ts";
import { MergedProject } from "@/core/types.ts";

type Project = {
	title: string;
	description: string;
	technologies?: string[];
	link?: string;
};

export default async function Projects(props: PageProps<never, State>) {
	const lang = props.state.language;
	const rawProjects = await pb.collection("projects").getFullList({
		expand: lang,
		sort: "-type",
	});

	const projects: MergedProject[] = rawProjects.map((p) => {
		return {
			...p.expand[lang]!,
			...p,
		};
	});

	return (
		<>
			<SiteTitle name={translations[lang].heading} />
			<p class="my-2.5">
				<ButtonLink name={`← ${translations[lang].back_to_home}`} href="/" />
			</p>
			<>
				<ul class="grid grid-cols-default gap-2">
					{projects.map((project) => (
						<li class="block">
							{project.link !== undefined
								? (
									<a
										href={project.link}
										class="block h-full transition-transform hover:scale-95"
									>
										<Project project={project} />
									</a>
								)
								: <Project project={project} />}
						</li>
					))}
				</ul>
			</>
		</>
	);
}

function Project({ project }: { project: MergedProject }) {
	return (
		<div class="h-full bg-gray-200 dark:bg-gray-800 rounded-md px-4 py-3 space-y-3">
			<div class="flex flex-wrap items-center justify-between gap-1">
				<h3 class="text-xl font-bold">
					{project.title}
				</h3>
				<span class="inline-block bg-gray-250 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">
					{project.type}
				</span>
			</div>
			<p>{project.description}</p>
			<ul class="mt-2">
				{project.technologies &&
					project.technologies.map((technology) => (
						<li class="inline-flex flex-wrap">
							<Tech name={technology} />
						</li>
					))}
			</ul>
		</div>
	);
}
