import SubmitButton from "@/components/shared/SubmitButton"
import { UploadOneImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { getOneAdmin } from "@/data/admin.data"
import { editAdmin } from "@/functions/admin.action"
import { isSuperAdmin } from "@/functions/authentication"
import Form from "next/form"

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
	await isSuperAdmin()
	const id = (await params).id
	const admin = await getOneAdmin(id)
	console.log("admin from admin edit page", admin)
	return (
		<Card>
			<CardHeader>
				<CardTitle>add admin</CardTitle>
				<CardDescription>Add an admin to the database.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={editAdmin}>
				<Input type="hidden" name="id" value={id} />
				<CardContent className="flex flex-col gap-4">
					{/* ---------------------------------- name ---------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">name</Label>
						<Input name="name" placeholder="Ahmed Mohamed" type="text" required defaultValue={admin?.name} />
					</div>

					{/* ---------------------------------- email --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">email</Label>
						<Input name="email" placeholder="text@email.com" type="email" required defaultValue={admin?.email} />
					</div>

					{/* --------------------------------- mobile --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="mobile">mobile</Label>
						<Input
							name="mobile"
							placeholder="01234567890"
							type="number"
							required
							minLength={10}
							maxLength={14}
							defaultValue={admin?.mobile}
						/>
					</div>
					<UploadOneImagesDropZone dbImage={admin?.image} />
					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
