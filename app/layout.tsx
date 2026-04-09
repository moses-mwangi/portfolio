// import type { Metadata } from "next";
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: {
//     default: "Living Archive — Digital Artifacts & Interfaces",
//     template: "%s | Living Archive",
//   },
//   description:
//     "A portfolio of digital artifacts, interfaces, and quiet moments. Exploring the poetics of interaction and digital memory.",
//   keywords: [
//     "portfolio",
//     "digital artifacts",
//     "UI/UX",
//     "creative developer",
//     "interaction design",
//     "web art",
//     "digital wellness",
//     "interactive narrative",
//   ],
//   // authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
//   // creator: "Your Name",
//   // metadataBase: new URL("https://yourdomain.com"),
//   // openGraph: {
//   //   title: "Living Archive — Portfolio",
//   //   description:
//   //     "A portfolio of digital artifacts, interfaces, and quiet moments.",
//   //   url: "https://yourdomain.com",
//   //   siteName: "Living Archive",
//   //   images: [
//   //     {
//   //       url: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Living+Archive+Portfolio",
//   //       width: 1200,
//   //       height: 630,
//   //       alt: "Living Archive portfolio preview",
//   //     },
//   //     {
//   //       url: "https://placehold.co/800x400/16213e/ffffff?text=Digital+Artifacts",
//   //       width: 800,
//   //       height: 400,
//   //       alt: "Digital artifacts showcase",
//   //     },
//   //   ],
//   //   locale: "en_US",
//   //   type: "website",
//   // },
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Living Archive — Portfolio",
//   //   description:
//   //     "A portfolio of digital artifacts, interfaces, and quiet moments.",
//   //   images: [
//   //     "https://placehold.co/1200x600/0f3460/e94560?text=Living+Archive+Twitter",
//   //   ],
//   //   creator: "@yourhandle",
//   //   site: "@yourhandle",
//   // },
//   // robots: {
//   //   index: true,
//   //   follow: true,
//   //   googleBot: {
//   //     index: true,
//   //     follow: true,
//   //     "max-video-preview": -1,
//   //     "max-image-preview": "large",
//   //     "max-snippet": -1,
//   //   },
//   // },
//   icons: {
//     icon: [
//       { url: "/images/fibs_Logo_Bg.png", sizes: "any" },
//       { url: "/icon.svg", type: "image/svg+xml" },
//     ],
//     shortcut: "/shortcut-icon.png",
//     apple: [
//       { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
//     ],
//   },
//   // icons: {
//   //   icon: "/images/fibs_Logo_Bg.png",
//   // },
//   // manifest: "/site.webmanifest",
//   // verification: {
//   //   google: "your-google-verification-code",
//   // },
//   // alternates: {
//   //   canonical: "https://yourdomain.com",
//   //   languages: {
//   //     "en-US": "https://yourdomain.com",
//   //   },
//   // },
//   // category: "technology",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }

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
    "portfolio",
    "digital artifacts",
    "UI/UX",
    "creative developer",
    "interaction design",
    "web art",
    "digital wellness",
    "interactive narrative",
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
