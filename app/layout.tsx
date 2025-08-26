import { Nunito } from 'next/font/google'
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import "./globals.css"

const nunitoFont = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={nunitoFont.className}>
      <head>
        <meta name="application-name" content="PWA Starter Kit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA Starter Kit" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
        <link rel="mask-icon" href="/icon-192.png" color="#000000" />
        <link rel="shortcut icon" href="/icon-192.png" />
      </head>

      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  )
}


export const metadata: Metadata = {
  title: "PWA Starter Kit",
  description: "A comprehensive starter kit with PWA capabilities, themed components, and Storybook integration",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["PWA", "React", "Next.js", "Starter Kit", "Components"],
  authors: [{ name: "v0" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PWA Starter Kit",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "PWA Starter Kit",
    title: "PWA Starter Kit",
    description: "A comprehensive starter kit with PWA capabilities",
  },
  twitter: {
    card: "summary",
    title: "PWA Starter Kit",
    description: "A comprehensive starter kit with PWA capabilities",
  },
}


export default RootLayout
