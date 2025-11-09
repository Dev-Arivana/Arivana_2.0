"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  // Force light mode only: disable system theme and set forcedTheme to 'light'.
  // We spread incoming props first, then set our enforced values so they take precedence.
  return (
    <NextThemesProvider {...props} defaultTheme="light" enableSystem={false} forcedTheme="light">
      {children}
    </NextThemesProvider>
  );
}
