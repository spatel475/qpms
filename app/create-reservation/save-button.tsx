import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
	buttonDisabled: boolean;
	onClick: () => void;
}

export default function SaveToolbar({ buttonDisabled, onClick }: Props) {
	return (
		<>
			<Link href="/dashboard">
				<Button variant="outline">
					<span>Discard</span>
				</Button>
			</Link>
			<Button disabled={buttonDisabled} onClick={() => onClick}>
				Save Reservation
			</Button>
		</>
	);
}
