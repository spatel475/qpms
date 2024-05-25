// import {
//   CurrentTime,
//   Timeline,
//   TimelineWrapper,
//   useTimeline,
//   TimelineWeekMonthBox,
//   TimelineWeekMonthDate,
// } from "@nessprim/planby-pro";
import { CurrentTime, Timeline, TimelineWeekMonthBox, TimelineWeekMonthDate, TimelineWrapper, useTimeline } from "@/planby-lib/dist";

export function CustomTimeline(props: Timeline) {
	const { isWeekMonthMode, isMonthMode, time, ...rest } = useTimeline(props);
	const { timelineHeight, weekDayWidth, monthsWidth } = rest;
	const { formatWeekMonthDate, getDayMonthName, getTimelineProps, getCurrentTimeProps } = rest;

	const { isToday, isCurrentTime, isRTL, isTimelineVisible, isVerticalMode } = props;
	const { mode } = props;

	const renderWeekMonth = (item: string, index: number) => {
		const width = isMonthMode ? monthsWidth[index].width : weekDayWidth;
		const left = isMonthMode ? monthsWidth[index].left : width * index;
		const position = {
			left,
			width,
		};
		const isVisible = isTimelineVisible(position);
		if (!isVisible) return null;
		const isModernStyle = mode.style === "modern";
		return (
			<TimelineWeekMonthBox className="planby-timeline-box" data-testid="timeline-item" key={index} isToday={isToday} isWeekMonthMode={isWeekMonthMode} isCurrentTime={isCurrentTime} isVerticalMode={isVerticalMode} timelineHeight={timelineHeight} styleType={mode.style} {...position}>
				<TimelineWeekMonthDate className="planby-timeline-week-month-date" isRTL={isRTL} isVerticalMode={isVerticalMode} styleType={mode.style}>
					{isModernStyle && <span>{getDayMonthName(item)}</span>}
					<span>{formatWeekMonthDate(item)}</span>
				</TimelineWeekMonthDate>
			</TimelineWeekMonthBox>
		);
	};

	return (
		<TimelineWrapper className="planby-timeline-wrapper" data-testid="timeline" {...getTimelineProps()}>
			{isCurrentTime && isToday && <CurrentTime {...getCurrentTimeProps()} />}
			{time.map((item, index) => renderWeekMonth(item as string, index))}
		</TimelineWrapper>
	);
}
