"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Learning", href: "#learning" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#090a0f]/85 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 text-zinc-100 hover:text-cyan-400 font-mono text-sm tracking-tight transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all flex-shrink-0">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-semibold truncate">{portfolioData.personal.name}</span>
          <span className="text-zinc-500 text-xs hidden sm:inline">/ dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-xs font-medium px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08] hover:border-zinc-500 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] active:scale-95 transition-transform"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-zinc-100" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#090a0f]/98 backdrop-blur-xl px-5 py-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06]">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
