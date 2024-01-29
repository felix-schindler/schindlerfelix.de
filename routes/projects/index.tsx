import { ButtonLink, Tech } from "@/components/utils.tsx";

type Project = {
	title: string;
	description: string;
	technologies?: string[];
	link?: string;
};

const projects: Record<string, Array<Project>> = {
	"Personal": [
		{
			title: "Tanuki for GitLab",
			description: "Native GitLab App for iOS",
			technologies: ["Swift"],
			link: "/projects/tanuki",
		},
		{
			title: "Router",
			description: "My own MVC framework for PHP",
			technologies: ["PHP"],
			link: "https://github.com/felix-schindler/Router",
		},
		{
			title: "Portfolio",
			description: "This website! It's gone through many iterations...",
			technologies: ["Deno", "Fresh", "TypeScript", "Tailwind"],
			link: "/",
		},
		{
			title: "Clicker",
			description:
				"Realtime counter and message board. All servers and clients are in sync.",
			technologies: ["Deno", "Fresh", "TypeScript", "Tailwind"],
			link: "https://clicker.deno.dev",
		},
		{
			title: "Deno Libraries",
			description:
				"Password hashing functions (bcrypt and argon2) using Deno FFI",
			technologies: ["Deno", "TypeScript", "Rust"],
			link: "https://github.com/felix-schindler?tab=repositories&q=deno",
		},
		{
			title: "China Exchange",
			description: "A website for a student exchange program to China",
			technologies: ["Deno", "Fresh", "TypeScript", "Tailwind"],
			link: "https://cn.schindlerfelix.de/",
		},
		{
			title: "Nimiq Style Fork",
			description:
				"Fork of the Nimiq Styles; I added (automatic) dark mode and removed the need of classes",
			technologies: ["CSS"],
			link: "https://gitlab.com/felix-schindler/advanced-style",
		},
		{
			title: "Many unfinished projects...",
			description:
				"Too many to list them here. There are a few public ones on Git though",
		},
	],
	"Work for companies": [
		{
			title: "Made My Day",
			description:
				"Website of a German social media presence. Just click here to look at it. With auth, ads, posts, comments, etc.",
			technologies: ["PHP", "React", "CSS", "MySQL"],
			link: "https://mademyday.de",
		},
		{
			title: "Xinevio Customer Platform",
			description:
				"Website to manage business presence on Chinese platforms (project only was the frontend)",
			technologies: ["SvelteKit", "CSS"],
		},
		{
			title: "Internal company website",
			description: "Ticket-, Time-Tracking and Customer Information System",
			technologies: ["SvelteKit", "Firebase", "Bootstrap"],
		},
		{
			title: "Customer project",
			description:
				"System for the management and evaluation of insurance contracts",
			technologies: ["SvelteKit", "Go", "PocketBase"],
		},
	],
	"University": [
		{
			title: "ChadGPT",
			description:
				"iOS app to chat with your (AI) celebrity crush and generate pick-up lines",
			technologies: ["Swift"],
		},
		{
			title: "Budget tracker",
			description: "Desktop App for tracking your budget (locally, offline)",
			technologies: ["Java", "SQLite"],
		},
		{
			title: "Find My Enemy",
			description:
				"(Primarily mobile) web application to find your enemies (based on the 16 personalities test) and battle them via a clicker game.",
			technologies: ["TypeScript", "SvelteKit", "Deno", "PostgreSQL"],
		},
		{
			title: "Weather App",
			description:
				"CLI application which fetches an API and prints the answer in a readable format. To learn the basics of Java and classes.",
			technologies: ["Java"],
		},
		{
			title: "2D Game",
			description:
				"A 2D game where you can explore the world, fight enemies and collect items.",
			technologies: ["C#", "Unity", "PHP", "MySQL"],
		},
		{
			title: "Really simple website",
			description: "To learn the basics of HTML and CSS",
			technologies: ["CSS"],
			link: "https://fs146.home.hdm-stuttgart.de/webdev/",
		},
	],
	"School": [
		{
			title: "AFC-Mirror",
			description:
				"Online shop for smart mirrors to learn the basics of PHP and SQL",
			technologies: ["PHP", "MySQL"],
		},
		{
			title: "Small school projects",
			description:
				"Many smaller programs to learn the basics of C and C++ and also to program micro controllers",
			technologies: ["C", "C++"],
		},
	],
} as const;

export default function Projects() {
	return (
		<>
			<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter text-center">
				Project List
			</h1>
			<p class="my-2.5">
				<ButtonLink name="&larr; Back to home page" href="/" />
			</p>
			{Object.entries(projects).map(([title, projects]) => (
				<>
					<h2 class="text-3xl mt-3 mb-2 font-bold tracking-tight">{title}</h2>
					<ul class="grid grid-cols-default gap-2">
						{projects.map((project) => (
							<li>
								{project.link !== undefined
									? (
										<a
											href={project.link}
											class="block transition-transform hover:scale-95"
										>
											<Project project={project} />
										</a>
									)
									: <Project project={project} />}
							</li>
						))}
					</ul>
				</>
			))}
		</>
	);
}

function Project({ project }: { project: Project }) {
	return (
		<div class="bg-gray-200 dark:bg-gray-800 rounded-md px-2 py-1">
			<h3 class="text-xl font-bold">
				{project.title}
			</h3>
			<p>{project.description}</p>
			<ul class="mt-2">
				{project.technologies &&
					project.technologies.map((technology) => (
						<li class="inline-flex flex-wrap">
							<Tech name={technology} />
						</li>
					))}
			</ul>
		</div>
	);
}
