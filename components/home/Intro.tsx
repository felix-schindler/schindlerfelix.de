import IconGithub from "icons/brand-github.tsx";
import IconGitlab from "icons/brand-gitlab.tsx";
import IconLinkedin from "icons/brand-linkedin.tsx";
import IconInstagram from "icons/brand-instagram.tsx";

import translations from "@/core/i18n/home/intro.json" with { type: "json" };
import type { AllowedLanguage } from "@/core/types.ts";

export default function Intro({ lang }: { lang: AllowedLanguage }) {
	return (
		<>
			<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
				{translations[lang].name}
			</h1>
			<div class="sm:flex sm:items-center">
				<picture class="w-full" alt="Globe marking the region Xi'an, China">
					<source
						srcset={`/img/world.svg?dark=true&lang=${lang}`}
						media="(prefers-color-scheme: dark)"
					/>
					<img src={`/img/world.svg?lang=${lang}`} />
				</picture>

				<div class="text-center text-lg">
					<p dangerouslySetInnerHTML={{ __html: translations[lang].study }} />
					<p
						class="mt-2"
						dangerouslySetInnerHTML={{ __html: translations[lang].based }}
					/>

					<div class="flex flex-wrap justify-center gap-1 mt-3">
						{/* This needs to be done because otherwise Tailwind won't know which colors to include in the css */}
						<span class="hidden text-white text-black bg-white bg-black bg-orange-500 bg-blue-500 bg-gradient-to-br from-pink-500 to-purple-500" />
						<SocialLink type="github" />
						<SocialLink type="gitlab" />
						<SocialLink type="linkedin" />
						<SocialLink type="instagram" />
					</div>
				</div>
			</div>
		</>
	);
}

const socials = {
	github: {
		href: "https://www.github.com/felix-schindler",
		icon: <IconGithub size={28} />,
		color: "black dark:bg-white dark:text-black",
	},
	gitlab: {
		href: "https://www.gitlab.com/felix-schindler",
		icon: <IconGitlab size={28} />,
		color: "orange-500",
	},
	linkedin: {
		href: "https://www.linkedin.com/in/felix-schindler-vhwjpzf1z0fi73a",
		icon: <IconLinkedin size={28} />,
		color: "blue-500",
	},
	instagram: {
		href: "https://instagram.com/vhwjpzf1z0fi73a",
		icon: <IconInstagram size={28} />,
		color: "gradient-to-br from-pink-500 to-purple-500",
	},
} as const;

function SocialLink(
	{ type }: { type: "github" | "gitlab" | "linkedin" | "instagram" },
) {
	return (
		<a
			href={socials[type].href}
			class={"flex items-center justify-center w-12 h-12 rounded-md transition-transform duration-200 hover:scale-90" +
				` bg-${socials[type].color} text-white`}
		>
			{socials[type].icon}
		</a>
	);
}
