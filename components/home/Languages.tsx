import { Tech } from "@/components/mod.tsx";

import translations from "@/core/i18n/home/languages.json" with {
	type: "json",
};
import type { AllowedLanguage } from "@/core/types.ts";

export default function Languages({ lang }: { lang: AllowedLanguage }) {
	return (
		<>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">
					{translations[lang].programming_lang}
				</h2>
				<p>
					<Tech name="TypeScript" />
					<Tech name="Swift" />
					<Tech name="Java" />
					<Tech name="PHP" />
					<Tech name="Go" />
				</p>
				<p>
					<Tech name="MySQL" />
					<Tech name="SQLite" />
					<Tech name="Firebase" />
					<Tech name="PostgreSQL" />
					<Tech name="MongoDB" />
					<Tech name="Oracle" />
				</p>
				<details>
					<summary class="cursor-pointer">
						{translations[lang].more_tech}
					</summary>
					<p class="flex flex-wrap items-center">
						<Tech name="C#" />
						<Tech name="C++" />
						<Tech name="Python" />
						<Tech name="Assembly" />
						<Tech name="CSS" />
					</p>
					<p class="flex flex-wrap items-center">
						<Tech name="NodeJS" />
						<Tech name="Deno" />
						<Tech name="Bun" />
						<Tech name=".NET" icon={false} />
						<Tech name="Mono" icon={false} />
					</p>
					<p class="flex flex-wrap items-center">
						<Tech name="SvelteKit" />
						<Tech name="Fresh" />
						<Tech name="React" />
						<Tech name="PocketBase" />
					</p>
					<p class="flex flex-wrap items-center">
						<Tech name="Hono" icon={false} />
						<Tech name="Express" icon={false} />
						<Tech name="EJS" icon={false} />
						<Tech name="Mongoose" icon={false} />
						<Tech name="Web Sockets" icon={false} />
						<Tech name="Tailwind" />
						<Tech name="Bootstrap" />
					</p>
				</details>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">
					{translations[lang].human_lang.heading}
				</h2>
				<p>
					<Tech name={translations[lang].human_lang.german} icon="🇩🇪" />
					<Tech name={translations[lang].human_lang.english} icon="🇬🇧" />
					<Tech name={translations[lang].human_lang.chinese} icon="🇨🇳" />
					<Tech name={translations[lang].human_lang.french} icon="🇫🇷" />
				</p>
			</div>
		</>
	);
}
