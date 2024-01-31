export const tw: Record<string, Record<number, string>> = {
	red: {
		500: "rgb(239, 68, 68)",
		600: "rgb(220, 38, 38)",
	},
	blue: {
		100: "rgb(219, 234, 254)",
		600: "rgb(59, 130, 246)",
		950: "rgb(23, 37, 84)",
	},
	green: {
		500: "rgb(34, 197, 94)",
		600: "rgb(5, 150, 105)",
	},
	emerald: {
		700: "rgb(4, 120, 87)",
	},
	yellow: {
		500: "rgb(251, 191, 36)",
	},
} as const;

export const fmt = {
	fullDate: new Intl.DateTimeFormat(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format,
};
