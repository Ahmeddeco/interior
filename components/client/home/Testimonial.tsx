import { TestimonialData } from "@/constants/testimonialData"
import AvatarCard from "../../shared/AvatarCard"
import { Card, CardContent } from "../../ui/card"
import { SlideLeft, SlideUp } from "@/animation/animate"
import MotionWrapper from "@/components/shared/MotionWrapper"

export default function Testimonial() {
	return (
		<section className="flex flex-col justify-center items-center gap-8 ">
			<div className="flex flex-col items-center gap-4">
				<MotionWrapper variants={SlideUp(0.3)}>
					<h2>words from our customers</h2>
				</MotionWrapper>
				<MotionWrapper variants={SlideUp(0.5)}>
					<p className="max-w-md text-center text-pretty">
						Bring your dream home to life with one-on-one interior design help & hand picked products colored to your
						style, and budget.
					</p>
				</MotionWrapper>
			</div>
			<Card className="lg:py-24 h-auto bg-foreground w-full">
				<CardContent className="flex flex-wrap items-center gap-8 justify-center h-full">
					{TestimonialData.map(({ delay, job, id, img, name, text, color }) => (
						<MotionWrapper key={id} variants={SlideLeft(delay)}>
							<AvatarCard className={""} image={img} name={name} job={job} description={text} color={color} />
						</MotionWrapper>
					))}
				</CardContent>
			</Card>
		</section>
	)
}
