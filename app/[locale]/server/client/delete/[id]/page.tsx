import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { isSuperAdmin } from "@/functions/authentication"
import { deleteClient } from "@/functions/client.action"
import Form from "next/form"
import Link from "next/link"

export default async function DeletePage({ params }: { params: Promise<{ id: string }> }) {
	await isSuperAdmin()
	const id = (await params).id

	return (
		<Card className=" p-18 flex flex-col justify-center ">
			<CardHeader>
				<CardTitle>Are you sure you want to delete?</CardTitle>
				<CardDescription>This action cannot be undone , so make sure you know what you are doing</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent className="flex items-center justify-between gap-12">
				<Button variant={"success"} asChild>
					<Link href={"/server/client"}>cancel</Link>
				</Button>
				<Form action={deleteClient}>
					<Input type="hidden" name="id" value={id} />
					<Button variant={"destructive"}>delete</Button>
				</Form>
			</CardContent>
		</Card>
	)
}
