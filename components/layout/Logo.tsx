import Link from "next/link"

export default function Logo() {
	return (
		<Link href="/" className="size-10 flex items-center gap-2">
			<div className="bg-neutral-900 size-10 relative aspect-square">
				<div className="absolute bg-neutral-300 size-5 bottom-0 right-0 aspect-square " />
			</div>
			<span className="text-3xl font-bold tracking-wider text-neutral-900">Interior</span>
		</Link>
	)
}
