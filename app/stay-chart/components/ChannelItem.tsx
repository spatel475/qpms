import {
  ChannelItem as IChannelItem,
  ChannelBox,
  ChannelLogo,
} from "@nessprim/planby-pro";

export const ChannelItem = ({ isVerticalMode, channel }: IChannelItem) => {
  const { position, logo } = channel;

  return (
    <ChannelBox
      data-testid="sidebar-item"
      isVerticalMode={isVerticalMode}
      {...position}
    >
      <ChannelLogo src={logo} alt="Logo" />
    </ChannelBox>
  );
};
