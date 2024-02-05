import { ReactNode } from "react"
import { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider, useMessages } from "next-intl"

import { METADATA_CONFIG } from "@/config/metadata"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/provider"

import "@/styles/globals.css"

import { ThemeToggler } from "@/components/theme/toggler"

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  }
}

export const metadata: Metadata = {
  title: {
    default: METADATA_CONFIG.name,
    template: `%s - ${METADATA_CONFIG.name}`,
  },
  description: METADATA_CONFIG.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeToggler />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
