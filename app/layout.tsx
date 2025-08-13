import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import { roboto, robotoSerif } from "@/fonts"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Header from "@/components/layout/Header"

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
		<html lang="en" suppressHydrationWarning>
			<body className={`${roboto.className} ${robotoSerif.variable} antialiased `}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<Header />
					<main className="min-h-dvh container mx-auto overflow-hidden mt-14 ">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
