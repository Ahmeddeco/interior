import Image from "next/image"
import Link from "next/link"

export default function Logo() {
	return (
		<Link href="/" className="size-10 flex items-center gap-3">
			<Image src={"/assets/Logo.png"} alt={"logo"} width={32} height={32} />
			<span className="text-3xl font-bold font-robotoSerif">Interior</span>
		</Link>
	)
}
