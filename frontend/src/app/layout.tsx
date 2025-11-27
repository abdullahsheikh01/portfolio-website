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
  title: "Abdullah Shaikh - Agentic AI & Frontend Web Developer",
  description: "Portfolio of Abdullah Shaikh, a passionate Agentic AI and Frontend Web Developer based in Karachi, specializing in creating intelligent, next-generation web applications with Python, OpenAI Agents SDK, and Next.js.",
  keywords: "Agentic AI, Frontend Developer, OpenAI Agents SDK, Python Programmer, Generative AI, Next.js, Tailwind CSS, Web Developer, AI Engineer, Abdullah Shaikh",
  authors: [{name:"Abdullah Shaikh"}],
  robots: "index, follow",
  openGraph: {
    title: "Abdullah Shaikh - Agentic AI & Frontend Web Developer",
    description: "Portfolio of Abdullah Shaikh, a passionate Agentic AI and Frontend Web Developer.",
    url: "https://abdullah-shaikh-portfolio.vercel.app",
    type: "website",
    images: [
      {
        url: "https://abdullah-shaikh-portfolio.vercel.app/images/developer.png",
        width: 500,
        height: 500,
        alt: "Abdullah Shaikh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Shaikh - Agentic AI & Frontend Web Developer",
    description: "Portfolio of Abdullah Shaikh, a passionate Agentic AI and Frontend Web Developer.",
    images: ["https://abdullah-shaikh-portfolio.vercel.app/images/developer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
