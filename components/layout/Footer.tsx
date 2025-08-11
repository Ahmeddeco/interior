import { footerSection } from "@/constants/footer"
import Logo from "./Logo"
import Link from "next/link"
import { Button } from "../ui/button"
import React from "react"
import { Separator } from "../ui/separator"
import * as motion from "motion/react-client"
import { SlideLeft } from "@/animation/animate"

export default function Footer() {
	return (
		<footer className="flex flex-col gap-8 container mx-auto py-24 px-[1rem] border-t ">
			<div className="flex flex-wrap justify-between ">
				<motion.div variants={SlideLeft(0.2)} initial="initial" whileInView={"animate"} className="flex flex-col gap-8">
					<Logo />
					<div className="flex flex-col gap-1">
						<p>{footerSection.address.street}</p>
						<p>
							{footerSection.address.city} ,{footerSection.address.country}
						</p>
						<p>©️2025 INTERIOR All Rights Reserved</p>
					</div>
				</motion.div>
				<motion.div variants={SlideLeft(0.4)} initial="initial" whileInView={"animate"} className="flex flex-col gap-8">
					<h3>{footerSection.aboutUs.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.aboutUs.links.map(({ link, title }, index) => (
							<Button key={index} asChild variant={"link"} size={"sm"} className="text-left justify-start">
								<Link href={link}>{title}</Link>
							</Button>
						))}
					</div>
				</motion.div>
				<motion.div variants={SlideLeft(0.6)} initial="initial" whileInView={"animate"} className="flex flex-col gap-8">
					<h3>{footerSection.services.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.services.links.map(({ link, title }, index) => (
							<Button key={index} asChild variant={"link"} size={"sm"} className="text-left justify-start">
								<Link href={link}>{title}</Link>
							</Button>
						))}
					</div>
				</motion.div>
				<motion.div variants={SlideLeft(0.8)} initial="initial" whileInView={"animate"} className="flex flex-col gap-8">
					<h3>{footerSection.contact.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.contact.links.map(({ icon, link }, index) => (
							<Button key={index} variant={"link"} size={"sm"} className="text-left justify-start lowercase">
								{React.createElement(icon)} {link}
							</Button>
						))}
					</div>
				</motion.div>
			</div>
			<Separator className="bg-input" />
			<h4 className="flex items-center justify-center ">privacy policy | terms & conditions | digital</h4>
		</footer>
	)
}
