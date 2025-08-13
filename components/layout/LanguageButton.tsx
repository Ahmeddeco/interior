"use client"
import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageButton() {
	const changeLocale = useChangeLocale()
	const locale = useCurrentLocale()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="" asChild>
				<Button size={"icon"} variant={"outline"} className={` capitalize font-semibold text-xl text-neutral-900`}>
					{locale}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-neutral-100 text-neutral-900" align="end">
				<DropdownMenuItem onClick={() => changeLocale("ar")}>Ar</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeLocale("en")}>En</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
