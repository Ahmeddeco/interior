import Banner from "@/components/client/home/Banner"
import Banner2 from "@/components/client/home/Banner2"
import Hero from "@/components/client/home/Hero"
import OurTools from "@/components/client/home/OurTools"
import Subscribe from "@/components/client/home/Subscribe"
import Testimonial from "@/components/client/home/Testimonial"
import WhatWeProvide from "@/components/client/home/WhatWeProvide"

export default function HomePage() {
	return (
		<>
			<Hero />
			<OurTools />
			<WhatWeProvide />
			<Banner />
			<Banner2 />
			<Testimonial />
			<Subscribe />
		</>
	)
}
