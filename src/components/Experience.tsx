import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work History</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Where I&apos;ve worked
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
          A summary of my roles, responsibilities, and the tools I used to build real products.
        </p>

        {/* Experience Timeline Cards */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          {experience.map((item, idx) => {
            const isCurrent = idx === 0;
            return (
              <div
                key={item.company}
                className="relative p-5 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{item.role}</h3>
                    <span className="text-zinc-500 text-sm">@</span>
                    <span className="text-base font-medium text-cyan-400">{item.company}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] sm:text-[11px] font-sans">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-zinc-500">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Description Bullets */}
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-mono mr-1">Stack:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] sm:text-xs font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
