import {
  ProgramItem,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram,
} from "@nessprim/planby-pro";

export const Program = ({ isVerticalMode, program, ...rest }: ProgramItem) => {
  const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
    useProgram({
      isVerticalMode,
      program,
      ...rest,
    });

  const { data } = program;
  const { image, title, since, till } = data;

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent
        isVerticalMode={isVerticalMode}
        width={styles.width}
        isLive={isLive}
      >
        <ProgramFlex isVerticalMode={isVerticalMode}>
          {isLive && isMinWidth && (
            <ProgramImage
              isVerticalMode={isVerticalMode}
              src={image}
              alt="Preview"
            />
          )}
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
