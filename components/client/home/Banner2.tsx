import Image from "next/image"
import { Button } from "../../ui/button"
import * as motion from "motion/react-client"
import { SlideLeft, SlideRight } from "@/animation/animate"

export default function Banner2() {
	return (
		<section className="flex lg:flex-row flex-col lg:gap-12 gap-6 justify-evenly ">
			<div className="w-full lg:w-1/3 flex flex-col lg:justify-center items-center lg:items-start gap-8 ">
				<motion.h2 variants={SlideRight(0.2)} initial="initial" whileInView={"animate"} className="max-w-2xs ">
					we believe that a team makes any project better
				</motion.h2>
				<motion.p variants={SlideRight(0.3)} initial="initial" whileInView={"animate"} className="max-w-2xs ">
					Bring your dream home to life with one-on-one interior design help & hand picked products colored to your
					style, space, and budget.
				</motion.p>
				<div className="flex gap-8 items-center justify-between">
					<motion.div
						variants={SlideRight(0.5)}
						initial="initial"
						whileInView={"animate"}
						className="flex flex-col gap-4"
					>
						<h2>15</h2>
						<p>
							Year of
							<br /> Experience
						</p>
					</motion.div>
					<motion.div
						variants={SlideRight(0.7)}
						initial="initial"
						whileInView={"animate"}
						className="flex flex-col gap-4"
					>
						<h2>38</h2>
						<p>
							Projects
							<br /> Complete
						</p>
					</motion.div>
					<motion.div
						variants={SlideRight(0.9)}
						initial="initial"
						whileInView={"animate"}
						className="flex flex-col gap-4"
					>
						<h2>29</h2>
						<p>
							Different
							<br /> Cities
						</p>
					</motion.div>
				</div>
				<motion.div variants={SlideRight(1)} initial="initial" whileInView={"animate"} className="">
					<Button>contact us</Button>
				</motion.div>
			</div>
			<motion.div
				variants={SlideLeft(1)}
				initial="initial"
				whileInView={"animate"}
				className="w-full lg:w-2/3  relative  aspect-square  "
			>
				<Image src={"/assets/banner2.png"} alt={"banner"} fill className="object-contain" />
			</motion.div>
		</section>
	)
}
