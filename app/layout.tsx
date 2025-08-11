import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { roboto, robotoSerif } from "@/fonts"

export const metadata: Metadata = {
	title: "Interior | 3D Interior Design",
	description: "3D Interior Design Studio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} ${robotoSerif.variable} antialiased`}>
				<Header />
				<main className="min-h-dvh container mx-auto px-[1rem] overflow-hidden mt-16">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
