// import { ProgramBox, ProgramContent, ProgramFlex, ProgramItem, ProgramStack, ProgramText, ProgramTitle, useProgram } from "@nessprim/planby-pro";
import { ProgramBox, ProgramContent, ProgramFlex, ProgramItem, ProgramStack, ProgramText, ProgramTitle, useProgram } from "@/planby-lib/dist";

export const Program = ({ isVerticalMode, program, ...rest }: ProgramItem) => {
	const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } = useProgram({
		isVerticalMode,
		program,
		...rest,
	});

	const { data } = program;
	const { image, title, since, till } = data;

	// const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
	// const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

	const sinceTime = new Date(since).toDateString();
	const tillTime = new Date(till).toDateString();
	return (
		<ProgramBox width={styles.width} style={styles.position}>
			<ProgramContent isVerticalMode={isVerticalMode} width={styles.width} isLive={isLive}>
				<ProgramFlex isVerticalMode={isVerticalMode}>
					{/* {isLive && isMinWidth && <ProgramImage isVerticalMode={isVerticalMode} src={image} alt="Preview" />} */}
					<ProgramStack>
						<ProgramTitle>{title}</ProgramTitle>
						<ProgramText>
							{sinceTime} - {tillTime}
						</ProgramText>
					</ProgramStack>
				</ProgramFlex>
			</ProgramContent>
		</ProgramBox>
	);
};
