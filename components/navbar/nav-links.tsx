"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../logo";

export const enum Routes {
	Reservations = "/reservations",
	Dashboard = "/dashboard",
	ReservationForm = "/reservations/form",
	RoomConfig = "/room-config",
	Reports = "/reports",
}

const links = [
	{ name: "Reservations", href: Routes.Reservations },
	{ name: "Room Configuration", href: Routes.RoomConfig },
	{ name: "Daily Report", href: Routes.Reports },
];

export default function NavLinks() {
	const router = usePathname();

	return (
		<>
			<Link href={Routes.Reservations} className="flex items-center gap-2 text-lg font-semibold">
				<div className="h-10 w-10">
					<Logo />
				</div>
			</Link>
			{links.map((link) => {
				const isActive = router === link.href;
				return (
					<Link key={link.href} href={link.href} className={`transition-colors hover:text-foreground whitespace-nowrap ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
						{/* {link.icon && <link.icon />} */}
						{link.name}
					</Link>
				);
			})}
		</>
	);
}
