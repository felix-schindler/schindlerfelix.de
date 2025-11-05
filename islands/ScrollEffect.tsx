import { useEffect } from "preact/hooks";

export default function ScollEffect() {
	useEffect(() => {
		globalThis.addEventListener("scroll", () => {
			// @ts-expect-error - This is defined by the magic of old-school JS
			// https://stackoverflow.com/a/3434388
			globalThis.parallaxTitle.style.top = globalThis.scrollY * -0.9 + "px";
		});

		const grids = globalThis.document.getElementsByClassName("gallery-grid");
		console.log("grids", grids.length);

		for (const grid of grids) {
			const imgs = grid.getElementsByTagName("img");
			console.log("imgs", imgs.length);

			for (const img of imgs) {
				// decode() handles both loaded and not-yet-loaded images
				img.decode().then(() => {
					if (img.naturalWidth > img.naturalHeight) {
						img.classList.add("landscape");
					}
				}).catch(() => {
					// Fallback for browsers that don't support decode()
					if (img.complete && img.naturalWidth > img.naturalHeight) {
						img.classList.add("landscape");
					}
				});
			}
		}
	}, []);

	return null;
}
