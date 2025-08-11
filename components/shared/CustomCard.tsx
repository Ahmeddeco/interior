import React from "react"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { Color } from "@/enums/color"

type Props = {
	icon: LucideIcon
	className?: string
	title: string
	titleBr: string
	paragraph: string
	link: string
	linkTitle: string
	color?: Color
}

export default function CustomCard({
	icon,
	className,
	link,
	paragraph,
	title,
	titleBr,
	linkTitle,
	color = Color.white,
}: Props) {
	return (
		<Card className={`max-w-2xs ${className} ${color}  `}>
			<CardContent className="flex flex-col gap-4">
				{React.createElement(icon, { className: "w-8 h-8" })}
				<h2>
					{title} <br /> {titleBr}
				</h2>
				<p className="line-clamp-2">{paragraph}</p>
				<Link href={link} className="underline-offset-4 underline uppercase font-semibold">
					{linkTitle}
				</Link>
			</CardContent>
		</Card>
	)
}
