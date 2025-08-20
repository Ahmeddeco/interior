"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import ServerLink from "./ServerLink"

export default function ServerAside() {
	// const pathName = usePathname()
	// const locale = useCurrentLocale()

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
