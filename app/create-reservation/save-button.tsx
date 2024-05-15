import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
	buttonDisabled: boolean;
	onSave: () => void;
}

export default function SaveToolbar(props: Props) {
	return (
		<>
			<Link href="/dashboard">
				<Button variant="outline">
					<span>Discard</span>
				</Button>
			</Link>
			<Button disabled={props.buttonDisabled} onClick={props.onSave}>
				Save Reservation
			</Button>
		</>
	);
}
