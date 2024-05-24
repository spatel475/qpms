import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type SelectOption = { label: string; value: string };

type Props = {
	className?: string;
	defaultValue?: any;
	onValueChange: (value: any) => void;
	label?: string;
	options: SelectOption[];
};

export function MultiSelect({ defaultValue = [], onValueChange, label, options, className }: Props) {
	const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
	const [isOpen, setIsOpen] = useState(false);

	const handleCheckboxChange = (value: string) => {
		const newSelectedValues = selectedValues.includes(value) ? selectedValues.filter((val: string) => val !== value) : [...selectedValues, value];
		setSelectedValues(newSelectedValues);
		onValueChange(newSelectedValues);
	};

	const selectedLabels = selectedValues
		.map((value) => options.find((option) => option.value === value)?.label)
		.filter(Boolean)
		.join(", ");

	return (
		<div className={className}>
			{label && <Label>{label}</Label>}
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" className="w-full justify-between overflow-hidden text-ellipsis whitespace-nowrap">
						<span className="truncate">{selectedLabels || "Select..."}</span> <ChevronDown className="ml-2 h-4 w-4" />
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="flex flex-col">
						{options.map((option) => (
							<div key={option.value} className="flex items-center space-x-2">
								<Checkbox checked={selectedValues.includes(option.value)} onCheckedChange={() => handleCheckboxChange(option.value)} />
								<span>{option.label}</span>
							</div>
						))}
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
