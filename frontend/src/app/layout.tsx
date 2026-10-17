import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#03051C",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullah-shaikh-portfolio.vercel.app"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Shaikh - Agentic AI & Frontend Web Developer",
    description: "Portfolio of Abdullah Shaikh, a passionate Agentic AI and Frontend Web Developer.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
