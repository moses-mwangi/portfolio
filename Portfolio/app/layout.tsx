import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Moses Seth | AI Engineer & Intelligent Systems Builder",
  description: "AI Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and AI Automation. Former founder of Kivamall eCommerce platform.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "AI Automation", "LLM", "RAG", "Python", "PyTorch", "TensorFlow"],
  authors: [{ name: "Moses Seth" }],
  openGraph: {
    title: "Moses Seth | AI Engineer & Intelligent Systems Builder",
    description: "AI Engineer specializing in building intelligent systems and AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moses Seth | AI Engineer",
    description: "AI Engineer specializing in Machine Learning, Deep Learning, NLP, and AI Automation.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, "antialiased font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
