"use client"

import { motion, Variants } from "motion/react"
type Props = {
	children: React.ReactNode
	variants: Variants
	className?: string
  type?:"div"|"section"|"h2"|"h1"|"p"|"span"|undefined
}

export default function MotionWrapper({ children, variants, className ,type}: Props) {
	return (
		<motion.div variants={variants} initial="initial" whileInView={"animate"} className={className}>
			{children}
		</motion.div>
	)
}
