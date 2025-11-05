import { ButtonLink } from "@/components/mod.tsx";
import { back_to_home } from "@/core/i18n/mod.ts";

import type { AllowedLanguage } from "@/core/types.ts";

type ImageCollectionProps = {
	cities: Array<{
		name?: string;
		translation?: string;
		images: string[];
	}>;
	lang: AllowedLanguage;
};

export default function ImageCollection(props: ImageCollectionProps) {
	return (
		<div class="px-2.5 md:px-5">
			<p class="mt-2.5">
				<ButtonLink name={`← ${back_to_home[props.lang]}`} href="/#photos" />
			</p>
			{props.cities.map((city) => (
				<div class="text-center">
					{city.name && (
						<h2
							class={`text-5xl font-bold tracking-tight mt-5 sm:mt-10 ${
								city.translation ? "" : "mb-2"
							}`}
						>
							{city.name}
						</h2>
					)}
					{city.translation && (
						<p class="text-2xl font-medium tracking-tight mb-2">
							{city.translation}
						</p>
					)}
					<div class="gallery-grid grid grid-cols-default grid-flow-dense gap-2">
						{city.images.map((src) => (
							<img
								src={src}
								class="w-full h-full object-cover object-center rounded overflow-hidden"
								alt=""
								loading="lazy"
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
