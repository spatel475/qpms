import { Routes } from "@/components/nav-links";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
	buttonDisabled: boolean;
	onSave: () => void;
}

export default function SaveToolbar(props: Props) {
	return (
		<>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="outline">Discard</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>Guest and reservation data will not be saved.</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<Link href={Routes.Reservations}>
							<AlertDialogAction>Discard Reservation</AlertDialogAction>
						</Link>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
			<Button disabled={props.buttonDisabled} onClick={props.onSave}>
				Save Reservation
			</Button>
		</>
	);
}
