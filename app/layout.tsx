import SideNav from "@/components/sidenav";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
						<div className="w-full flex-none">
							<SideNav />
							<div className="p-6">{children}</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
