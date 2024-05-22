import { ChannelBox, ChannelItem as IChannelItem } from "@nessprim/planby-pro";

export const ChannelItem = ({ isVerticalMode, channel }: IChannelItem) => {
	const { position, logo, title } = channel;

	return (
		<ChannelBox data-testid="sidebar-item" isVerticalMode={isVerticalMode} {...position}>
			{title}
			{/* <ChannelLogo src={logo} alt="Logo" /> */}
		</ChannelBox>
	);
};
