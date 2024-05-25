// import { Channel, Program, useEpg } from "@nessprim/planby-pro";
import { Channel, Program, useEpg } from "@/planby-lib/dist";
import { useTheme } from "next-themes";
import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { areasMonth, areasWeek, fetchResources } from "./../../components/planby/helpers";
import { themeDark } from "./../../components/planby/helpers/theme-dark";
import { themeLight } from "./../../components/planby/helpers/theme-light";

const startDate = "2024-05-10T00:00:00";
const endDate = "2024-05-30T00:00:00";
const startMonthDate = "2024-01-01T00:00:00";
const endMonthDate = "2024-12-31T00:00:00";

export function useApp() {
	const { resolvedTheme } = useTheme();
	const [channels, setChannels] = useState<Channel[]>([]);
	const [epg, setEpg] = useState<Program[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [dayWidth, setDayWidth] = useState<number>(2800);
	const [calendarMode, setCalendarMode] = useState<"week" | "month">("week");
	const [dates, setDates] = useState<{ start: string; end: string }>({ start: startDate, end: endDate });

	const channelsData = useMemo(() => channels, [channels]);
	const epgData = useMemo(() => epg, [epg]);

	const areas = calendarMode === "week" ? areasWeek : areasMonth;

	const { getEpgProps, getLayoutProps } = useEpg({
		channels: channelsData,
		epg: epgData,
		dayWidth: dayWidth,
		sidebarWidth: 100,
		itemHeight: 50,
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
		theme: resolvedTheme === "light" ? themeLight : themeDark,
		overlap: {
			enabled: true,
			mode: "stack",
		},
		grid: {
			enabled: true,
		},
	});

	// Handlers
	const handleChangeCalendarMode = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
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

	const handleFetchResources = useCallback(
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
