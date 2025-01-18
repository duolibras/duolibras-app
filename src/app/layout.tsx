"use strict"
import type { Metadata } from "next";
import ReactQueryProvider from "../shared/providers/react-query-provider";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
