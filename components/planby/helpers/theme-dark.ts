// import { Theme } from "@nessprim/planby-pro";
import { Theme } from "@/planby-lib/dist";

export const themeDark: Theme = {
	primary: {
		// 600: "#1a202c",
		// 900: "#171923",
		600: "rgb(69, 69, 69)",
		900: "hsl(var(--card))",

	},
	grey: { 300: "#d1d1d1" },
	white: "#fff",
	teal: {
		100: "#5DDADB",
	},
	green: {
		200: "#389493",
		300: "#2C7A7B",
	},
	scrollbar: {
		border: "#ffffff",
		thumb: {
			bg: "#e1e1e1",
		},
	},
	loader: {
		teal: "#5DDADB",
		purple: "#3437A2",
		pink: "#F78EB6",
		bg: "#171923db",
	},
	gradient: {
		blue: {
			300: "#002eb3",
			600: "#002360",
			900: "#051937",
		},
	},

	text: {
		grey: {
			300: "#a0aec0",
			500: "#718096",
		},
	},

	timeline: {
		divider: {
			bg: "#718096",
		},
	},
	grid: {
		item: "#7180961a",
		divider: "#7180961a",
		highlight: "#38B2AC",
	},
};
