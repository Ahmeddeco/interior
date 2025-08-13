import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from "@/components/ui/sheet"
import Logo from "./Logo"
import { Separator } from "../ui/separator"
import NavLink from "./NavLink"
import User from "../auth/User"
import ThemeButton from "../theme/ThemeButton"
import LanguageButton from "./LanguageButton"
import { Menu } from "lucide-react"

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-neutral-900" />
			</SheetTrigger>
			<SheetContent className="bg-neutral-100 text-neutral-900">
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<Separator />
				</SheetHeader>
				<nav className="flex flex-col gap-8 px-8">
					<NavLink />
				</nav>
				<SheetFooter>
					<Separator />
					<div className="flex items-center justify-between">
						<LanguageButton />
						<ThemeButton />
						<User />
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
