import { useEffect } from "preact/hooks";

type ParallaxProps = {
	country: {
		name: string;
		mask: string;
		sky: string;
	};
};

export default function Parallax({ country }: ParallaxProps) {
	useEffect(() => {
		globalThis.addEventListener("scroll", () => {
			// @ts-expect-error - This is defined by the magic of old-school JS
			globalThis.parallaxTitle.style.top = globalThis.scrollY * -0.9 + "px";
		});
	}, []);

	return (
		<div class="relative h-screen" lang="en">
			<div
				class="absolute bg-no-repeat bottom-0 h-full w-full bg-pos-85-100 bg-size-300 md:bg-bottom md:bg-size-100"
				style={{
					backgroundImage: `url('${country.mask}')`,
					zIndex: 3,
				}}
			/>
			<div
				id="parallaxTitle"
				class="absolute font-mono h-screen grid place-items-center w-full md:block md:w-auto"
				style={{ width: "calc(100% - 5vw)", paddingLeft: "5vw" }}
			>
				<h1
					class="absolute m-0 text-white uppercase font-bold bottom-[30%] md:bottom-[10%]"
					style={{
						zIndex: 2,
						fontSize: "20vw",
						"view-transition-name": `photos-${country.name.toLowerCase()}`,
					}}
				>
					{country.name}
				</h1>
			</div>
			<div
				class="absolute bg-no-repeat bg-bottom bottom-0 h-full w-full bg-cover"
				style={{
					backgroundImage: `url('${country.sky}')`,
				}}
			/>
		</div>
	);
}
