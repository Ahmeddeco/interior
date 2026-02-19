import SubmitButton from "@/components/shared/SubmitButton"
import { UploadManyImagesDropZone } from "@/components/shared/UploadImagesDropZone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { editInterior } from "@/actions/interior.action"
import Form from "next/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Styles } from "@/enums/styles"
import { getClientsForDropdown } from "@/dl/client.data"
import { ClientType } from "@/types/client"
import CountryInput from "@/components/shared/CountryInput"
import { getOneInterior } from "@/dl/interior.data"

export default async function EditPage({ params }: { params: Promise<{ id: string; locale: "ar" | "en" }> }) {
	const id = (await params).id
	// const locale = (await params).locale
	const interior = await getOneInterior(id)
	const clients: ClientType[] = await getClientsForDropdown()

	return (
		<Card>
			<CardHeader>
				<CardTitle>edit interior</CardTitle>
				<CardDescription>Edit an interior project in the database.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={editInterior}>
				<Input type="hidden" name="id" value={id} />
				<CardContent className="flex flex-col gap-4">
					{/* ---------------------------------- name ---------------------------------- */}
					<div className="flex lg:flex-row flex-col gap-4">
						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">title en</Label>
							<Input
								name="title_en"
								placeholder="Modern Villa"
								type="text"
								required
								minLength={3}
								maxLength={128}
								defaultValue={interior?.title.en}
							/>
						</div>

						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">title ar</Label>
							<Input
								name="title_ar"
								placeholder="فيلا مودرن"
								type="text"
								required
								minLength={3}
								maxLength={128}
								defaultValue={interior?.title.ar}
							/>
						</div>
					</div>

					{/* ------------------------------- description ------------------------------ */}
					<div className="flex lg:flex-row flex-col gap-4">
						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">description en</Label>
							<Textarea
								name="description_en"
								placeholder="Modern Villa"
								required
								minLength={32}
								maxLength={1024}
								defaultValue={interior?.description.en}
							/>
						</div>

						<div className="flex flex-col w-full gap-2">
							<Label htmlFor="full Name">description ar</Label>
							<Textarea
								name="description_ar"
								placeholder="فيلا مودرن"
								required
								minLength={32}
								maxLength={1024}
								defaultValue={interior?.description.ar}
							/>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-4">
						{/* -------------------------------- style -------------------------------- */}
						<Select name="style" defaultValue={interior?.style}>
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
						<Select name="client" defaultValue={interior?.client._id}>
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
					<CountryInput userCity={interior.city} userState={interior.state} userCountry={interior.country} />

					{/* ------------------------ UploadManyImagesDropZone ------------------------ */}
					<UploadManyImagesDropZone dbImages={interior.images} />

					<SubmitButton />
				</CardContent>
			</Form>
		</Card>
	)
}
