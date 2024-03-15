import { Title } from "@/components/mod.tsx";
import translations from "@/core/i18n/home/photos.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

export default function Photos({ lang }: { lang: AllowedLanguage }) {
	return (
		<div>
			<Title id="photos">
				{translations[lang].heading}
			</Title>
			<div class="grid grid-cols-default gap-2">
				<PrettyLink
					name={translations[lang].china}
					englishName={translations.en.china}
					href="/photos/china"
					imgPath="shanghai-thumb.avif"
				/>
				<PrettyLink
					name={translations[lang].korea}
					englishName={translations.en.korea}
					href="/photos/korea"
					imgPath="korea-thumb.avif"
				/>
				<PrettyLink
					name={translations[lang].germany}
					englishName={translations.en.germany}
					href="/photos/germany"
					imgPath="berlin-thumb.avif"
				/>
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
			style={`background-image: url('/img/photos/${imgPath}');`}
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
