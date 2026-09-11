import { portfolioData } from "@/data/portfolio";
import { Sparkles, Code2, Zap, BookOpen } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Code2,
      title: "Clean & Simple Code",
      desc: "I believe code should be easy to read, test, and maintain for anyone who touches it next.",
    },
    {
      icon: Zap,
      title: "Speed & Usability",
      desc: "Fast load times, responsive layouts, and intuitive interfaces that get out of the user's way.",
    },
    {
      icon: BookOpen,
      title: "Continuous Growth",
      desc: "Constantly experimenting with new frameworks, backend designs, and developer tooling.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          A bit about my journey & approach
        </h2>

        {/* Bio text */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {personal.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Info Sidebar */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Quick Details
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="text-zinc-500 text-[11px] sm:text-xs">Current Role</div>
                <div className="text-zinc-200 font-medium">Software Engineer @ Lark Finserv</div>
              </div>
              <div>
                <div className="text-zinc-500 text-[11px] sm:text-xs">Experience</div>
                <div className="text-zinc-200 font-medium">{personal.yearsOfExperience} Years</div>
              </div>
              <div>
                <div className="text-zinc-500 text-[11px] sm:text-xs">Primary Tech</div>
                <div className="text-zinc-200 font-medium">Node.js, Express, React, Next.js, PostgreSQL, MongoDB</div>
              </div>
              <div>
                <div className="text-zinc-500 text-[11px] sm:text-xs">Location</div>
                <div className="text-zinc-200 font-medium">{personal.location}</div>
              </div>
              <div>
                <div className="text-zinc-500 text-[11px] sm:text-xs">Passions</div>
                <div className="text-zinc-200 font-medium">Web Performance, Clean UI, System Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3.5">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
