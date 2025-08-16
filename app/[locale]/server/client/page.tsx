import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllClients } from "@/data/client.data"
import { getImageUrl } from "@/functions/getImageUrl"
import { EllipsisVertical, PlusCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function ClientPage() {
	const clients = await getAllClients()

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<h4>client page</h4>
					<Button asChild>
						<Link href={`/server/client/add`}>
							add client
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
							<TableHead className="col-span-3">name</TableHead>
							<TableHead className="col-span-3">email</TableHead>
							<TableHead className="col-span-3">mobile</TableHead>
							<TableHead className="text-right col-span-1">edit</TableHead>
						</TableRow>
					</TableHeader>
					{/* -------------------------------- TableBody ------------------------------- */}
					<TableBody>
						{clients?.map((client) => (
							<TableRow className="grid grid-cols-12 min-h-16 items-center h-fit" key={client._id}>
								<TableCell className="col-span-2">
									<Image
										src={getImageUrl(client.image)}
										alt={"client"}
										width={72}
										height={72}
										className=" aspect-square object-contain"
									/>
								</TableCell>
								<TableCell className="col-span-3">{client.fullName}</TableCell>
								<TableCell className="col-span-3">{client.email}</TableCell>
								<TableCell className="col-span-3">{client.mobile}</TableCell>
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
													<Link href={`/server/client/edit/${client._id}`}>edit</Link>
												</Button>
											</DropdownMenuItem>
											{/* --------------------------------- delete --------------------------------- */}
											<DropdownMenuItem>
												<Button asChild type="button" className="w-full" variant={"destructive"}>
													<Link href={`/server/client/delete/${client._id}`}>delete</Link>
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
