import { PageProps } from "$fresh/server.ts";
import { ButtonLink } from "@/components/utils.tsx";

export default function NotesLayout(
	{ Component }: PageProps,
) {
	return (
		<>
			<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
				Notes
			</h1>
			<p class="my-2.5"><ButtonLink name="&larr; Back to home page" href="/#notes" /></p>

			<Component />
		</>
	);
}
