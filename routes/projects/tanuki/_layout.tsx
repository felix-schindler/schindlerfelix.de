import { PageProps } from "$fresh/server.ts";
import { ButtonLink } from "@/components/utils.tsx";

export default function TanukiLayout(
	{ Component, url }: PageProps,
) {
	const { pathname } = url;

	return (
		<>
			<div class="text-center">
				<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter flex flex-wrap justify-center gap-5">
					<img
						src="https://gitlab.com/uploads/-/system/project/avatar/33025310/Tanuki-200kb.png"
						alt="Tanuki app icon"
						class="align-bottom h-16 w-16 rounded-xl"
					/>
					Tanuki for GitLab
				</h1>
				<p class="text-lg mt-1">
					Native GitLab client for iOS and iPadOS, made with SwiftUI
				</p>
			</div>
			<p class="my-2.5">
				{pathname === "/projects/tanuki"
					? <ButtonLink name="&larr; Back to project list" href="/projects" />
					: (
						<ButtonLink
							name="&larr; Back to Tanuki page"
							href="/projects/tanuki"
						/>
					)}
			</p>

			<Component />
		</>
	);
}
