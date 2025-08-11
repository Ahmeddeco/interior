"use client"

import { TestimonialData } from "@/constants/testimonialData"
import AvatarCard from "../shared/AvatarCard"
import { Card, CardContent } from "../ui/card"
import { motion } from "motion/react"
import { SlideLeft, SlideUp } from "@/animation/animate"

export default function Testimonial() {
	return (
		<section className="flex flex-col justify-center items-center gap-8 ">
			<div className="flex flex-col items-center gap-4">
				<motion.h2 variants={SlideUp(0.3)} initial="initial" whileInView={"animate"}>
					words from our customers
				</motion.h2>
				<motion.p
					variants={SlideUp(0.5)}
					initial="initial"
					whileInView={"animate"}
					className="max-w-md text-center text-pretty"
				>
					Bring your dream home to life with one-on-one interior design help & hand picked products colored to your
					style, and budget.
				</motion.p>
			</div>
			<Card className="lg:py-24 h-auto bg-foreground w-full">
				<CardContent className="flex flex-wrap items-center gap-8 justify-center h-full">
					{TestimonialData.map(({ delay, job, id, img, name, text, color }) => (
						<motion.div key={id} variants={SlideLeft(delay)} initial="initial" whileInView={"animate"}>
							<AvatarCard className={""} image={img} name={name} job={job} description={text} color={color} />
						</motion.div>
					))}
				</CardContent>
			</Card>
		</section>
	)
}
