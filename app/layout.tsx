import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNav from "@/components/sidenav";
import { ScrollArea } from "@/components/ui/scroll-area";

const fontSans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Q Inns PMS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
				<div className="flex h-screen flex-col md:flex-row">
					<div className="w-full flex-none">
						<SideNav />
						<div className="p-6">{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
