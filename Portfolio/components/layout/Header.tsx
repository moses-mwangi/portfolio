// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";

// export default function Header() {
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Archive", path: "/" },
//     { name: "Process", path: "/process" },
//     { name: "Case Studies", path: "/case-studies" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "py-3 backdrop-blur-md" : "py-6"
//       }`}
//       style={{
//         backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
//         borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
//         <Link href="/">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="text-xl font-light tracking-tighter cursor-pointer"
//             style={{ color: "var(--text-primary)" }}
//           >
//             [LA]
//           </motion.div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <Link key={item.path} href={item.path}>
//               <motion.span
//                 whileHover={{ opacity: 0.7 }}
//                 className={`text-sm font-mono tracking-wider cursor-pointer transition ${
//                   router.pathname === item.path ? "opacity-100" : "opacity-50"
//                 }`}
//                 style={{ color: "var(--text-primary)" }}
//               >
//                 {item.name}
//               </motion.span>
//             </Link>
//           ))}
//           <ThemeToggle />
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           style={{ color: "var(--text-primary)" }}
//         >
//           {mobileMenuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden absolute top-full left-0 right-0 p-6"
//           style={{
//             backgroundColor: "var(--bg-primary)",
//             borderBottom: "1px solid var(--border-color)",
//           }}
//         >
//           <div className="flex flex-col gap-4">
//             {navItems.map((item) => (
//               <Link key={item.path} href={item.path}>
//                 <span
//                   className="text-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </span>
//               </Link>
//             ))}
//             <div className="pt-4">
//               <ThemeToggle />
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Archive", path: "/" },
    { name: "Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-6"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-xl font-light tracking-tighter cursor-pointer"
            style={{ color: "var(--text-primary)" }}
          >
            [LA]
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.span
                whileHover={{ opacity: 0.7 }}
                className={`text-sm font-mono tracking-wider cursor-pointer transition ${
                  pathname === item.path ? "opacity-100" : "opacity-50"
                }`}
                style={{ color: "var(--text-primary)" }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "var(--text-primary)" }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 p-6"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className="text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
