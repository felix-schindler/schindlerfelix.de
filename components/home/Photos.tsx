const links = {
	China: {
		href: "/photos/china",
		imgPath: "shanghai-thumb.avif",
	},
	Germany: {
		href: "/photos/germany",
		imgPath: "berlin-thumb.avif",
	},
} as const;

export default function Photos() {
	return (
		<div>
			<h2 id="photos" class="text-3xl mb-2 font-bold tracking-tight">Photos</h2>
			<div class="grid grid-cols-default gap-2">
				{Object.keys(links).map((type) => (
					<PrettyLink type={type as keyof typeof links} />
				))}
			</div>
		</div>
	);
}

function PrettyLink({ type }: {
	type: keyof typeof links;
}) {
	const { href, imgPath } = links[type];

	return (
		<a
			href={href}
			class="block text-white
			px-4 py-3 h-64 rounded-xl
			bg-no-repeat bg-cover bg-center
			transition-transform hover:scale-95"
			style={`background-image: url('/img/photos/${imgPath}');`}
		>
			<h3
				class="text-xl font-bold"
				style={{ "view-transition-name": `photos-${type.toLowerCase()}` }}
			>
				{type}
			</h3>
		</a>
	);
}
