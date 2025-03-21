// import { ProgramBox, ProgramContent, ProgramFlex, ProgramItem, ProgramStack, ProgramText, ProgramTitle, useProgram } from "@nessprim/planby-pro";
import { ProgramBox, ProgramContent, ProgramFlex, ProgramItem, ProgramStack, ProgramTitle, useProgram } from "@/planby-lib/dist";
import { CircleDot } from "lucide-react";

type Props = {
	onClick: (stayId: string) => void;
};
export const Program = ({ isVerticalMode, program, onClick, ...rest }: ProgramItem & Props) => {
	const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } = useProgram({
		isVerticalMode,
		program,
		...rest,
	});

	const stayClicked = (stayId: string) => {
		onClick(stayId);
	};

	const { data } = program;
	const { image, title, since, till } = data;
	const classBg = `rounded-lg status-${data.stayStatus.toLowerCase().replace("_", "-")}-bg`;
	const sinceTime = new Date(since).toDateString();
	const tillTime = new Date(till).toDateString();

	// @todo: fix classBg or update theme to look better in dark theme
	return (
		<ProgramBox width={styles.width} style={styles.position} onClick={() => stayClicked(data.id)}>
			<ProgramContent isVerticalMode={isVerticalMode} width={styles.width} isLive={isLive}>
				<ProgramFlex isVerticalMode={isVerticalMode}>
					{/* {isLive && isMinWidth && <ProgramImage isVerticalMode={isVerticalMode} src={image} alt="Preview" />} */}
					<ProgramStack>
						<ProgramTitle className="flex items-center gap-2">
							<CircleDot size={20} className={classBg} />
							{title}
						</ProgramTitle>
						{/* <ProgramText>
							{sinceTime} - {tillTime}
						</ProgramText> */}
					</ProgramStack>
				</ProgramFlex>
			</ProgramContent>
		</ProgramBox>
	);
};
