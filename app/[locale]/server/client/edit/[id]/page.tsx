import CountryInput from "@/components/shared/CountryInput"
import SubmitButton from "@/components/shared/SubmitButton"
import { UploadOneImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { getOneClient } from "@/dl/client.data"
import { isAdmin } from "@/functions/authentication"
import { addClient } from "@/actions/client.action"
import Form from "next/form"

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
	await isAdmin()
	const id = (await params).id
	const client = await getOneClient(id)

	return (
		<Card>
			<CardHeader>
				<CardTitle>add client</CardTitle>
				<CardDescription>Add an client in the database.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={addClient}>
				<CardContent className="flex flex-col gap-4">
					{/* ---------------------------------- name ---------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="full Name">full Name</Label>
						<Input name="fullName" placeholder="Ahmed Mohamed" type="text" required defaultValue={client?.fullName} />
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
							defaultValue={client?.mobile}
						/>
					</div>

					{/* ---------------------------------- email --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">email</Label>
						<Input name="email" placeholder="text@email.com" type="email" defaultValue={client?.email} />
					</div>

					{/* ----------------------------------- job ---------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="job">job</Label>
						<Input name="job" placeholder="Doctor" type="text" defaultValue={client?.job} />
					</div>

					{/* ------------------------------ CountryInput ------------------------------ */}
					<CountryInput userCity={client?.city} userState={client?.state} userCountry={client?.country} />

					{/* ------------------------- UploadOneImagesDropZone ------------------------ */}
					<UploadOneImagesDropZone />

					{/* ------------------------------ SubmitButton ------------------------------ */}
					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
