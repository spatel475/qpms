// import { Line as ILine } from "@nessprim/planby-pro";
import { Line as ILine } from "@/planby-lib/dist";

export function Line({ styles }: ILine) {
  return (
    <div
      style={{
        ...styles.position,
        background: "red",
        pointerEvents: "none",
      }}
    />
  );
}
