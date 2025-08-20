import { SlideLeft } from "@/animation/animate"
import MotionWrapper from "@/components/shared/MotionWrapper"
import { Button } from "@/components/ui/button"
import { SiBlender, SiUnrealengine } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"
import { BsHeadsetVr } from "react-icons/bs"
import { HiColorSwatch } from "react-icons/hi"

export default function OurTools() {
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<h2>our tools</h2>

			<div className="flex flex-wrap gap-8 items-center justify-center ">
				<MotionWrapper variants={SlideLeft(0.2)}>
					<Button variant="secondary" size={"full"}>
						<SiBlender /> blender
					</Button>
				</MotionWrapper>
				<MotionWrapper variants={SlideLeft(0.4)}>
					<Button variant="secondary" size={"full"}>
						<SiUnrealengine /> Unreal engine
					</Button>
				</MotionWrapper>
				<MotionWrapper variants={SlideLeft(0.6)}>
					<Button variant="secondary" size={"full"}>
						<BsHeadsetVr /> virtual reality
					</Button>
				</MotionWrapper>
				<MotionWrapper variants={SlideLeft(0.8)}>
					<Button variant="secondary" size={"full"}>
						<HiColorSwatch /> color picker
					</Button>
				</MotionWrapper>
				<MotionWrapper variants={SlideLeft(1)}>
					<Button variant="secondary" size={"full"}>
						<RiNextjsFill /> Next-js
					</Button>
				</MotionWrapper>
			</div>
		</section>
	)
}
