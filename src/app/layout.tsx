import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuoLibras",
  description: "Aprenda libras de maneira divertida e acessível",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
