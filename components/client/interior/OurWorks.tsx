import { getAllInteriors } from "@/data/interior.data"
import { InteriorProject } from "@/types/interior.type"
import OurWorkCard from "./OurWorkCard"
import { Separator } from "@/components/ui/separator"

export default async function OurWorks({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
	const locale = (await params).locale
	const data: InteriorProject[] | undefined = await getAllInteriors()
	console.log("data from our works section", data)
	return (
		<section className="flex flex-col gap-8 items-center justify-center">
			<h1>{locale === "en" ? "Our Works" : "أعمالنا"}</h1>
			<div className="flex flex-col gap-8 lg:gap-16 w-full">
				{data?.map((interior) => (
					<div
						className="flex flex-col lg:odd:flex-row lg:even:flex-row-reverse justify-center gap-12 lg:gap-24 min-h-[60vh] h-auto"
						key={interior._id}
					>
						<OurWorkCard interiorProject={interior} locale={locale} />
					</div>
				))}
			</div>
		</section>
	)
}
