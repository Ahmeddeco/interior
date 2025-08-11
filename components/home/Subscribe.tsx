"use client"

import { SlideUp } from "@/animation/animate"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { motion } from "motion/react"

export default function Subscribe() {
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<motion.h2 variants={SlideUp(0.5)} initial="initial" whileInView={"animate"}>
				subscribe to our newsletter
			</motion.h2>
			<motion.p
				variants={SlideUp(0.5)}
				initial="initial"
				whileInView={"animate"}
				className="max-w-md text-center text-pretty"
			>
				Bring your dream home to life with one-on-one interior design help & hand picked products colored to your style,{" "}
			</motion.p>
			<motion.div
				variants={SlideUp(0.5)}
				initial="initial"
				whileInView={"animate"}
				className="flex items-center gap-0 h-14 w-md"
			>
				<Input className="h-full" placeholder="Enter your email" />
				<Button className="h-full">subscribe</Button>
			</motion.div>
		</section>
	)
}
