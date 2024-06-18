import { type Config } from "tailwindcss";

export default {
	content: [
		"{routes,islands,components}/**/*.{ts,tsx}",
	],
	theme: {
		fontFamily: {
			"sans": [
				"GitLab Sans",
				"ui-sans-serif",
				"system-ui",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			"mono": [
				"DM Mono",
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
		extend: {
			gridTemplateRows: {
				"a1a": "auto 1fr auto",
			},
			gridTemplateColumns: {
				"default": "repeat(auto-fit, minmax(300px, 1fr))",
			},
			colors: {
				gray: {
					"250": "#F5F5F5",
				},
				yellow: {
					bright: "yellow",
				},
			},
			backgroundSize: {
				"size-100": "100%",
				"size-300": "300%",
			},
			backgroundPosition: {
				"pos-85-100": "85% 100%",
			},
			maxWidth: {
				"50-calc": "calc(50% - 10px)",
			},
		},
	},
} satisfies Config;
