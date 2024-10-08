import { Title } from "@/components/mod.tsx";
import type { AllowedLanguage } from "@/core/types.ts";

const heading = {
	"en": "Notes",
	"de": "Notizen",
	"zh": "笔记",
} as const;

export default function Notes(
	{ lang, notes }: {
		lang: AllowedLanguage;
		notes: Array<{ slug: string; title: string; description: string }>;
	},
) {
	return (
		<div>
			<Title id="notes">
				{heading[lang]}
			</Title>
			<div class="grid grid-cols-default gap-2">
				{notes.map((note) => (
					<a
						href={`/blog/${note.slug}`}
						class="block transition-transform hover:scale-95 bg-gray-200 dark:bg-gray-800 rounded-md px-4 py-3 contrast-more:!bg-inherit contrast-more:outline contrast-more:outline-1"
					>
						<h3 class="text-xl font-bold">{note.title}</h3>
						<p>{note.description}</p>
					</a>
				))}
			</div>
		</div>
	);
}
