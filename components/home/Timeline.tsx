import { Tech } from "@/components/utils.tsx";
import translations from "@/core/i18n/home/timeline.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

type EventOccurrence = {
	from: Date;
	until: "now" | Date;
	title: string;
	description: string;
	technologies?: string[];
};

export default function Timeline({ lang }: { lang: AllowedLanguage }) {
	const education: Array<EventOccurrence> = [
		{
			from: new Date("2023-08-01"),
			until: "now",
			title: translations[lang].education.xut,
			description: translations[lang].education.major,
		},
		{
			from: new Date("2020-08-01"),
			until: "now",
			title: translations[lang].education.hdm,
			description: translations[lang].education.major,
			technologies: [
				"Java",
				"C#",
				"TypeScript",
				"Unity",
				"NodeJS",
				"Deno",
				"SvelteKit",
				"React",
				"CSS",
				"Oracle",
				"PostgreSQL",
				"MongoDB",
			],
		},
		{
			from: new Date("2018-09-01"),
			until: new Date("2020-07-01"),
			title: "Ferdinand-von-Steinbeisschule",
			description: translations[lang].education.fachhochschulreife,
			technologies: ["C", "C++", "PHP", "CSS", "MySQL", "Linux"],
		},
	] as const;

	const work: Array<EventOccurrence> = [
		{
			from: new Date("2022-05-01"),
			until: "now",
			title: "WUD Business Solutions GmbH",
			description: translations[lang].jobs.software_dev,
			technologies: [
				"TypeScript",
				"SvelteKit",
				"Go",
				"PocketBase",
				"CSS",
				"Bootstrap",
				"Firebase",
				"Linux",
			],
		},
		{
			from: new Date("2020-11-01"),
			until: new Date("2021-04-01"),
			title: "Alwoke Interactive",
			description: translations[lang].jobs.web_dev,
			technologies: ["PHP", "MySQL", "TypeScript", "React", "CSS", "Bootstrap"],
		},
		{
			from: new Date("2015-10-01"),
			until: new Date("2020-07-01"),
			title: "MMD Verteildienst GmbH & Co.KG",
			description: translations[lang].jobs.paperboy,
		},
	] as const;

	const fmt_month =
		new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format;

	return (
		<div>
			<h2 class="hidden sm:block text-3xl mb-2 font-bold tracking-tight">
				{translations[lang].education.heading}
				{translations[lang].connect}
				{translations[lang].jobs.heading}
			</h2>
			<h3 class="block sm:hidden text-3xl mb-2 font-bold tracking-tight">
				{translations[lang].education.heading}
			</h3>
			<div class="flex flex-wrap sm:flex-nowrap">
				<ol class="relative border-e border-gray-200 dark:border-gray-700">
					{education.map((item) => (
						<li class="text-end mb-5 sm:mb-10 me-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -end-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{fmt_month(item.from)} - {item.until === "now"
									? translations[lang].now
									: fmt_month(item.until)}
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
					{translations[lang].jobs.heading}
				</h3>
				<ol class="sm:mt-10 relative border-s border-gray-200 dark:border-gray-700">
					{work.map((item) => (
						<li class="mb-5 sm:mb-10 ms-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-500">
								{fmt_month(item.from)} - {item.until === "now"
									? translations[lang].now
									: fmt_month(item.until)}
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
