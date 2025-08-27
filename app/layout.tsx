import { Nunito } from 'next/font/google'
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import PWAInstallPrompt from "@/components/pwa-install"
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
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        <link rel="mask-icon" href="/icons/icon-192x192.png" color="#000000" />
        <link rel="shortcut icon" href="/icons/icon-192x192.png" />
      </head>

      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PWAInstallPrompt />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

const APP_NAME = 'BaskSanta'
const APP_DEFAULT_TITLE = "PWA Starter Kit";
const APP_TITLE_TEMPLATE = "%s - Bask Santa";



export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: "A comprehensive starter kit with PWA capabilities, themed components, and Storybook integration",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["PWA", "React", "Next.js", "Starter Kit", "Components"],
  authors: [{ name: "v0" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_DEFAULT_TITLE,
    title: APP_DEFAULT_TITLE,
    description: "A comprehensive starter kit with PWA capabilities",
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: "A comprehensive starter kit with PWA capabilities",
  },
    icons: [
    {
      url: "/icons/favicon-16x16.png",
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
    },
    {
      url: "/icons/favicon-32x32.png",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
    },
    {rel: "apple-touch-icon", url: "https://example.com/apple-icon.png"}
  ],
  other: { charSet: 'utf-8' }
}


export default RootLayout
