import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Living Archive — Digital Artifacts & Interfaces",
    template: "%s | Living Archive",
  },
  description:
    "A portfolio of digital artifacts, interfaces, and quiet moments. Exploring the poetics of interaction and digital memory.",
  keywords: [
    "Moses Mwangi",
    "portfolio",
    "digital artifacts",
    "UI/UX",
    "creative developer",
    "interaction design",
    "web art",
  ],
  authors: [{ name: "Moses Mwangi" }],
  creator: "Moses Mwangi",
  openGraph: {
    title: "Living Archive — Portfolio",
    description:
      "A portfolio of digital artifacts, interfaces, and quiet moments.",
    url: "https://yourdomain.com",
    siteName: "Living Archive",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Living Archive preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Archive — Portfolio",
    description:
      "A portfolio of digital artifacts, interfaces, and quiet moments.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // other verification tokens
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
