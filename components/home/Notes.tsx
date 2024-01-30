const notes = [
	{
		title: "Minecraft Perf Mods",
		path: "mc-perf",
		description: "Collection of some Minecraft Fabric performance mods",
	},
	{
		title: "GPG and Git",
		path: "pgp",
		description: "How to setup and use (on Mac)",
	},
	{
		title: "reset",
		path: "reset",
		description: "Hi, hello and welcome!",
	},
] as const;

export default function Notes() {
	return (
		<div>
			<h2 id="notes" class="text-3xl mb-2 font-bold tracking-tight">Notes</h2>
			<div class="grid grid-cols-default gap-2">
				{notes.map((note) => (
					<a
						href={`/blog/${note.path}`}
						class="block transition-transform hover:scale-95 bg-gray-200 dark:bg-gray-800 rounded-md px-2 py-1"
					>
						<h3 class="text-xl font-bold">{note.title}</h3>
						<p>{note.description}</p>
					</a>
				))}
			</div>
		</div>
	);
}
