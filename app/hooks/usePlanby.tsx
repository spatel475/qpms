// import { Channel, Program, useEpg } from "@nessprim/planby-pro";
import { Channel, useEpg } from "@/planby-lib/dist";
import { addDays } from "date-fns";
import { useTheme } from "next-themes";
import { Program } from "planby";
import { useEffect, useMemo, useState } from "react";
import { getAreas } from "../../components/planby/helpers";
import { themeDark } from "../../components/planby/helpers/theme-dark";
import { themeLight } from "../../components/planby/helpers/theme-light";
import { StayResponse } from "../api/stays/route";
import { Room } from "../models/models";

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
const startDate = addDays(currentDate, -1).toISOString();
const endDate = addDays(currentDate, 9).toISOString();

const startMonthDate = "2024-01-01T00:00:00";
const endMonthDate = "2024-12-31T00:00:00";

export function usePlanby(rooms: Room[], stays: StayResponse[]) {
	const { resolvedTheme } = useTheme();
	const [channels, setChannels] = useState<Channel[]>([]);
	const [epg, setEpg] = useState<Program[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [dayWidth, setDayWidth] = useState<number>(2000);
	const [dates, setDates] = useState<{ start: string; end: string }>({ start: startDate, end: endDate });
	const [calendarMode, setCalendarMode] = useState<"week" | "month">("week");
	const areas = getAreas(true, true, startDate, endDate);

	useEffect(() => {
		const processEpgData = async () => {
			const roomsAsChannels = getRoomsAsChannels();
			const staysAsPrograms = roomsAsChannels.map(({ uuid }) => getStaysAsPrograms(uuid));
			setChannels(roomsAsChannels);
			setEpg(staysAsPrograms.flat());
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
			stayStatus: stay.stayStatus,
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
