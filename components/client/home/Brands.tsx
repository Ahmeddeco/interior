import { BrandsImage } from "@/constants/brands"
import Image from "next/image"
import * as motion from "motion/react-client"
import { SlideLeft } from "@/animation/animate"

export default function Brands() {
	return (
		<section className="flex flex-wrap justify-center lg:justify-between gap-4 ">
			{BrandsImage.map(({ id, image, delay }) => (
				<motion.div
					variants={SlideLeft(delay)}
					initial="initial"
					// animate="animate"
					whileInView={"animate"}
					className="relative w-[189px] h-[63px] "
					key={id}
				>
					<Image src={image} alt={"Brands"} fill />
				</motion.div>
			))}
		</section>
	)
}
