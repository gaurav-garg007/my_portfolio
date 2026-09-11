import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gaurav Garg | Full-Stack Software Engineer",
  description:
    "Personal portfolio and learning path of Gaurav Garg. Full-Stack Software Engineer at Lark Finserv, specializing in Next.js, React, and TypeScript.",
  keywords: [
    "Gaurav Garg",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Lark Finserv",
    "Speqto Technologies",
    "Portfolio",
  ],
  authors: [{ name: "Gaurav Garg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-zinc-100">{children}</body>
    </html>
  );
}
