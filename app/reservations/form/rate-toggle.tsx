import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RateToggle({ onToggle }: { onToggle: (rateType: string) => void }) {
	const [rateType, setRateType] = useState("dailyRate");

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
