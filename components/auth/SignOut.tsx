import { signOut } from "@/auth"
import { Button } from "../ui/button"

export default function SignOut() {
	return (
		<form
			className="w-full"
			action={async () => {
				"use server"
				await signOut()
			}}
		>
			<Button type="submit" className="w-full  text-neutral-900" variant={"outline"}>
				SignOut
			</Button>
		</form>
	)
}
