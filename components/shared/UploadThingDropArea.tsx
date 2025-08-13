"use client"

import { UploadDropzone } from "@/utils/uploadthing"
import { useState } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { twMerge } from "tailwind-merge"

type Props = {
	endpoint: "manyImagesUploader" | "oneImageUploader"
}

export default function UploadThingDropArea({ endpoint }: Props) {
	const [images, setImages] = useState([""])

	return (
		<>
			<Input type="hidden" value={images.length > 1 ? images.join(",") : images[0]} name="images" />
			<UploadDropzone
				config={{ cn: twMerge }}
				className="ut-button:bg-foreground ut-button:text-background ut-label:text-foreground ut-allowed-content:text-muted-foreground ut-upload-icon:text-foreground ut-readying:text-foreground ut-ready:text-foreground ut-uploading:text-foreground"
				endpoint={endpoint}
				onClientUploadComplete={(res) => {
					setImages(res.map((img) => img.ufsUrl))
					toast.success("Image uploaded successfully")
				}}
				onUploadError={(error: Error) => {
					toast.error(`ERROR! ${error.message}`)
				}}
			/>
		</>
	)
}
