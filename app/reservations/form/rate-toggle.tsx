import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
		<div className="flex items-center mt-4">
			<Label className="mr-2">Unit Rate Type:</Label>
			<RadioGroup value={rateType} className="flex flex-row" onValueChange={handleToggle}>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="dailyRate" id="dailyRate" />
					<Label htmlFor="dailyRate">Daily</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="weeklyRate" id="weeklyRate" />
					<Label htmlFor="weeklyRate">Weekly</Label>
				</div>
			</RadioGroup>
		</div>
	);
}
