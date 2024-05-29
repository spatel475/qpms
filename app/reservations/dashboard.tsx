"use client";
// import { Epg, Layout } from "@nessprim/planby-pro";
import { Epg, Layout } from "@/planby-lib/dist";
import { ChannelItem, Program } from "../../components/planby";
import { StayResponse } from "../api/stays/route";
import { usePlanby } from "../hooks/usePlanby";
import { Room } from "../models/models";

type Props = {
	rooms: Room[];
	stays: StayResponse[];
};
function Dashboard({ rooms, stays }: Props) {
	const { isLoading, getEpgProps, getLayoutProps } = usePlanby(rooms, stays);

	return (
		<div className="h-[72vh] w-[100%]">
			{/* <div style={{ margin: 10 }}>
				<h4 style={{ marginBottom: 5 }}>Options</h4>
				<span>Mode:</span>{" "}
				<select onChange={onChangeCalendarMode}>
					<option value="week">Week</option>
					<option value="month">Month</option>
				</select>
			</div> */}
			<Epg isLoading={isLoading} {...getEpgProps()}>
				<Layout
					{...getLayoutProps()}
					// ----- Please uncomment the following lines to see the custom components -----
					// renderLine={(props) => <Line {...props} />}
					// renderCurrentTime={(props) => <LiveTime {...props} />}
					// renderTimeline={(props) => <CustomTimeline {...props} />}
					renderProgram={({ program, ...rest }) => <Program key={program.data.id} program={program} {...rest} />}
					renderChannel={({ channel, ...rest }) => <ChannelItem key={channel.uuid} channel={channel} {...rest} />}
				/>
			</Epg>
		</div>
	);
}

export default Dashboard;
