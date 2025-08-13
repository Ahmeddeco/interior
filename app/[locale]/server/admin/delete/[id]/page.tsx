import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function DeletePage() {
	return (
		<Card className=" p-18 flex flex-col justify-center ">
			<CardHeader>
				<CardTitle>Are you sure you want to delete?</CardTitle>
				<CardDescription>This action cannot be undone , so make sure you know what you are doing</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent className="flex items-center justify-between gap-12">
				<Button variant={"default"} >
					cancel
				</Button>
				<Button variant={"destructive"} >
					delete
				</Button>
			</CardContent>
		</Card>
	)
}
