import translations from "@/core/i18n/projects/tanuki/home.json" with {
	type: "json",
};

import IconBrandGitlab from "icons/brand-gitlab.tsx";
import IconMessageQuestion from "icons/message-question.tsx";
import IconFileText from "icons/file-text.tsx";
import IconBrandAndroid from "icons/brand-android.tsx";

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
				<h2 class="text-3xl mb-2 font-bold tracking-tight">
					{translations[lang].tldr.heading}
				</h2>
				<p class="mb-1">
					{translations[lang].tldr.pricing.replace("{:price}", price)}
				</p>
				<p class="mb-1">
					{translations[lang].tldr.disclaimer}
				</p>
				<p>
					{translations[lang].tldr.open}
				</p>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">
					{translations[lang].links.heading}
				</h2>
				<ul class="flex flex-wrap gap-2 items-center">
					<li>
						<a
							href="https://gitlab.com/felix-schindler/gitlab-ios"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-orange-500 transition-transform hover:scale-95"
						>
							<IconBrandGitlab color="rgb(249, 115, 22)" />
							<span>{translations[lang].links.gitlab_repo}</span>
						</a>
					</li>
					<li>
						<a
							href="https://www.schindlerflorian.de/tanuki/"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-green-500 transition-all hover:scale-95"
						>
							<IconBrandAndroid color="rgb(34, 197, 94)" />
							<span>Tanuki Android</span>
						</a>
					</li>
					<li>
						<a
							href="/projects/tanuki/support"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-black dark:border-white transition-transform hover:scale-95"
						>
							<IconMessageQuestion />
							<span>{translations[lang].links.support_faq}</span>
						</a>
					</li>
					<li>
						<a
							href="/projects/tanuki/privacy"
							class="flex items-center gap-1 py-2 px-4 rounded-md border border-black dark:border-white transition-transform hover:scale-95"
						>
							<IconFileText />
							<span>{translations[lang].links.privacy}</span>
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">
					{translations[lang].screenshots}
				</h2>
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
