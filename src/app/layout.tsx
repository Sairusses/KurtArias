import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/navbar";
import CustomFooter from "@/components/footer";
import PageTransition from "@/components/page-transition";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className} bg-background text-foreground min-h-screen overflow-x-hidden relative selection:bg-accent/30 transition-colors duration-500 antialiased`}>
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>

      {/* Global Noise Matrix Background Engine */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-grain opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay z-30" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] z-10" style={{ backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }} />
        <div className="absolute top-[-10%] left-[-10%] w-[55rem] h-[55rem] rounded-full bg-accent/12 blur-[130px]" />
      </div>

      {/* Unified Structural Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <CustomNavbar />

        {/* The page transition processor handles layout switches flawlessly */}
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>

        <CustomFooter />
      </div>

    </NextThemesProvider>
    </body>
    </html>
  );
}