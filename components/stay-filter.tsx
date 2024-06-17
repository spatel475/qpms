import { StayStatus, StaysFilter } from "@/app/api/models";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { useState } from "react";
import { DatePicker } from "./ui/date-picker";
import { MultiSelect } from "./ui/multi-select";

type Props = {
	filters: StaysFilter;
	onApplyFilters: (filter: StaysFilter) => void;
};

export function FilterComponent({ filters, onApplyFilters }: Props) {
	const [startDate, setStartDate] = useState<Date | undefined>(filters.startDate);
	const [endDate, setEndDate] = useState<Date | undefined>(filters.endDate);
	const [stayStatus, setStayStatus] = useState<StayStatus[] | undefined>(filters.stayStatus);
	const [guestName, setGuestName] = useState(filters.guestName);

	const handleApplyFilters = () => {
		const filters: StaysFilter = {
			...(startDate && { startDate }),
			...(endDate && { endDate }),
			...(stayStatus && stayStatus.length > 0 && { stayStatus: stayStatus }),
			...(guestName && { guestName }),
		};
		onApplyFilters(filters);
	};

	const stayOptions = Object.keys(StayStatus).map((s) => {
		return { label: s.replace("_", " "), value: s };
	});

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<Filter className="h-4 w-4" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Filter Stays</SheetTitle>
					<SheetDescription>Apply filters to find specific stays.</SheetDescription>
				</SheetHeader>

				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="startDate" className="col-span-1 text-right">
							Start Date
						</Label>
						<DatePicker defaultDate={startDate} onValueChange={setStartDate} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="endDate" className="col-span-1 text-right">
							End Date
						</Label>
						<DatePicker defaultDate={endDate} onValueChange={setEndDate} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="stayStatus" className="col-span-1 text-right">
							Stay Status
						</Label>
						<MultiSelect defaultValue={stayStatus} options={stayOptions} onValueChange={setStayStatus} className="col-span-3"></MultiSelect>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="guestName" className="col-span-1 text-right">
							Guest Name
						</Label>
						<Input id="guestName" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="col-span-3" />
					</div>
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button onClick={handleApplyFilters}>Apply Filters</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
