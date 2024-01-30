import { Tech } from "@/components/utils.tsx";
import { fmt } from "@/core/utils.ts";

type EventOccurrence = {
	from: Date;
	until: "now" | Date;
	title: string;
	description: string;
	technologies?: string[];
};

const education: Array<EventOccurrence> = [
	{
		from: new Date("2023-08-01"),
		until: "now",
		title: "Xi'an University of Technology",
		description: "Computer Science as a German-Chinese double degree",
	},
	{
		from: new Date("2020-08-01"),
		until: "now",
		title: "Stuttgart Media University",
		description: "Computer Science as a German-Chinese double degree",
		technologies: ["Java", "C#", "NodeJS", "React", "MongoDB", "Oracle"],
	},
	{
		from: new Date("2018-09-01"),
		until: "now",
		title: "Ferdinand-von-Steinbeisschule",
		description: "Fachhochschulreife",
		technologies: ["C", "C++", "PHP", "MySQL", "Linux"],
	},
] as const;

const work: Array<EventOccurrence> = [
	{
		from: new Date("2022-05-01"),
		until: "now",
		title: "WUD Business Solutions GmbH",
		description: "Software Developer",
		technologies: [
			"TypeScript",
			"SvelteKit",
			"Go",
			"PocketBase",
			"Firebase",
			"Linux",
		],
	},
	{
		from: new Date("2020-11-01"),
		until: new Date("2021-04-01"),
		title: "Alwoke Interactive",
		description: "Web-Developer",
		technologies: ["PHP", "MySQL", "TypeScript", "React"],
	},
	{
		from: new Date("2015-10-01"),
		until: new Date("2020-07-01"),
		title: "MMD Verteildienst GmbH & Co.KG",
		description: "Paperboy",
	},
] as const;

export default function Timeline() {
	return (
		<div>
			<h2 class="hidden sm:block text-3xl mb-2 font-bold tracking-tight">
				Education and Jobs
			</h2>
			<h3 class="block sm:hidden text-3xl mb-2 font-bold tracking-tight">
				Education
			</h3>
			<div class="flex flex-wrap sm:flex-nowrap">
				<ol class="relative border-e border-gray-200 dark:border-gray-700">
					{education.map((item) => (
						<li class="text-end mb-5 sm:mb-10 me-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -end-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{fmt.month(item.from)}
							</time>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								{item.title}
							</h3>
							<p class="mb-1 text-gray-700 dark:text-gray-300">
								{item.description}
							</p>
							<p>{item.technologies?.map((t) => <Tech name={t} />)}</p>
						</li>
					))}
				</ol>
				<h3 class="block sm:hidden text-3xl mb-2 font-bold tracking-tight">
					Jobs
				</h3>
				<ol class="sm:mt-10 relative border-s border-gray-200 dark:border-gray-700">
					{work.map((item) => (
						<li class="mb-5 sm:mb-10 ms-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-500">
								{fmt.month(item.from)} -{" "}
								{item.until === "now" ? item.until : fmt.month(item.until)}
							</time>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								{item.title}
							</h3>
							<p class="mb-1 text-gray-700 dark:text-gray-300">
								{item.description}
							</p>
							{item.technologies?.map((t) => <Tech name={t} />)}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
