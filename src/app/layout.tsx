import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Sasank Gamini | AI/ML Engineer",
  description:
    "AI/ML Engineer, Full-Stack Builder, and UC Berkeley CS student. Building intelligent systems at the intersection of AI, infrastructure, and startups.",
  keywords: [
    "AI",
    "ML",
    "Machine Learning",
    "Software Engineer",
    "UC Berkeley",
    "Full Stack",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Sasank Gamini" }],
  openGraph: {
    title: "Sasank Gamini | AI/ML Engineer",
    description:
      "AI/ML Engineer, Full-Stack Builder, and UC Berkeley CS student. Building intelligent systems at the intersection of AI, infrastructure, and startups.",
    url: "https://sasankg.vercel.app",
    siteName: "Sasank Gamini",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasank Gamini | AI/ML Engineer",
    description:
      "AI/ML Engineer, Full-Stack Builder, and UC Berkeley CS student.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
