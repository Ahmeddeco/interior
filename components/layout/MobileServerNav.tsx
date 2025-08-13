import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { ShieldUserIcon } from "lucide-react"
import { Button } from "../ui/button"
import Logo from "./Logo"
import { Separator } from "../ui/separator"
import ServerLink from "./ServerLink"

export default function MobileServerNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"outline"} className="rounded-full" size={"icon"}>
					<ShieldUserIcon className="size-6" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<SheetDescription className="capitalize">server navigation, only for admins.</SheetDescription>
					<Separator />
				</SheetHeader>
				<nav className="flex flex-col gap-4 p-4">
					<ServerLink />
				</nav>
			</SheetContent>
		</Sheet>
	)
}
