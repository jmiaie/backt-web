import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BACKT - Professional Quantitative Trading Research Platform",
  description: "Automated optimization, statistical validation, and regime-adaptive strategies. Professional backtesting tools for serious quant researchers.",
  keywords: ["backtesting", "quantitative trading", "algorithmic trading", "quant research", "portfolio optimization"],
  authors: [{ name: "BACKT" }],
  openGraph: {
    title: "BACKT - Professional Quant Research Platform",
    description: "Stop guessing. Start optimizing. Professional-grade backtesting and quantitative research tools.",
    url: "https://backt.io",
    siteName: "BACKT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BACKT - Professional Quant Research",
    description: "Automated optimization, statistical validation, regime detection for serious quant traders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
