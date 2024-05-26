// import { Channel, Program, useEpg } from "@nessprim/planby-pro";
import { Channel, useEpg } from "@/planby-lib/dist";
import { useTheme } from "next-themes";
import { Program } from "planby";
import { useEffect, useMemo, useState } from "react";
import { areasMonth, areasWeek } from "../../components/planby/helpers";
import { themeDark } from "../../components/planby/helpers/theme-dark";
import { themeLight } from "../../components/planby/helpers/theme-light";
import useFetchRooms from "./useFetchRooms";
import useFetchStays from "./useFetchStays";

const startDate = "2024-05-10T00:00:00";
const endDate = "2024-05-30T00:00:00";
const startMonthDate = "2024-01-01T00:00:00";
const endMonthDate = "2024-12-31T00:00:00";

export function usePlanby() {
	const { resolvedTheme } = useTheme();
	const [channels, setChannels] = useState<Channel[]>([]);
	const [epg, setEpg] = useState<Program[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [dayWidth, setDayWidth] = useState<number>(2800);
	const [dates, setDates] = useState<{ start: string; end: string }>({ start: startDate, end: endDate });
	const [calendarMode, setCalendarMode] = useState<"week" | "month">("week");
	const areas = calendarMode === "week" ? areasWeek : areasMonth;

	const { rooms } = useFetchRooms(1, 25);
	const { stays } = useFetchStays(1, 50);

	useEffect(() => {
		const processEpgData = async () => {
			const roomsAsChannels = getRoomsAsChannels();
			const weekData = await Promise.all(
				roomsAsChannels.map(async ({ uuid }) => {
					return getStaysAsPrograms(uuid);
				})
			);

			setChannels(roomsAsChannels);
			setEpg(weekData.flat());
			setIsLoading(false);
		};

		processEpgData();
	}, [rooms, stays]);

	const getRoomsAsChannels = (): Channel[] => {
		const roomsAsChannels: Channel[] = rooms.map((room) => ({
			uuid: room.id,
			title: room.id,
			position: { top: 0, height: 0 },
			logo: "",
			isNestedChild: false,
			index: 0,
		}));
		return roomsAsChannels;
	};

	const getStaysAsPrograms = (channelId: string): Program[] => {
		const staysByRoom = stays.filter((s) => s.roomId === channelId);
		const staysAsPrograms: Program[] = staysByRoom.map((stay) => ({
			id: stay.id,
			channelUuid: channelId,
			title: stay.guest.firstName + " " + stay.guest.lastName,
			since: stay.startDate,
			till: stay.endDate,
			description: "",
			image: "",
		}));
		return staysAsPrograms;
	};

	const channelsData = useMemo(() => channels, [channels]);
	const epgData = useMemo(() => epg, [epg]);

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

	return {
		isLoading,
		getEpgProps,
		getLayoutProps,
	};
}
