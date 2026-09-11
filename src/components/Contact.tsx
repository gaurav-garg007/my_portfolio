"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Check, Copy, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/[0.06] relative">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[200px] sm:h-[250px] bg-cyan-500/5 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s build something together
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Whether you want to discuss full-stack opportunities, have a question about my work,
            or just want to connect, feel free to reach out. I&apos;ll do my best to respond promptly!
          </p>

          {/* Email quick action */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-md mx-auto">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4 flex-shrink-0" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] text-zinc-300 text-xs sm:text-sm font-mono transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 font-sans text-xs">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  <span className="truncate">{personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm text-zinc-400">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
