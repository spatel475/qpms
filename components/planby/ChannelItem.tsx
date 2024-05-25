// import { ChannelBox, ChannelItem as IChannelItem } from "@nessprim/planby-pro";
import { ChannelBox, ChannelItem as IChannelItem } from "@/planby-lib/dist";

export const ChannelItem = ({ isVerticalMode, channel }: IChannelItem) => {
	const { position, logo, title } = channel;

	return (
		<ChannelBox data-testid="sidebar-item" isVerticalMode={isVerticalMode} {...position}>
			{title}
			{/* <ChannelLogo src={logo} alt="Logo" /> */}
		</ChannelBox>
	);
};
