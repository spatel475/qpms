import { Guest } from "@/app/models/models";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { get } from "@/lib/fetch";
import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
	onGuestSelected(guest: Guest): void;
};
const GuestSearch = ({ onGuestSelected }: Props) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [guests, setGuests] = useState<Guest[]>([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSearch = async (event: any) => {
		event.preventDefault(); // Prevent the default form submission
		setLoading(true);
		setGuests([]);
		setError("");

		try {
			const response = await get<Guest[]>(`/guests`, {
				queryParams: { search: searchQuery },
			});
			setGuests(response.data);
			setLoading(false);
		} catch (error: any) {
			console.log(error);
			setError("No Guest Found");
			setLoading(false);
		}
	};
	const selectGuest = (guest: Guest) => {
		onGuestSelected(guest);
	};
	return (
		<div>
			<form onSubmit={handleSearch}>
				<Label htmlFor="guestSearch">Search by name, phone, address, or DL number</Label>
				<div className="flex items-center gap-2">
					<Input id="guestSearch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
					<Button type="submit" disabled={!searchQuery}>
						<Search className="h-4 w-4" />
					</Button>
				</div>
			</form>

			<div className="mt-6 flex items-center justify-center w-full">
				{loading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{guests.length > 0 && (
					<Accordion type="single" collapsible className="w-full max-h-[50vh] overflow-auto">
						{guests.map((guest) => (
							<AccordionItem value={guest.id ?? ""} key={guest.id}>
								<AccordionTrigger>
									{guest.firstName} {guest.lastName}
								</AccordionTrigger>
								<AccordionContent>
									<Table>
										<TableBody className="border-2 rounded-lg">
											<TableRow>
												<TableCell>DL Num</TableCell>
												<TableCell>{guest.dlNumber}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Phone</TableCell>
												<TableCell>{guest.phoneNumber}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Address</TableCell>
												<TableCell>{guest.address}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Comments</TableCell>
												<TableCell>{guest.comments}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
									<Button className="w-full mt-2" variant="outline" onClick={() => selectGuest(guest)}>
										Select Guest for Stay
									</Button>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				)}
			</div>
		</div>
	);
};

export default GuestSearch;
