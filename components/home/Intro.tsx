import IconGithub from "icons/brand-github.tsx";
import IconGitlab from "icons/brand-gitlab.tsx";
import IconLinkedin from "icons/brand-linkedin.tsx";
import IconInstagram from "icons/brand-instagram.tsx";

export default function Intro() {
	return (
		<>
			<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
				Felix Schindler
			</h1>
			<div class="sm:flex sm:items-center">
				<picture class="w-full" alt="Globe marking the region Xi'an, China">
					<source
						srcset="/img/world.svg?dark=true"
						media="(prefers-color-scheme: dark)"
					/>
					<img src="/img/world.svg" />
				</picture>

				<div class="text-center text-lg">
					<p>
						studying <b>Computer Science</b>{" "}
						as a German-Chinese double degree at{" "}
						<b>Stuttgart Media University</b> and{" "}
						<b>Xi'an University of Technology</b>
					</p>
					<p class="mt-2">
						currently based in <b>Xi'an, China</b>
					</p>

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
		href: "https://www.linkedin.com/in/felix-schindler-0bb3952a6",
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
	const { href, icon, color } = socials[type];

	return (
		<a
			href={href}
			class={"flex items-center justify-center w-12 h-12 rounded-md transition-transform duration-200 hover:scale-90" +
				` bg-${color} text-white`}
		>
			{icon}
		</a>
	);
}
