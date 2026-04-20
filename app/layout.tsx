import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Moses Mwangi | Full Stack Developer & AI Engineer",
    template: "%s | Moses Mwangi",
  },
  description:
    "Full Stack Developer and AI Engineer building scalable web applications using React, Next.js, Node.js, and cloud technologies. Explore projects, experience, and contact information.",
  keywords: [
    "Moses Mwangi",
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Developer Portfolio",
    "Software Engineer Kenya",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
  ],
  icons: {
    // For Triple M - use a simple SVG or PNG
    icon: [
      {
        url: "/triple-m-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcut: "/triple-m-logo.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force browser to reload favicon */}
        <link rel="icon" href="/triple-m-logo.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/triple-m-logo.svg?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
