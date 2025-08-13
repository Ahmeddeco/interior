"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { usePathname } from "next/navigation"
import { useCurrentLocale } from "@/locales/client"
import ServerLink from "./ServerLink"

export default function ServerAside() {
	const pathName = usePathname()
	console.log("pathName from serverAside", pathName)
	const locale = useCurrentLocale()
	console.log("locale from serverAside", locale)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Server Panel</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent className="flex flex-col gap-4 capitalize">
				<ServerLink />
			</CardContent>
		</Card>
	)
}
