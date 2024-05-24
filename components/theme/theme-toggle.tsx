"use client";

import { DropdownMenu, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger>Toggle theme</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent>
						<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
							<DropdownMenuRadioItem value="light">
								<SunIcon className="mr-4 h-4 w-4" />
								Light
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="dark">
								<MoonIcon className="mr-4 h-4 w-4" />
								Dark
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="system">
								<SunMoon className="mr-4 h-5 w-5" />
								System
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
		</DropdownMenu>
	);
}
