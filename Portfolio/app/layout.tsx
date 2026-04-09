// import React from "react";
// import type { Metadata } from "next";
// import { Inter, Space_Grotesk } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";

// import { AnimatePresence } from "framer-motion";
// // import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import Header from "@/components/layout/Header";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space",
// });

// export const metadata: Metadata = {
//   title: "Moses Seth | AI Engineer & Intelligent Systems Builder",
//   description:
//     "AI Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and AI Automation. Former founder of Kivamall eCommerce platform.",
//   keywords: [
//     "AI Engineer",
//     "Machine Learning",
//     "Deep Learning",
//     "NLP",
//     "Computer Vision",
//     "AI Automation",
//     "LLM",
//     "RAG",
//     "Python",
//     "PyTorch",
//     "TensorFlow",
//   ],
//   authors: [{ name: "Moses Seth" }],
//   openGraph: {
//     title: "Moses Seth | AI Engineer & Intelligent Systems Builder",
//     description:
//       "AI Engineer specializing in building intelligent systems and AI-powered solutions.",
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Moses Seth | AI Engineer",
//     description:
//       "AI Engineer specializing in Machine Learning, Deep Learning, NLP, and AI Automation.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={cn(
//           inter.variable,
//           spaceGrotesk.variable,
//           "antialiased font-sans",
//         )}
//       >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Header />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Archive — Portfolio",
  description:
    "A portfolio of digital artifacts, interfaces, and quiet moments.",
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
