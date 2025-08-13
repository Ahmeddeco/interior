import React from "react"
import { Button } from "../ui/button"
import { User2 } from "lucide-react"
import { auth } from "@/auth"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SignIn from "./SignIn"
import Image from "next/image"
import SignOut from "./SignOut"

export default async function User() {
	const session = await auth()
	const user = session?.user

	return user ? (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size={"icon"} variant={"outline"}>
						{user.image ? (
							<Image src={user.image} alt={"user"} width={32} height={32} className="object-cover w-auto h-auto" />
						) : (
							<User2 className="text-neutral-900" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="text-neutral-900 bg-neutral-100" align="end">
					<DropdownMenuLabel className="w-full  aspect-square relative ">
						<Image src={user.image!} alt={"user"} fill className="object-cover rounded-md " />
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuLabel>{user.name}</DropdownMenuLabel>
					<DropdownMenuItem>{user.email}</DropdownMenuItem>
					<DropdownMenuItem>
						<SignOut />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	) : (
		<>
			<SignIn />
		</>
	)
}
