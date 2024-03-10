type ParallaxProps = {
	country: {
		name: string;
		mask: string;
		sky: string;
		bottom?: "50";
	};
};

export default function Parallax({ country }: ParallaxProps) {
	const bottom = country.bottom || "30";
	const bottomMd = country.bottom || "10";

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
				{/* This needs to be done because otherwise Tailwind won't know which classes to include in the css */}
				<span class="hidden bottom-[30%] bottom-[50%] md:bottom-[10%] md:bottom-[50%]">
				</span>
				<h1
					class={`absolute m-0 text-white uppercase font-bold bottom-[${bottom}%] md:bottom-[${bottomMd}%]`}
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
