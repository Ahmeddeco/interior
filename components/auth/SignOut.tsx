import { signOut } from "@/auth"
import { Button } from "../ui/button"
import { signOutAction } from "@/functions/authentication"

export default function SignOut() {
	return (
		<form className="w-full" action={signOutAction}>
			<Button type="submit" className="w-full  text-neutral-900" variant={"outline"}>
				SignOut
			</Button>
		</form>
	)
}
