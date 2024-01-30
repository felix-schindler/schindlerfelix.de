import { useEffect } from "preact/hooks";
import { ButtonLink } from "@/components/utils.tsx";
import Gallery from "@/islands/Gallery.tsx";

type ImageCollectionProps = {
	country: {
		name: string;
		mask: string;
		sky: string;
	};
	cities: Array<{
		name?: string;
		english?: string;
		images: string[];
	}>;
};

export default function ImageCollection(props: ImageCollectionProps) {
	const { country } = props;

	function handleScroll() {
		// @ts-expect-error - This is defined lol
		globalThis.parallaxTitle.style.top = globalThis.scrollY * -0.9 + "px";
	}

	useEffect(() => {
		globalThis.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div class="relative h-screen">
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

			<div class="mx-auto px-2.5 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
				<p class="mt-2.5">
					<ButtonLink name="&larr; Back to home page" href="/#photos" />
				</p>
				{props.cities.map((city) => (
					<div class="text-center">
						{city.name && (
							<h2 class="text-5xl font-bold tracking-tight mt-5 sm:mt-10">
								{city.name}
							</h2>
						)}
						{city.english && (
							<p class="text-2xl font-medium tracking-tight mb-2">({city.english})</p>
						)}
						<Gallery images={city.images} />
					</div>
				))}
			</div>
		</>
	);
}
