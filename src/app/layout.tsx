"use strict"
import type { Metadata } from "next";
import ReactQueryProvider from "../shared/providers/react-query-provider";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
    <html lang="en">
      <body className="font-sans">
        <ReactQueryProvider>
          <AuthProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
