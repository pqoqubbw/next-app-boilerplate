"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const THEME_STORAGE_KEY = "theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider storageKey={THEME_STORAGE_KEY} {...props}>
      {children}
    </NextThemesProvider>
  )
}
