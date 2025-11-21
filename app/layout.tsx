import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingCTAButton } from "@/components/cta/floating-cta-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for AI Software House
export const metadata: Metadata = {
  title: "AI Software House | Building Intelligent Software for the AI Era",
  description:
    "Premium AI solutions, custom software development, and enterprise automation. Specializing in AI Agents, MS365, Dynamics, and Cloud solutions.",
  generator: "v0.app",
  keywords: ["AI Software", "AI Agents", "Automation", "Custom Software", "MS365", "Dynamics", "Cloud Solutions"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

// Added viewport configuration for dark theme
export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <FloatingCTAButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
