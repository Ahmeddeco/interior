import Banner from "@/components/home/Banner"
import Banner2 from "@/components/home/Banner2"
import Brands from "@/components/home/Brands"
import Hero from "@/components/home/Hero"
import Subscribe from "@/components/home/Subscribe"
import Testimonial from "@/components/home/Testimonial"
import WhatWeProvide from "@/components/home/WhatWeProvide"

export default function HomePage() {
	return (
		<>
			<Hero />
			<Brands />
			<WhatWeProvide />
			<Banner />
			<Banner2 />
			<Testimonial />
			<Subscribe />
		</>
	)
}
