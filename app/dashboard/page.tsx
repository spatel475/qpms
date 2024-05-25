"use client";
import { Card } from "@/components/ui/card";
// import { Epg, Layout } from "@nessprim/planby-pro";
import { Epg, Layout } from "@/planby-lib/dist";
import { ChannelItem, Program } from "../../components/planby";
import { useApp } from "./useApp";

function Dashboard() {
	const { isLoading, getEpgProps, getLayoutProps, onChangeCalendarMode } = useApp();

	return (
		<div>
			{/* <div style={{ margin: 10 }}>
				<h4 style={{ marginBottom: 5 }}>Options</h4>
				<span>Mode:</span>{" "}
				<select onChange={onChangeCalendarMode}>
					<option value="week">Week</option>
					<option value="month">Month</option>
				</select>
			</div> */}
			<Card className="h-[80vh] w-[100%]">
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
				<div style={{ height: "80vh", width: "99%" }}></div>
			</Card>
		</div>
	);
}

export default Dashboard;
