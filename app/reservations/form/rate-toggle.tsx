import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Props = {
	defaultRateType: string;
	onToggle: (rateType: string) => void;
};
export default function RateToggle({ onToggle, defaultRateType }: Props) {
	const [rateType, setRateType] = useState("dailyRate");
	useEffect(() => {
		setRateType(defaultRateType);
	}, [defaultRateType]);

	const handleToggle = (type: string) => {
		setRateType(type);
		onToggle(type);
	};

	return (
		<div>
			<Button onClick={() => handleToggle("dailyRate")} variant={rateType === "dailyRate" ? "default" : "outline"}>
				Daily Rate
			</Button>
			<Button onClick={() => handleToggle("weeklyRate")} variant={rateType === "weeklyRate" ? "default" : "outline"}>
				Weekly Rate
			</Button>
		</div>
	);
}
