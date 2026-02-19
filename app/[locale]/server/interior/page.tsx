import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllInteriorsForInteriorPage } from "@/dl/interior.data"
import { Styles } from "@/enums/styles"
import { getImageUrl } from "@/functions/getImageUrl"
import { EllipsisVertical, PlusCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type InteriorType = {
	title: { ar: string; en: string }
	_id: string
	style: Styles
	images: string[]
	client: {
		_id: string
		fullName: string
	}
	country: string
	city: string
}

export default async function InteriorPage({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
	const locale = (await params).locale
	const interiors: InteriorType[] | undefined = await getAllInteriorsForInteriorPage()

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<h4>interior page</h4>
					<Button asChild>
						<Link href={`/server/interior/add`}>
							add interior
							<PlusCircle />
						</Link>
					</Button>
				</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow className="grid grid-cols-12">
							<TableHead className="col-span-2">image</TableHead>
							<TableHead className="col-span-3">title</TableHead>
							<TableHead className="col-span-2">owner</TableHead>
							<TableHead className="col-span-1">style</TableHead>
							<TableHead className="col-span-3">address</TableHead>
							<TableHead className="text-right col-span-1">edit</TableHead>
						</TableRow>
					</TableHeader>
					{/* -------------------------------- TableBody ------------------------------- */}
					<TableBody>
						{interiors?.map((interior) => (
							<TableRow className="grid grid-cols-12 min-h-16 items-center h-fit" key={interior._id}>
								<TableCell className="col-span-2">
									<Image
										src={getImageUrl(interior.images[0])}
										alt={"interior"}
										width={128}
										height={128}
										className=" aspect-video object-contain"
									/>
								</TableCell>
								<TableCell className="col-span-3">{interior.title[locale]}</TableCell>
								<TableCell className="col-span-2">{interior.client.fullName}</TableCell>
								<TableCell className="col-span-1">{interior.style}</TableCell>
								<TableCell className="col-span-3">
									{interior.country} - {interior.city}
								</TableCell>
								<TableCell className="text-right col-span-1">
									{/* ---------------------------------- edit ---------------------------------- */}
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant={"ghost"} size={"icon"}>
												<EllipsisVertical />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											{/* ---------------------------------- edit ---------------------------------- */}
											<DropdownMenuItem>
												<Button asChild className="w-full" variant={"secondary"}>
													<Link href={`/server/interior/edit/${interior._id}`}>edit</Link>
												</Button>
											</DropdownMenuItem>
											{/* --------------------------------- delete --------------------------------- */}
											<DropdownMenuItem>
												<Button asChild type="button" className="w-full" variant={"destructive"}>
													<Link href={`/server/interior/delete/${interior._id}`}>delete</Link>
												</Button>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
