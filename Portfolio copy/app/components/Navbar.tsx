"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold group"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
          </div>
          <span className="font-display">MS</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </button>
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium text-center hover:bg-primary/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
