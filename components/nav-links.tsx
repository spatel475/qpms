"use client";

import { Hotel, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const enum Routes {
	Reservations = "/reservations",
	ReservationForm = "/reservations/form",
	RoomConfig = "/room-config",
	Reports = "/reports",
}

const links = [
	// { name: "Home", href: Routes.Home, icon: LayoutDashboard },
	{ name: "Reservations", href: Routes.Reservations, icon: LayoutDashboard },
	{ name: "Room Configuration", href: Routes.RoomConfig, icon: Hotel },
	{ name: "Daily Report", href: Routes.Reports },
];

export default function NavLinks() {
	const router = usePathname();

	return (
		<>
			<Link href={Routes.Reservations} className="flex items-center gap-2 text-lg font-semibold">
				<LayoutDashboard />
			</Link>
			{links.map((link) => {
				const isActive = router === link.href;
				return (
					<Link key={link.href} href={link.href} className={`transition-colors hover:text-foreground whitespace-nowrap ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
						{link.name}
					</Link>
				);
			})}
		</>
	);
}
