"use client"

import { UploadDropzone } from "@/utils/uploadthing"
import { useState } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"

type Props = {
	dbImages?: string[]
	dbImage?: string
}

/* ------------------------ UploadManyImagesDropZone ------------------------ */
export function UploadManyImagesDropZone({ dbImages }: Props) {
	const [images, setImages] = useState<string[]>(dbImages ? dbImages : [])
	const handleDeleteManyImages = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<>
			<Label>Images</Label>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name="images" value={images} />
					{images.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							{images.map((image, index) => (
								<div key={index} className="relative aspect-square w-full ">
									<Image
										src={image ?? "/assets/noImage.svg"}
										alt="Product Image"
										fill
										className="w-full h-full object-contain rounded-lg border border-foreground p-2"
									/>

									<Button
										variant={"destructive"}
										size={"icon"}
										onClick={() => handleDeleteManyImages(index)}
										type="button"
										className="absolute -top-3 -right-3 rounded-full"
									>
										<X />
									</Button>
								</div>
							))}
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-foreground ut-button:text-background ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"manyImagesUploader"}
							onClientUploadComplete={(res) => {
								setImages(res.map((r) => r.ufsUrl))
								toast.success("Images uploaded successfully")
							}}
							onUploadError={(e) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
		</>
	)
}

/* ------------------------- UploadOneImagesDropZone ------------------------ */
export function UploadOneImagesDropZone({ dbImage }: Props) {
	const [image, setImage] = useState<string>(dbImage ? dbImage : "")
	const handleDeleteOneImages = () => {
		setImage("")
	}

	return (
		<>
			<Label>Image</Label>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name="image" value={image} />
					{image.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							<div className="relative aspect-square w-full ">
								<Image
									src={image ?? "/assets/noImage.svg"}
									alt="Product Image"
									fill
									className="w-full h-full object-contain rounded-lg border border-foreground p-2"
								/>

								<Button
									variant={"destructive"}
									size={"icon"}
									onClick={() => handleDeleteOneImages()}
									type="button"
									className="absolute -top-3 -right-3 rounded-full"
								>
									<X />
								</Button>
							</div>
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-foreground ut-button:text-background ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"oneImageUploader"}
							onClientUploadComplete={(res) => {
								setImage(res[0].ufsUrl)
								toast.success("Image uploaded successfully")
							}}
							onUploadError={(e) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
		</>
	)
}
