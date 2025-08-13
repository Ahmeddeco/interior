import { footerSection } from "@/constants/footer"
import Logo from "./Logo"
import Link from "next/link"
import { Button } from "../ui/button"
import React from "react"
import { Separator } from "../ui/separator"
import { SlideLeft } from "@/animation/animate"
import MotionWrapper from "../shared/MotionWrapper"

export default function Footer() {
	return (
		<footer className=" border-t border-neutral-1000 bg-neutral-100 text-neutral-900 w-full flex flex-col gap-8 px-8 lg:px-24 py-24">
			<div className="flex flex-wrap justify-between ">
				<MotionWrapper variants={SlideLeft(0.2)} className="flex flex-col gap-8">
					<Logo />
					<div className="flex flex-col gap-1">
						<p className="text-neutral-600">{footerSection.address.street}</p>
						<p className="text-neutral-600">
							{footerSection.address.city} ,{footerSection.address.country}
						</p>
						<p className="text-neutral-600">©️2025 INTERIOR All Rights Reserved</p>
					</div>
				</MotionWrapper>

				{/* --------------------------------- aboutUs -------------------------------- */}
				<MotionWrapper variants={SlideLeft(0.4)} className="flex flex-col gap-8">
					<h3 className="text-neutral-900">{footerSection.aboutUs.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.aboutUs.links.map(({ link, title }, index) => (
							<Button
								key={index}
								asChild
								variant={"link"}
								size={"sm"}
								className="text-left justify-start text-neutral-900"
							>
								<Link href={link}>{title}</Link>
							</Button>
						))}
					</div>
				</MotionWrapper>

				{/* -------------------------------- services -------------------------------- */}
				<MotionWrapper variants={SlideLeft(0.6)} className="flex flex-col gap-8">
					<h3 className="text-neutral-900">{footerSection.services.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.services.links.map(({ link, title }, index) => (
							<Button
								key={index}
								asChild
								variant={"link"}
								size={"sm"}
								className="text-left justify-start  text-neutral-700"
							>
								<Link href={link}>{title}</Link>
							</Button>
						))}
					</div>
				</MotionWrapper>

				{/* --------------------------------- contact -------------------------------- */}
				<MotionWrapper variants={SlideLeft(0.8)} className="flex flex-col gap-8">
					<h3 className="text-neutral-900">{footerSection.contact.title}</h3>
					<div className="flex flex-col gap-2">
						{footerSection.contact.links.map(({ icon, link }, index) => (
							<Button
								key={index}
								variant={"link"}
								size={"sm"}
								className="text-left justify-start lowercase  text-neutral-700"
							>
								{React.createElement(icon)} {link}
							</Button>
						))}
					</div>
				</MotionWrapper>
			</div>
			<Separator className="bg-neutral-900" />
			<h4 className="flex items-center justify-center ">privacy policy | terms & conditions | digital</h4>
		</footer>
	)
}
