import translations from "@/core/i18n/notes.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

export default function Notes({ lang }: { lang: AllowedLanguage }) {
	const notes = [
		{
			title: translations[lang].notes.img_magick.title,
			description: translations[lang].notes.img_magick.description,
			path: "img-magick",
		},
		{
			title: translations[lang].notes.mc_perf.title,
			description: translations[lang].notes.mc_perf.description,
			path: "mc-perf",
		},
		{
			title: translations[lang].notes.gpg_git.title,
			description: translations[lang].notes.gpg_git.description,
			path: "pgp",
		},
	] as const;

	return (
		<div lang="en">
			<h2 id="notes" class="text-3xl mb-2 font-bold tracking-tight">
				{translations[lang].notes}
			</h2>
			<div class="grid grid-cols-default gap-2">
				{notes.map((note) => (
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
