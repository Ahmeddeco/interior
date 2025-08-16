import SubmitButton from "@/components/shared/SubmitButton"
import { UploadManyImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { addInterior } from "@/functions/interior.action"
import Form from "next/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Styles } from "@/enums/styles"
import { getClientsForDropdown } from "@/data/client.data"
import { ClientType } from "@/types/client"
import CountryInput from "@/components/shared/CountryInput"

export default async function AddPage() {
	const clients: ClientType[] = await getClientsForDropdown()

	return (
		<Card>
			<CardHeader>
				<CardTitle>add interior</CardTitle>
				<CardDescription>Add an interior project in the database.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={addInterior}>
				<CardContent className="flex flex-col gap-4">
					{/* -------------------------------- fullName -------------------------------- */}
					<div className="flex lg:flex-row flex-col gap-4">
						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">title en</Label>
							<Input name="title_en" placeholder="Modern Villa" type="text" required minLength={3} maxLength={128} />
						</div>

						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">title ar</Label>
							<Input name="title_ar" placeholder="فيلا مودرن" type="text" required minLength={3} maxLength={128} />
						</div>
					</div>

					{/* ------------------------------- description ------------------------------ */}
					<div className="flex lg:flex-row flex-col gap-4">
						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">description en</Label>
							<Textarea name="description_en" placeholder="Modern Villa" required minLength={32} maxLength={1024} />
						</div>

						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">description ar</Label>
							<Textarea name="description_ar" placeholder="فيلا مودرن" required minLength={32} maxLength={1024} />
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-4">
						{/* -------------------------------- style -------------------------------- */}
						<Select name="style" required>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="style" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value={Styles.simplicity}>{Styles.simplicity}</SelectItem>
								<SelectItem value={Styles.scandinavian}>{Styles.scandinavian}</SelectItem>
								<SelectItem value={Styles.modern}>{Styles.modern}</SelectItem>
								<SelectItem value={Styles.japanidi}>{Styles.japanidi}</SelectItem>
								<SelectItem value={Styles.classic}>{Styles.classic}</SelectItem>
								<SelectItem value={Styles.luxury}>{Styles.luxury}</SelectItem>
							</SelectContent>
						</Select>

						{/* --------------------------------- client --------------------------------- */}
						<Select name="client" required>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="client" />
							</SelectTrigger>
							<SelectContent>
								{clients?.map(({ _id, fullName }) => (
									<SelectItem value={_id} key={_id}>
										{fullName}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* ------------------------------ CountryInput ------------------------------ */}
					<CountryInput />

					{/* ------------------------ UploadManyImagesDropZone ------------------------ */}
					<UploadManyImagesDropZone />

					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
