import { portfolioData } from "@/data/portfolio";
import { Wrench } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>Tech Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Technologies & tools I work with
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
          The languages, frameworks, and libraries I use day-to-day to deliver full-stack products.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-colors"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3.5">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
