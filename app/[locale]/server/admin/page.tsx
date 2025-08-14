import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EllipsisVertical, PlusCircle } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getAdmins } from "@/data/admin.data"
import Image from "next/image"
import { getImageUrl } from "@/functions/getImageUrl"

export default async function AdminPage() {
	const admins = await getAdmins()
	return (
		<Card className="min-h-[75vh]">
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<h4>admin page</h4>
					<Button asChild>
						<Link href={`/server/admin/add`}>
							add admin
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
						{admins?.map((admin) => (
							<TableRow className="grid grid-cols-12 min-h-16 items-center h-fit" key={admin._id}>
								<TableCell className="col-span-2">
									<Image
										src={getImageUrl(admin.image)}
										alt={"admin"}
										width={48}
										height={48}
										className=" aspect-square object-contain"
									/>
								</TableCell>
								<TableCell className="col-span-3">{admin.name}</TableCell>
								<TableCell className="col-span-3">{admin.email}</TableCell>
								<TableCell className="col-span-3">{admin.mobile}</TableCell>
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
													<Link href={`/server/admin/edit/${admin._id}`}>edit</Link>
												</Button>
											</DropdownMenuItem>
											{/* --------------------------------- delete --------------------------------- */}
											<DropdownMenuItem>
												<Button asChild type="button" className="w-full" variant={"destructive"}>
													<Link href={`/server/admin/delete/${admin._id}`}>delete</Link>
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
