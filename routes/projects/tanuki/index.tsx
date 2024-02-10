import IconBrandGitlab from "icons/brand-gitlab.tsx";
import IconMessageQuestion from "icons/message-question.tsx";
import IconFileText from "icons/file-text.tsx";

import type { PageProps } from "$fresh/server.ts";
import type { State } from "@/core/types.ts";

export default function Tanuki(props: PageProps<never, State>) {
	const lang = props.state.language;
	let price: string;

	switch (lang) {
		case "de":
			price = "0,99 €";
			break;
		case "en":
			price = "$0.99";
			break;
		case "zh":
			price = "¥8.00";
			break;
	}

	return (
		<div class="flex flex-col gap-5">
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">TLDR;</h2>
				<p class="mb-1">
					Available for {price} in the App Store
				</p>
				<p class="mb-1">
					It's in early development and therefore bugs and missing features are
					expected. Any feature requests or issues can be reported in the GitLab
					repository.
				</p>
				<p>
					It's open source and licensed under GNU AGPLv3. I will reserve the
					right to make it closed source at any point.
				</p>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Links</h2>
				<ul class="flex flex-wrap gap-2 items-center">
					<li>
						<a
							href="https://gitlab.com/felix-schindler/gitlab-ios"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-orange-500 transition-transform duration-200 hover:scale-95"
						>
							<IconBrandGitlab color="rgb(249, 115, 22)" />
							<span>GitLab Repository</span>
						</a>
					</li>
					<li>
						<a
							href="/projects/tanuki/support"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-black dark:border-white transition-transform duration-200 hover:scale-95"
						>
							<IconMessageQuestion />
							<span>Support & FAQ</span>
						</a>
					</li>
					<li>
						<a
							href="/projects/tanuki/privacy"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-black dark:border-white transition-transform duration-200 hover:scale-95"
						>
							<IconFileText />
							<span>Privacy Statement</span>
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Screenshots</h2>
				<div class="grid grid-cols-default gap-2">
					<img
						src="/img/tanuki/home.avif"
						alt="Home"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/project.avif"
						alt="Project"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/issues.avif"
						alt="Issues"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/branches.avif"
						alt="Branches"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/group.avif"
						alt="Group"
						loading="lazy"
						class="rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}
