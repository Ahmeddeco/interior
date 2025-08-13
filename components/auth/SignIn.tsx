import { signIn } from "@/auth"
import { Button } from "../ui/button"
import { LogIn } from "lucide-react"
import { signInAction } from "@/functions/authentication"

export default function SignIn() {
	return (
		<form action={signInAction}>
			<Button type="submit" variant={"outline"} size={"icon"}>
				<LogIn />
			</Button>
		</form>
	)
}
