"use strict"

import React from "react";
import type { Metadata } from "next";

import { AuthProvider } from "@/domains/auth/context/auth-context";
import { JourneyProvider } from "@/domains/journey/context/journey-context";
import { ReactQueryProvider } from "@/shared/providers/react-query-provider";

import { Toaster } from 'sonner';

import "./globals.css";

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
      <head>
        <meta name="apple-mobile-web-app-title" content="Duolibras" />
        <meta name="application-name" content="Duolibras" />
        <meta name="description" content="Aprenda libras de maneira divertida e interativa com IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
        <Toaster position="bottom-center" />
        <ReactQueryProvider>
          <AuthProvider>
            <JourneyProvider>
              {children}
            </JourneyProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
