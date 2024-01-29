import {
	About,
	Intro,
	Languages,
	Notes,
	Photos,
	Timeline,
} from "@/components/home/mod.tsx";

export default function Home() {
	return (
		<div class="flex flex-col gap-5">
			<Intro />
			<About />
			<Languages />
			<Timeline />
			<Photos />
			<Notes />
		</div>
	);
}
