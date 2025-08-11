"use client"

import { Button } from "../ui/button"
import Image from "next/image"
import { motion } from "motion/react"
import { SlideDown, SlideUp } from "@/animation/animate"
import { AnimatePresence } from "motion/react"
export default function Hero() {
	return (
		<AnimatePresence>
			<section className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 min-h-[60vh] h-auto">
				{/* ---------------------------------- title --------------------------------- */}
				<div className="flex flex-col justify-center items-center lg:items-start gap-6 w-full lg:w-1/3 ">
					<motion.h1 variants={SlideUp(0.2)} initial="initial" whileInView={"animate"} className="">
						sketch luxury <br />
						interior design{" "}
					</motion.h1>
					<motion.p variants={SlideUp(0.5)} initial="initial" whileInView={"animate"} className="max-w-sm ">
						Bring your dream home to life with one-on-one interior design services
					</motion.p>
					<motion.div
						variants={SlideUp(0.8)}
						initial="initial"
						whileInView={"animate"}
						className="flex items-center gap-4"
					>
						<Button variant="outline">contact us</Button>
						<Button>get started</Button>
					</motion.div>
				</div>
				{/* ---------------------------------- Image --------------------------------- */}
				<motion.div
					variants={SlideDown(0.5)}
					initial="initial"
					whileInView={"animate"}
					className="w-full lg:w-2/3 relative aspect-square "
				>
					<Image src={"/assets/hero.png"} alt={"hero"} fill className="object-contain" />
				</motion.div>
			</section>
		</AnimatePresence>
	)
}
