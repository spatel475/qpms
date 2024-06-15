"use client";

import withAuth from "@/components/withAuth";
import { notFound } from "next/navigation";

const NotFoundCatchAll = () => {
	return notFound();
};

export default withAuth(NotFoundCatchAll);
