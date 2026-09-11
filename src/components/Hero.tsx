import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail, MapPin, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Availability Badge */}
        {personal.availableForWork && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-5 sm:mb-6 max-w-full leading-normal">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate sm:whitespace-normal">Available for collaboration & discussions</span>
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.2] sm:leading-[1.15]">
          Hi, I&apos;m {personal.name}. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
            {personal.tagline}
          </span>
        </h1>

        {/* Short intro paragraph */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          Full-Stack Software Engineer with over {personal.yearsOfExperience} years of experience building modern web products. Currently at{" "}
          <span className="text-zinc-200 font-medium">Lark Finserv</span>, formerly at{" "}
          <span className="text-zinc-200 font-medium">Speqto Technologies</span>. Focused on clean code, intuitive UI, and reliable systems.
        </p>

        {/* Meta details & location */}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
            <span>{personal.location}</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span>Full Stack (Node.js, Express, DBs & React/Next.js)</span>
        </div>

        {/* Action Buttons & Socials */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-all shadow-sm group w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] text-zinc-200 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all w-full sm:w-auto"
            >
              Get in touch
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] text-zinc-200 text-sm font-medium hover:bg-white/[0.08] hover:border-cyan-500/40 hover:text-white transition-all w-full sm:w-auto"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2 sm:pl-4 sm:border-l sm:border-white/[0.1]">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] sm:border-transparent transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] sm:border-transparent transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email Me"
              className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] sm:border-transparent transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.01] sm:bg-transparent border sm:border-0 border-white/[0.05]">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">{personal.yearsOfExperience}</div>
            <div className="text-xs text-zinc-500 mt-0.5">Years experience</div>
          </div>
          <div className="p-3 sm:p-0 rounded-xl bg-white/[0.01] sm:bg-transparent border sm:border-0 border-white/[0.05]">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">Fintech & SaaS</div>
            <div className="text-xs text-zinc-500 mt-0.5">Production domains</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 sm:p-0 rounded-xl bg-white/[0.01] sm:bg-transparent border sm:border-0 border-white/[0.05]">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">Full-Stack</div>
            <div className="text-xs text-zinc-500 mt-0.5">Node, Express, DBs & React</div>
          </div>
        </div>
      </div>
    </section>
  );
}
