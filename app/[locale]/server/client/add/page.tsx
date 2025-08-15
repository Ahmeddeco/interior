import CountryInput from "@/components/shared/CountryInput"
import SubmitButton from "@/components/shared/SubmitButton"
import { UploadOneImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { addClient } from "@/functions/client.action"
import Form from "next/form"

export default function AddPage() {
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
						<Input name="fullName" placeholder="Ahmed Mohamed" type="text" required />
					</div>

					{/* --------------------------------- mobile --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="mobile">mobile</Label>
						<Input name="mobile" placeholder="01234567890" type="number" required minLength={10} maxLength={14} />
					</div>

					{/* ---------------------------------- email --------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">email</Label>
						<Input name="email" placeholder="text@email.com" type="email" />
					</div>

					{/* ----------------------------------- job ---------------------------------- */}
					<div className="flex flex-col gap-2">
						<Label htmlFor="job">job</Label>
						<Input name="job" placeholder="Doctor" type="text" />
					</div>

					{/* ------------------------------ CountryInput ------------------------------ */}
					<CountryInput />

					<UploadOneImagesDropZone />
					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
