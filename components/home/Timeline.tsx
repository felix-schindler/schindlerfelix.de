import { Tech } from "@/components/mod.tsx";
import translations from "@/core/i18n/home/timeline.json" with { type: "json" };
import type { AllowedLanguage, ExperienceMerged } from "@/core/types.ts";

type EventOccurrence = {
	from: Date;
	until: "now" | Date;
	title: string;
	description: string;
	technologies?: string[];
};

export default function Timeline(
	{ work, edu, lang }: {
		work: ExperienceMerged[];
		edu: ExperienceMerged[];
		lang: AllowedLanguage;
	},
) {
	const fmt = {
		list: new Intl.ListFormat(lang, {
			style: "long",
			type: "conjunction",
		}),
		month: new Intl.DateTimeFormat(
			lang,
			{ month: "long", year: "numeric" },
		),
	} as const;

	return (
		<div>
			<h2 class="hidden sm:block text-3xl mb-2 font-bold tracking-tight">
				{fmt.list.format([
					translations[lang].headings.edu,
					translations[lang].headings.jobs,
				])}
			</h2>
			<h3 class="block sm:hidden text-3xl mb-2 font-bold tracking-tight">
				{translations[lang].headings.edu}
			</h3>
			<div class="flex flex-wrap sm:flex-nowrap">
				<ol class="sm:mt-20 relative border-e border-gray-200 dark:border-gray-700 contrast-more:border-gray-700 contrast-more:dark:border-gray-200">
					{edu.map((item) => (
						<li class="text-end mb-5 sm:mb-10 me-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -end-1.5 border border-white dark:border-gray-900 dark:bg-gray-700  contrast-more:border-gray-700 contrast-more:dark:border-gray-200 contrast-more:bg-gray-700 contrast-more:dark:bg-gray-200" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 contrast-more:text-gray-700 contrast-more:dark:text-gray-300">
								{fmt.month.format(item.from)} - {item.until === undefined
									? translations[lang].now
									: fmt.month.format(item.until)}
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
					{translations[lang].headings.jobs}
				</h3>
				<ol class="relative border-s border-gray-200 dark:border-gray-700 contrast-more:border-gray-700 contrast-more:dark:border-gray-200">
					{work.map((item) => (
						<li class="mb-5 sm:mb-10 ms-4">
							<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700  contrast-more:border-gray-700 contrast-more:dark:border-gray-200 contrast-more:bg-gray-700 contrast-more:dark:bg-gray-200" />
							<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 contrast-more:text-gray-700 contrast-more:dark:text-gray-300">
								{fmt.month.format(item.from)} - {item.until === undefined
									? translations[lang].now
									: fmt.month.format(item.until)}
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
