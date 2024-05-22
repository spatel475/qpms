// "use client";
// import { Epg, Layout } from "@nessprim/planby-pro";
// import { ChannelItem, CustomTimeline, Line, LiveTime, Program } from "./planby/components";
// import { useApp } from "./planby/useApp";

// function App() {
// 	const { isLoading, getEpgProps, getLayoutProps,  } = useApp();

// 	return (
// 		<div className="">

// 			<div style={{ height: "80vh", width: "99%" }}>
// 				<Epg isLoading={isLoading} {...getEpgProps()}>
// 					<Layout
// 						{...getLayoutProps()}
// 						// ----- Please uncomment the following lines to see the custom components -----
// 						renderLine={(props) => <Line {...props} />}
// 						renderCurrentTime={(props) => <LiveTime {...props} />}
// 						renderTimeline={(props) => <CustomTimeline {...props} />}
// 						renderProgram={({ program, ...rest }) => <Program key={program.data.id} program={program} {...rest}  />}
// 						renderChannel={({ channel, ...rest }) => <ChannelItem key={channel.uuid} channel={channel} {...rest} />}
// 					/>
// 				</Epg>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

"use client";
import { Epg, Layout } from "@nessprim/planby-pro";
import { useApp } from "./useApp";

// Import hooks

// ----- Please uncomment the following lines to see the custom components -----
// Import components
// import {
//   CustomTimeline,
//   ChannelItem,
//   Line,
//   LiveTime,
//   Program,
// } from "./components";

function App() {
	const { isLoading, getEpgProps, getLayoutProps, onChangeCalendarMode } = useApp();

	return (
		<div>
			<div style={{ margin: 10 }}>
				<h4 style={{ marginBottom: 5 }}>Options</h4>
				<span>Mode:</span>{" "}
				<select onChange={onChangeCalendarMode}>
					<option value="week">Week</option>
					<option value="month">Month</option>
				</select>
			</div>
			<div style={{ height: "80vh", width: "99%" }}>
				<Epg isLoading={isLoading} {...getEpgProps()}>
					<Layout
						{...getLayoutProps()}
						// ----- Please uncomment the following lines to see the custom components -----
						// renderLine={(props) => <Line {...props} />}
						// renderCurrentTime={(props) => <LiveTime {...props} />}
						// renderTimeline={(props) => <CustomTimeline {...props} />}
						// renderProgram={({ program, ...rest }) => (
						//   <Program key={program.data.id} program={program} {...rest} />
						// )}
						// renderChannel={({ channel, ...rest }) => (
						//   <ChannelItem key={channel.uuid} channel={channel} {...rest} />
						// )}
					/>
				</Epg>
			</div>
		</div>
	);
}

export default App;
