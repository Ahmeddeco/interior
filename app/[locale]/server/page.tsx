import { isSuperAdmin } from "@/functions/authentication"

export default async function ServerPage() {
	const user = await isSuperAdmin()
	return <h1>Welcome to ServerPage!</h1>
}
