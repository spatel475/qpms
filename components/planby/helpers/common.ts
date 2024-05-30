import { Area } from "@/planby-lib/dist/Epg/helpers";
import { getResources } from "./epg-data";

export const fetchResources = async (
	startDate: string,
	endDate: string,
	type: "week" | "month"
) => {
	const resources = getResources(startDate, endDate, type);
	return new Promise((res) => setTimeout(() => res(resources), 500));
};

export const areasWeek = [
	{
		startDate: "2024-05-29T00:00:00",
		endDate: "2024-05-30T00:00:00",
		styles: {
			background: "#00800012",
			borderLeft: "2px dotted #38A169",
			borderRight: "2px dotted #38A169",
		},
		onClick: () => alert("Click on area"),
		annotations: {
			styles: {
				background: "#38A169",
				color: "white",
			},
			//   textStart: "Testing Start",
			//   textEnd: "Testing End",
		},
	},
	{
		startDate: "2023-05-14T00:00:00",
		endDate: "2023-05-17T00:00:00",
		styles: {
			borderLeft: "2px dotted #D69E2E",
			borderRight: "2px dotted #D69E2E",
		},
		annotations: {
			styles: {
				background: "#D69E2E",
				color: "white",
			},
			textStart: "Testing2 Start",
			textEnd: "Testing2 End",
		},
	},
	{
		startDate: "2023-05-11T00:00:00",
		styles: {
			borderLeft: "2px dotted #C53030",
		},
		annotations: {
			styles: {
				background: "#C53030",
				color: "white",
			},
			textStart: "Release",
		},
	},
];

export const areasMonth = [
	{
		startDate: "2023-06-01T00:00:00",
		endDate: "2023-08-31T00:00:00",
		styles: {
			background: "#00800012",
			borderLeft: "2px dotted #38A169",
			borderRight: "2px dotted #38A169",
		},
		annotations: {
			styles: {
				background: "#38A169",
				color: "white",
			},
			textStart: "Pre-release",
			textEnd: "Pre-release End",
		},
	},
];

export const getAreas = (showToday: true, showWeekends: true, startDate: string, endDate: string): Area[] => {
	const areas: Area[] = [];
	const today = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);

	// Function to format date to string in the required format
	const formatDate = (date: Date): string => {
		return date.toISOString().split('T')[0] + "T00:00:00";
	};

	// Check if today falls between startDate and endDate
	if (showToday && today >= start && today <= end) {
		areas.push({
			startDate: formatDate(new Date(today.getTime() - 24 * 60 * 60 * 1000)), // add one day
			endDate: formatDate(today),
			styles: {
				background: "rgba(50, 150, 255, 0.15)",
				// borderLeft: "2px dotted #38A169",
				// borderRight: "2px dotted #38A169",
			},
			annotations: {
				styles: {
					background: "#38A169",
					color: "white",
				},
			},
		});
	}

	// Add Saturdays and Sundays if showWeekends is true
	if (showWeekends) {
		for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
			if (d.getDay() === 6 || d.getDay() === 0) { // 6 = Saturday, 0 = Sunday
				areas.push({
					startDate: formatDate(d),
					endDate: formatDate(new Date(d.getTime() + 24 * 60 * 60 * 1000)), // add one day
					styles: {
						background: "#00800012",
						// borderLeft: "2px dotted #38A169",
						// borderRight: "2px dotted #38A169",
					},
					annotations: {
						styles: {
							background: "#38A169",
							color: "white",
						},
					},
				});
			}
		}
	}

	return areas;
}