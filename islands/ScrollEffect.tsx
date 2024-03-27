import { useEffect } from "preact/hooks";

export default function ScollEffect() {
	useEffect(() => {
		globalThis.addEventListener("scroll", () => {
			// @ts-expect-error - This is defined by the magic of old-school JS
			// https://stackoverflow.com/a/3434388
			globalThis.parallaxTitle.style.top = globalThis.scrollY * -0.9 + "px";
		});
	}, []);

	return <></>;
}
