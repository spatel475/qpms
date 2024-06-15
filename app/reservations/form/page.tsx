"use client";
import { Stay } from "@/app/models/models";
import withAuth from "@/components/withAuth";
import { get } from "@/lib/fetch";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReservationForm from "./reservation-form";

const ReservationFormPage = () => {
	const searchParams = useSearchParams();
	const reservationId = searchParams.get("id");
	const isCopy = searchParams.get("copy") === "1" ?? false;
	const [existingData, setExistingData] = useState<Stay | undefined>();

	useEffect(() => {
		if (reservationId) {
			// Fetch existing reservation data
			get<Stay>(`/stays/${reservationId}`)
				.then((response) => {
					setExistingData(response.responseBody.response);
				})
				.catch((error) => {
					console.error("Error fetching reservation data:", error);
				});
		}
	}, [reservationId]);

	return (
		<div>
			<ReservationForm existingData={existingData} isCopy={isCopy} />
		</div>
	);
};

export default withAuth(ReservationFormPage);
