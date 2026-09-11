import { portfolioData } from "@/data/portfolio";
import { Compass, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function LearningPath() {
  const { learningPath } = portfolioData;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            In Progress
          </span>
        );
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex-shrink-0">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Completed
          </span>
        );
      case "Planned":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/50 flex-shrink-0">
            <Clock className="w-3 h-3 text-zinc-500" />
            Planned
          </span>
        );
    }
  };

  return (
    <section id="learning" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Continuous Learning</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              My Learning Path & Current Focus
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
              Topics and technologies I&apos;m currently exploring, testing in side projects, or planning to dive into next.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Updated regularly</span>
          </div>
        </div>

        {/* Roadmap Items */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {learningPath.map((item) => (
            <div
              key={item.topic}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <h3 className="text-sm sm:text-base font-semibold text-white">{item.topic}</h3>
                  {getStatusBadge(item.status)}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
