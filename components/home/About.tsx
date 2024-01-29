import { ButtonLink } from "@/components/utils.tsx";

export default function About() {
	return (
		<div>
			<h2 class="text-3xl mb-2 font-bold tracking-tight">About</h2>
			<p>
				I'm {getAge()}{" "}
				years old and interested in Programming, mainly Fullstack Web
				Development.
			</p>
			<p>
				If you're just interested in my past projects, you can take a look at my
				{" "}
				<ButtonLink name="&rarr; Project List" href="/projects" />
			</p>
		</div>
	);
}

function getAge(): number {
	const now = new Date();
	const age = now.getFullYear() - 2002;

	if (now.getMonth() < 6) {
		return age - 1;
	}

	return age;
}
