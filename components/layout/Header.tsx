import Logo from "./Logo"
import LanguageButton from "./LanguageButton"
import User from "../auth/User"
import ThemeButton from "../theme/ThemeButton"
import MobileNav from "./MobileNav"
import NavLink from "./NavLink"
import MotionWrapper from "../shared/MotionWrapper"
import { SlideDown } from "@/animation/animate"

export default function Header() {
	return (
		<MotionWrapper
			variants={SlideDown(0.2)}
			className="w-dvw h-14 z-50 fixed inset-0 bg-neutral-100/95 border-b px-8 lg:px-24 flex items-center justify-between"
		>
			{/* ---------------------------------- Logo ---------------------------------- */}
			<Logo />
			{/* ------------------------------- Desktop Nav ------------------------------ */}
			<nav className="hidden lg:flex items-center gap-8 ">
				<NavLink />
			</nav>
			{/* --------------------------------- Button --------------------------------- */}
			<div className="lg:flex hidden items-center gap-4 ">
				<LanguageButton />
				<ThemeButton />
				<User />
			</div>
			{/* ------------------------------- Mobile Nav ------------------------------- */}
			<nav className="lg:hidden block">
				<MobileNav />
			</nav>
		</MotionWrapper>
	)
}
