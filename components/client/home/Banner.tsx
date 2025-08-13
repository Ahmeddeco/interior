import Image from "next/image"
import { Button } from "../../ui/button"
import * as motion from "motion/react-client"
import { SlideLeft, SlideRight } from "@/animation/animate"
export default function Banner() {
	return (
		<section className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-6  ">
			<motion.div
				variants={SlideRight(0.5)}
				initial="initial"
				whileInView={"animate"}
				className="w-full lg:w-2/3  relative  aspect-square  "
			>
				<Image src={"/assets/banner.png"} alt={"banner"} fill className="object-contain" />
			</motion.div>
			<div className="w-full lg:w-1/3 flex flex-col lg:justify-center items-center lg:items-start gap-8 ">
				<motion.h2 variants={SlideLeft(0.5)} initial="initial" whileInView={"animate"} className="max-w-2xs">
					simple way to make stylish living room
				</motion.h2>
				<motion.p variants={SlideLeft(0.8)} initial="initial" whileInView={"animate"} className="max-w-2xs">
					Bring your dream home to life with one-on-one interior design help & hand-picked products colored to your
					style, space, and budget.
				</motion.p>
				<motion.div variants={SlideLeft(1)} initial="initial" whileInView={"animate"}>
					<Button>discover now</Button>
				</motion.div>
			</div>
		</section>
	)
}
