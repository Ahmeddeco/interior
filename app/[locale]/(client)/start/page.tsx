import SignIn from "@/components/auth/SignIn"
import SignOut from "@/components/auth/SignOut"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { isUser } from "@/functions/authentication"
import Form from "next/form"

type Props = {
	params: Promise<{
		id?: string
		locale: "ar" | "en"
	}>
}

export default async function StartPage({ params }: Props) {
	const locale = (await params).locale
	const user = await isUser()

	return !user ? (
		<Card>
			<CardContent>
				<h2>you are not logged in</h2>
				<p> please login to start a new project</p>
				<SignIn />
			</CardContent>
		</Card>
	) : (
		<Card className="my-12">
			<CardHeader>
				<CardTitle>start new project</CardTitle>
				<CardDescription>Start a new project.</CardDescription>
				<Separator />
			</CardHeader>
			<Form action={""}>
				<CardContent className="flex flex-col gap-4">
					<div className="flex flex-col w-full gap-2">
						<Label htmlFor="full Name">title en</Label>
						<Input name="title_en" placeholder="Modern Villa" type="text" required minLength={3} maxLength={128} />
					</div>

					<div className="flex flex-col w-full gap-2">
						<Label htmlFor="full Name">title ar</Label>
						<Input name="title_ar" placeholder="فيلا مودرن" type="text" required minLength={3} maxLength={128} />
					</div>
				</CardContent>
			</Form>
			<SignOut />
		</Card>
	)
}
