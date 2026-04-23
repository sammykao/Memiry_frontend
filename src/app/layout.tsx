import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { BackgroundScene } from "@/components/background-scene";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Memiry | Stay In Conversation",
  description:
    "A Next.js marketing site for the Memiry iPhone app: memory, tools, keyboard-first AI, and a direct App Store download flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--page-bg)] font-sans text-[var(--ink)] antialiased">
        <BackgroundScene />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteNavbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
