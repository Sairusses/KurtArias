import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kurt Arias| Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
