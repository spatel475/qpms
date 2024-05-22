import React, { useCallback } from "react";

import { areasMonth, areasWeek, fetchResources } from "./helpers";

import { Channel, Program, useEpg } from "@nessprim/planby-pro";

// Import theme
import { theme } from "./helpers/theme";

// Example of globalStyles
// const globalStyles = `
// @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600&display=swap');
// .planby {
//   font-family: "Antonio", system-ui, -apple-system,
//     /* Firefox supports this but not yet system-ui */ "Segoe UI", Roboto,
//     Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; /* 2 */
// }
// `;

const startDate = "2024-05-01T00:00:00";
const endDate = "2024-05-30T00:00:00";
const startMonthDate = "2024-01-01T00:00:00";
const endMonthDate = "2024-12-31T00:00:00";
export function useApp() {
	const [channels, setChannels] = React.useState<Channel[]>([]);
	const [epg, setEpg] = React.useState<Program[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [dayWidth, setDayWidth] = React.useState<number>(2800);
	const [calendarMode, setCalendarMode] = React.useState<"week" | "month">("week");
	const [dates, setDates] = React.useState<{ start: string; end: string }>({
		start: startDate,
		end: endDate,
	});

	const channelsData = React.useMemo(() => channels, [channels]);
	const epgData = React.useMemo(() => epg, [epg]);

	const areas = calendarMode === "week" ? areasWeek : areasMonth;

	const { getEpgProps, getLayoutProps } = useEpg({
		channels: channelsData,
		epg: epgData,
		dayWidth: dayWidth,
		sidebarWidth: 100,
		itemHeight: 80,
		isSidebar: true,
		isTimeline: true,
		isLine: true,
		startDate: dates.start,
		endDate: dates.end,
		isBaseTimeFormat: false,
		isVerticalMode: false,
		isCurrentTime: false,
		areas,
		mode: { type: calendarMode, style: "modern" },
		theme,
	});

	// Handlers
	const handleChangeCalendarMode = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setEpg([]);
		setChannels([]);
		if (e.target.value === "week") {
			setCalendarMode("week");
			setDates({ start: startDate, end: endDate });
			setDayWidth(2800);
			handleFetchResources(startDate, endDate, "week");
		} else {
			setCalendarMode("month");
			setDates({ start: startMonthDate, end: endMonthDate });
			setDayWidth(1900);
			handleFetchResources(startMonthDate, endMonthDate, "month");
		}
	}, []);

	const handleFetchResources = React.useCallback(
		async (start: string, end: string, type: "week" | "month") => {
			setIsLoading(true);
			const { epg, channels } = (await fetchResources(start, end, type)) as {
				epg: Program[];
				channels: Channel[];
			};

			setEpg(epg);
			setChannels(channels);
			setIsLoading(false);
		},
		[dates.start, dates.end]
	);

	React.useEffect(() => {
		handleFetchResources(dates.start, dates.end, calendarMode);
	}, [handleFetchResources]);

	return {
		isLoading,
		getEpgProps,
		getLayoutProps,
		onChangeCalendarMode: handleChangeCalendarMode,
	};
}
