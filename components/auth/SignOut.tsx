import Form from "next/form"
import { Button } from "../ui/button"
import { signOutAction } from "@/functions/authentication"
import { signOut } from "@/auth"

export default function SignOut() {
	return (
		<Form action={signOutAction} className=" w-full p-4">
			<Button type="submit" variant={"outline"} className="text-neutral-900 w-full">
				Sign Out
			</Button>
		</Form>
	)
}
