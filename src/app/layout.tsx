"use strict"
import type { Metadata } from "next";
import ReactQueryProvider from "../shared/providers/react-query-provider";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from 'sonner';
import { ThemeProvider } from "@/hooks/use-theme";
import { JourneyProvider } from "@/domains/journey/context/journey-context";
import { AuthProvider } from "@/domains/auth/context/auth-context";

export const metadata: Metadata = {
  title: "DuoLibras",
  description: "Aprenda libras de forma interativa e divertida com IA 🐬",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
        <Toaster position="bottom-center"/>
          <ReactQueryProvider>
              <ThemeProvider>
                <AuthProvider>
                  <JourneyProvider>
                    {children}
                  </JourneyProvider>
                </AuthProvider>
              </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProvider>
      </body>
    </html>
  );
}
