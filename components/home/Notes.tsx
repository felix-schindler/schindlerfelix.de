import { Title } from "@/components/mod.tsx";

export default function Notes(
	{ heading, notes }: {
		heading: string;
		notes: Array<{ slug: string; title: string; description: string }>;
	},
) {
	return (
		<div>
			<Title id="notes">
				{heading}
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
