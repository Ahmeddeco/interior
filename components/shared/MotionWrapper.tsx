// "use client"
import * as motion from "motion/react-client"
import { Variants } from "motion/react"
type Props = {
	children: React.ReactNode
	variants: Variants
	className?: string
}

export default function MotionWrapper({ children, variants, className }: Props) {
	return (
		<motion.div variants={variants} initial="initial" whileInView={"animate"} className={className}>
			{children}
		</motion.div>
	)
}
