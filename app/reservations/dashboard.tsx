"use client";
// import { Epg, Layout } from "@nessprim/planby-pro";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Epg, Layout } from "@/planby-lib/dist";
import { useState } from "react";
import { ChannelItem, Program } from "../../components/planby";
import { StayResponse } from "../api/stays/route";
import { usePlanby } from "../hooks/usePlanby";
import { Room } from "../models/models";
import ReservationDetail from "./reservation-details";

type Props = {
	rooms: Room[];
	stays: StayResponse[];
};
function Dashboard({ rooms, stays }: Props) {
	const { isLoading, getEpgProps, getLayoutProps } = usePlanby(rooms, stays);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedStay, setSelectedStay] = useState<StayResponse | null>(null);

	const stayClicked = (stayId: string) => {
		const stay = stays.find((s) => s.id == stayId);
		if (!!stay) {
			setSelectedStay(stay);
			setDialogOpen(true);
		}
	};

	const handleDialogChange = (isOpen: boolean) => {
		setDialogOpen(isOpen);
		if (!isOpen) {
			setSelectedStay(null);
		}
	};

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
					renderProgram={({ program, ...rest }) => <Program key={`${program.data.id}__${Math.random()}`} program={program} {...rest} onClick={stayClicked} />}
					renderChannel={({ channel, ...rest }) => <ChannelItem key={channel.uuid} channel={channel} {...rest} />}
				/>
			</Epg>

			{selectedStay && (
				<Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
					<DialogContent className="min-w-[50vw]">
						<DialogHeader>
							<DialogTitle>Stay Details</DialogTitle>
						</DialogHeader>
						<ReservationDetail row={selectedStay}></ReservationDetail>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
}

export default Dashboard;
