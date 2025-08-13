import MobileServerNav from "@/components/layout/MobileServerNav"
import ServerAside from "@/components/layout/ServerAside"

export default function ServerLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex gap-8 mt-8 lg:mt-16">
			{/* ------------------------------- Desktop Nav ------------------------------ */}
			<aside className="lg:w-2/12 lg:block hidden ">
				<ServerAside />
			</aside>

			{/* ------------------------------- Mobile Nav ------------------------------- */}
			<nav className="lg:hidden absolute z-50 bottom-16 right-16">
				<MobileServerNav />
			</nav>
			<div className=" lg:w-10/12 w-full ">{children}</div>
		</div>
	)
}
