import { pb } from "@/core/mod.ts";
import { Title } from "@/components/mod.tsx";
import type { AllowedLanguage, Location } from "@/core/types.ts";

const headings = {
	"en": "Photos",
	"de": "Fotos",
	"zh": "照片",
} as const;

export default function Photos(
	{ locations, lang }: { locations: Location[]; lang: AllowedLanguage },
) {
	return (
		<div>
			<Title id="photos">
				{headings[lang]}
			</Title>
			<div class="grid grid-cols-default gap-2">
				{locations.map((loc) => {
					return (
						<PrettyLink
							name={loc[`name_${lang}`]}
							englishName={loc.name_en}
							href={`/photos/${loc.id}`}
							imgPath={pb.getFileUrl(loc, loc.pictures[0])}
						/>
					);
				})}
			</div>
		</div>
	);
}

function PrettyLink({ name, englishName, href, imgPath }: {
	name: string;
	englishName: string;
	href: string;
	imgPath: string;
}) {
	return (
		<a
			href={href}
			class="block text-white
			px-4 py-3 h-64 rounded-xl
			bg-no-repeat bg-cover bg-center
			transition-transform hover:scale-95"
			style={`background-image: url(${imgPath});`}
		>
			<h3
				class="text-xl font-bold"
				style={{
					"view-transition-name": `photos-${englishName.toLowerCase()}`,
				}}
			>
				{name}
			</h3>
		</a>
	);
}
