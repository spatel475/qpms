"use client";
import { Stay } from "@/app/models/models";
import { get } from "@/lib/fetch";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

const ReservationFormPage = () => {
	const searchParams = useSearchParams();
	const reservationId = searchParams.get("id");
	const [existingData, setExistingData] = useState<Stay | undefined>();

	useEffect(() => {
		if (reservationId) {
			// Fetch existing reservation data
			get<Stay>(`/stays/${reservationId}`)
				.then((response) => {
					setExistingData(response.data);
				})
				.catch((error) => {
					console.error("Error fetching reservation data:", error);
				});
		}
	}, [reservationId]);

	return (
		<div>
			<ReservationForm existingData={existingData} isCopy={false} />
		</div>
	);
};

export default ReservationFormPage;
