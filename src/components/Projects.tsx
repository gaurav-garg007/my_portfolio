import { portfolioData } from "@/data/portfolio";
import { FolderGit2, ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Projects</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured work & builds
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
              A collection of web applications, developer utilities, and templates I&apos;ve built or worked on.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto"
          >
            <span>See more on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {project.featured ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-300/40" />
                      Featured
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase">Project</span>
                  )}

                  <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="p-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] border border-white/[0.05] sm:border-transparent transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live site for ${project.title}`}
                        className="p-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/[0.06] border border-white/[0.05] sm:border-transparent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
