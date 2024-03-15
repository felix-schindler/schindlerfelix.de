import { Title } from "@/components/mod.tsx";
import translations from "@/core/i18n/notes.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

export default function Notes({ lang }: { lang: AllowedLanguage }) {
	const notes = translations[lang].notes;

	return (
		<div>
			<Title id="notes">
				{translations[lang].notes.heading}
			</Title>
			<div class="grid grid-cols-default gap-2">
				{notes.content.map((note) => (
					<a
						href={`/blog/${note.path}`}
						class="block transition-transform hover:scale-95 bg-gray-200 dark:bg-gray-800 rounded-md px-4 py-3"
					>
						<h3 class="text-xl font-bold">{note.title}</h3>
						<p>{note.description}</p>
					</a>
				))}
			</div>
		</div>
	);
}
