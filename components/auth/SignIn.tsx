import { signIn } from "@/auth"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("google", { redirectTo: "/api/auth/create"})
			}}
		>
			<Button type="submit" variant={"outline"} size={"icon"}>
				<LogIn />
			</Button>
		</form>
	)
}
