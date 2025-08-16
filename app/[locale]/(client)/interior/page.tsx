import OurWorks from "@/components/client/interior/OurWorks"

export default async function InteriorPage({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
	return (
		<>
			<OurWorks params={params} />
		</>
	)
}
