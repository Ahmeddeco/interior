'use client'

import { serverLinks } from "@/constants/serverLinks"
import { useCurrentLocale } from "@/locales/client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function ServerLink() {
	const pathName = usePathname()
	const locale = useCurrentLocale()

	return (
		<>
			{serverLinks.map(({ id, link, title }) => (
				<Link
					href={link}
					key={id}
					className={` ${
						pathName === `/${locale}${link}`
							? "underline underline-offset-4 underline-neutral-900 font-black"
							: "font-semibold"
					} text-base text-neutral-900 capitalize`}
				>
					{title}
				</Link>
			))}
		</>
	)
}
