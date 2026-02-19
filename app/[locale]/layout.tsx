import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Header from "@/components/layout/Header"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "@/app/api/uploadthing/core"
import localFont from "next/font/local"

export const metadata: Metadata = {
	title: "Interior | 3D Interior Design",
	description: "3D Interior Design Studio",
}

const cairo = localFont({
	src: "../../public/fonts/Cairo.ttf",
	variable: "--font-cairo",
})

const cairoPlay = localFont({
	src: "../../public/fonts/CairoPlay.ttf",
	variable: "--font-cairoPlay",
})

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const locale = (await params).locale

	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
			<body className={`${cairo.className} ${cairoPlay.variable} antialiased `}>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<Header />
					<main className="container mx-auto px-4 overflow-hidden pt-14 min-h-dvh">{children}</main>
					<Toaster
						theme="system"
						richColors
						position="bottom-right"
						duration={5000}
						icons={{
							success: <CircleCheckBig />,
							warning: <CircleAlert />,
							error: <CircleX />,
						}}
					/>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
