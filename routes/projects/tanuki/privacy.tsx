import translations from "@/core/i18n/projects/tanuki/privacy.json" with {
	type: "json",
};

import type { PageProps } from "$fresh/server.ts";
import type { State } from "@/core/types.ts";

const LAST_UPDATED = {
	original: new Date("2023-03-18"),
	translations: new Date("2024-02-10"),
};

export default function TanukiPrivacy(props: PageProps<never, State>) {
	const lang = props.state.language;
	const dateFmt = new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format;

	return (
		<div class="flex flex-col gap-2.5">
			<h2 class="text-3xl mb-2 font-bold tracking-tight">
				{translations[lang].heading}
			</h2>
			<em class="block">
				{translations[lang].last_updated.replace(
					"{:original_date}",
					dateFmt(LAST_UPDATED.original),
				).replace("{:translations_date}", dateFmt(LAST_UPDATED.translations))}
			</em>
			<p>{translations[lang].txt._1}</p>
			<p>{translations[lang].txt._2}</p>
			<p>{translations[lang].txt._3}</p>
		</div>
	);
}
