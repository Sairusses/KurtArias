import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/navbar";
import CustomFooter from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kurt Arias | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
    <body className={inter.className}>
      <header> <CustomNavbar/> </header>
      {children}
      <footer> <CustomFooter/> </footer>
    </body>
    </html>
  );
}
