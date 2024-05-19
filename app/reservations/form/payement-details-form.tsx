import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";

type Props = {
	amountDue?: number;
	amountPaid?: number;
	paymentMode?: string;
	numOfAdults?: number;
	numOfChildren?: number;
	onChange: (details: { amountDue: number; amountPaid: number; paymentMode: string; numOfAdults: number; numOfChildren: number }) => void;
};

export const PaymentDetails = (p: Props) => {
	const [amountDue, setAmountDue] = useState(0);
	const [amountPaid, setAmountPaid] = useState(0);
	const [paymentMode, setPaymentMode] = useState("cash");
	const [numOfAdults, setNumOfAdults] = useState(0);
	const [numOfChildren, setNumOfChildren] = useState(0);

	useEffect(() => {
		setAmountDue(p.amountDue ?? 0);
		setAmountPaid(p.amountPaid ?? 0);
		setPaymentMode(p.paymentMode ?? "cash");
		setNumOfAdults(p.numOfAdults ?? 0);
		setNumOfChildren(p.numOfChildren ?? 0);
	}, [p.amountDue, p.amountPaid, p.numOfAdults, p.numOfChildren, p.paymentMode]);

	useEffect(() => {
		p.onChange({
			amountDue,
			amountPaid,
			paymentMode,
			numOfAdults,
			numOfChildren,
		});
	}, [amountDue, amountPaid, paymentMode, numOfAdults, numOfChildren]);

	return (
		<div className="flex flex-col gap-4 mt-8">
			<div className="flex items-center">
				<Label className="mr-2">Payment Type:</Label>
				<RadioGroup value={paymentMode} className="flex flex-row" onValueChange={setPaymentMode}>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="cash" id="cash" />
						<Label htmlFor="cash">Cash</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="credit" id="credit" />
						<Label htmlFor="credit">Credit</Label>
					</div>
				</RadioGroup>
			</div>

			<div className="flex">
				<div className="flex flex-col mr-4">
					<Label>Amount Due</Label>
					<Input className="mt-2" type="number" value={amountDue} onChange={(e) => setAmountDue(+e.target.value)} />
				</div>
				<div className="flex flex-col">
					<Label>Amount Paid</Label>
					<Input className="mt-2" type="number" value={amountPaid} onChange={(e) => setAmountPaid(+e.target.value)} />
				</div>
			</div>

			<div className="flex">
				<div className="flex flex-col mr-4">
					<Label>Adults</Label>
					<Input className="mt-2" type="number" min="1" max="10" value={numOfAdults} onChange={(e) => setNumOfAdults(+e.target.value)} />
				</div>
				<div className="flex flex-col">
					<Label>Children</Label>
					<Input className="mt-2" type="number" min="1" max="10" value={numOfChildren} onChange={(e) => setNumOfChildren(+e.target.value)} />
				</div>
			</div>
		</div>
	);
};
