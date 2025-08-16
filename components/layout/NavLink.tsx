"use client"

import { NavLinks } from "@/constants/navLinks"
import { useCurrentLocale } from "@/locales/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink() {
	const pathName = usePathname()
	const locale = useCurrentLocale()
	
	return (
		<>
			{NavLinks.map(({ id, link, title }) => (
				<Link
					href={link}
					key={id}
					className={` ${
						pathName === `/${locale}${link}`
							? "underline underline-offset-4 underline-neutral-900 font-black"
							: "font-semibold"
					} text-base text-neutral-900 capitalize`}
				>
					{title[locale]}
				</Link>
			))}
		</>
	)
}
