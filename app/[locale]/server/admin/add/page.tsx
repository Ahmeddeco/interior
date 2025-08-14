import SubmitButton from "@/components/shared/SubmitButton"
import  { UploadOneImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { addAdmin } from "@/functions/admin.action"
import { isSuperAdmin } from "@/functions/authentication"
import Form from "next/form"

export default async function AddPage() {
	const user = await isSuperAdmin()
	return (
		<Card>
			<CardHeader>
				<CardTitle>add admin</CardTitle>
				<CardDescription>Add an admin to the database.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={addAdmin}>
				<Input name="image" value={user?.image!} type="hidden" />
				<CardContent className="flex flex-col gap-4">
					{/* ---------------------------------- name ---------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">name</Label>
						<Input name="name" placeholder="Ahmed Mohamed" type="text" required />
					</div>

					{/* ---------------------------------- email --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">email</Label>
						<Input name="email" placeholder="text@email.com" type="email" required />
					</div>

					{/* --------------------------------- mobile --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="mobile">mobile</Label>
						<Input name="mobile" placeholder="01234567890" type="number" required minLength={10} maxLength={14} />
					</div>
					<UploadOneImagesDropZone />
					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
