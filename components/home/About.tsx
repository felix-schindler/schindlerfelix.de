import { ButtonLink, Link, Title } from "@/components/mod.tsx";

import translations from "@/core/i18n/home/about.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

export default function About({ lang }: { lang: AllowedLanguage }) {
	return (
		<div>
			<Title>{translations[lang].heading}</Title>
			<p>{translations[lang].txt._1.replace("{:age}", getAge().toString())}</p>
			<p>
				{translations[lang].txt._2}{" "}
				<ButtonLink
					name={`→ ${translations[lang].txt.project_list}`}
					href="/projects"
				/>
			</p>
			<p>
				<Link
					name={`→ ${translations[lang].txt.brother}`}
					href="https://www.schindlerflorian.de"
				/>
			</p>
		</div>
	);
}

function getAge(): number {
	const now = new Date();
	const age = now.getFullYear() - 2002;

	if (now.getMonth() < 5) {
		return age - 1;
	}

	return age;
}
