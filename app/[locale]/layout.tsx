import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import { roboto, robotoSerif } from "@/fonts"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Header from "@/components/layout/Header"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "@/app/api/uploadthing/core"

export const metadata: Metadata = {
	title: "Interior | 3D Interior Design",
	description: "3D Interior Design Studio",
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: "ar" | "en" }>
}>) {
	const locale = (await params).locale

	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
			<body className={`${roboto.className} ${robotoSerif.variable} antialiased `}>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<Header />
					<main className="container mx-auto overflow-hidden py-14 ">{children}</main>
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
