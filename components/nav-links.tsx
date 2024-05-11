"use client";

import { usePathname } from "next/navigation";
import { Hotel, LayoutDashboard, Package2 } from "lucide-react";
import Link from "next/link";

const links = [
	{ name: "Home", href: "/dashboard", icon: LayoutDashboard },
	{ name: "Room Configuration", href: "/room-config", icon: Hotel },
];

export default function NavLinks() {
	const router = usePathname();

	return (
		<>
			<Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
				<Package2 className="h-6 w-6" />
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
