import { ButtonLink } from "@/components/utils.tsx";
import type { State } from "@/core/types.ts";
import type { PageProps } from "$fresh/server.ts";

const back_to_home = {
	en: "Back to home page",
	de: "Zurück zur Startseite",
	zh: "返回主页",
} as const;

export default function NotesLayout(
	{ Component, state }: PageProps<never, State>,
) {
	const lang = state.language;

	return (
		<div lang="en">
			<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
				Notes
			</h1>
			<p class="my-2.5">
				<ButtonLink name={`← ${back_to_home[lang]}`} href="/#notes" />
			</p>

			<Component />
		</div>
	);
}
