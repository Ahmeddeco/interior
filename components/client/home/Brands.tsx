import { BrandsImage } from "@/constants/brands"
import Image from "next/image"
import { SlideLeft } from "@/animation/animate"
import MotionWrapper from "@/components/shared/MotionWrapper"

export default function Brands() {
	return (
		<section className="flex flex-wrap justify-center lg:justify-between gap-4 ">
			{BrandsImage.map(({ id, image, delay }) => (
				<MotionWrapper variants={SlideLeft(delay)} className="relative w-[189px] h-[63px] " key={id}>
					<Image src={image} alt={"Brands"} fill />
				</MotionWrapper>
			))}
		</section>
	)
}
