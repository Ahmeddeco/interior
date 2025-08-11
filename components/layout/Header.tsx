'use client'

import { NavLinks } from "@/constants/navLinks"
import Link from "next/link"
import { Button } from "../ui/button"
import Logo from "./Logo"
import { motion } from "motion/react"

export default function Header() {
	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-[1rem] h-16 flex items-center justify-between z-50 fixed inset-0 bg-card/90 border-b "
		>
			{/* ---------------------------------- Logo ---------------------------------- */}
			<Logo />
			{/* ------------------------------- Desktop Nav ------------------------------ */}
			<nav className="hidden lg:flex items-center gap-8 ">
				{NavLinks.map(({ id, link, title }) => (
					<Link href={link} key={id} className="text-sm font-semibold">
						{title}
					</Link>
				))}
			</nav>
			{/* --------------------------------- Button --------------------------------- */}
			<div className="flex items-center gap-4">
				<Button variant={"outline"} className="shadow-[5px_5px_0px_0px]">
					try for free
				</Button>
			</div>
		</motion.header>
	)
}
