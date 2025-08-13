"use client"

import React from "react"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

type Props = {
	title?: string
}

export default function SubmitButton({ title = "Submit" }: Props) {
	const { pending } = useFormStatus()

	return (
		<>
			{pending ? (
				<Button className="w-full" disabled>
					<Loader2 className="animate-spin" />
					please wait
				</Button>
			) : (
				<Button className="w-full" type="submit">
					{title}
				</Button>
			)}
		</>
	)
}
