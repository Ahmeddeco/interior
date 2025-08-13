import { CircleDollarSign, ClipboardPenLine, Workflow } from "lucide-react"
import CustomCard from "../../shared/CustomCard"
import { Color } from "@/enums/color"
import * as motion from "motion/react-client"
import { SlideUp } from "@/animation/animate"
export default function WhatWeProvide() {
	return (
		<section className="flex flex-col gap-12 items-center">
			{/* ---------------------------------- title --------------------------------- */}
			<div className="flex flex-col items-center gap-6">
				<motion.h2 variants={SlideUp(0.2)} initial="initial" whileInView={"animate"}>
					What We Provide
				</motion.h2>
				<motion.p
					variants={SlideUp(0.4)}
					initial="initial"
					whileInView={"animate"}
					className="max-w-2xs text-pretty text-center"
				>
					We provide a wide range of interior design services to meet your needs.
				</motion.p>
			</div>
			{/* ---------------------------------- cards --------------------------------- */}
			<div className="flex flex-wrap justify-center gap-8">
				<motion.div variants={SlideUp(0.2)} initial="initial" whileInView={"animate"} className="">
					<CustomCard
						title={"luxury"}
						titleBr={"facilities"}
						paragraph={"The advantage of hiring a workspace with us is that gives you comfortable services."}
						link={"#"}
						linkTitle={"learn more"}
						icon={ClipboardPenLine}
					/>
				</motion.div>
				<motion.div variants={SlideUp(0.4)} initial="initial" whileInView={"animate"} className="">
					<CustomCard
						title={"affordable"}
						titleBr={"price"}
						paragraph={"You can get a workspace of the highest quality at an affordable price."}
						link={"#"}
						linkTitle={"learn more"}
						icon={CircleDollarSign}
						color={Color.black}
					/>
				</motion.div>
				<motion.div variants={SlideUp(0.6)} initial="initial" whileInView={"animate"} className="">
					<CustomCard
						title={"smooth"}
						titleBr={"workflow"}
						paragraph={"We provide the most easy smooth workflow of interior design."}
						link={"#"}
						linkTitle={"learn more"}
						icon={Workflow}
					/>
				</motion.div>
			</div>
		</section>
	)
}
