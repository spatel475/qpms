// import { Theme } from "@nessprim/planby-pro";
import { Theme } from "@/planby-lib/dist";

export const themeDark: Theme = {
	primary: {
		// 600: "#E8ECEE99",
		// 900: "#e2e8f0",
		600: "hsl(var(--muted-foreground))",
		900: "hsl(var(--background))",
	},
	grey: {
		300: "hsl(var(--primary-foreground))"
	},
	white: "hsl(var(--border))",
	teal: {
		100: "hsl(var(--muted-foreground))",
	},
	green: {
		200: "#389493",
		300: "#2C7A7B",
	},
	scrollbar: {
		border: "hsl(var(--border))",
		thumb: {
			bg: "hsl(var(--border))",
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
			300: "hsl(var(--primary-foreground))",
			600: "hsl(var(--muted-foreground))",
			900: "hsl(var(--primary))",
		},
	},
	text: {
		grey: {
			300: "hsl(var(--primary))",
			500: "orange",
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
