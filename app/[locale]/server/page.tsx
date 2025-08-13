import { isSuperAdmin } from "@/functions/authentication"

export default async function ServerPage() {
	await isSuperAdmin()
	return <h1>Welcome to ServerPage!</h1>
}
