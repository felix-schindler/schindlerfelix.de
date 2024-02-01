import { Head } from "$fresh/runtime.ts";
import type { PageProps } from "$fresh/server.ts";

import translations from "@/core/i18n/404.json" with { type: "json" };
import { ButtonLink } from "@/components/mod.tsx";
import type { State } from "@/core/types.ts";

export default function Error404(props: PageProps<never, State>) {
	const lang = props.state.language;

	return (
		<>
			<Head>
				<title>404 - {translations[lang].not_found.short}</title>
			</Head>
			<div class="h-full grid place-items-center">
				<div class="text-center">
					<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter">
						404 - {translations[lang].not_found.short}
					</h1>
					<p class="mt-5">{translations[lang].not_found.long}</p>
					<p class="mt-5">
						<ButtonLink
							name={`← ${translations[lang].back_to_home}`}
							href="/"
						/>
					</p>
				</div>
			</div>
		</>
	);
}
