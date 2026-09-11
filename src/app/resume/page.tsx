"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Printer, ArrowLeft, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ResumePage() {
  const { personal, experience, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-200 print:bg-white print:text-black py-8 px-4 sm:px-6">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Resume Document Paper */}
      <div className="max-w-4xl mx-auto bg-zinc-950/80 border border-white/[0.08] print:border-0 print:bg-white print:text-black p-6 sm:p-12 rounded-2xl print:p-0 shadow-2xl">
        {/* Header */}
        <header className="border-b border-white/[0.1] print:border-black/20 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                {personal.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-cyan-400 print:text-zinc-700 mt-1">
                {personal.role}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 print:text-zinc-600 flex flex-wrap gap-x-4 gap-y-1.5 sm:text-right">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 print:text-black" />
                {personal.location}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500 print:text-black" />
                {personal.email}
              </a>
            </div>
          </div>

          {/* Social / Portfolio Links */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400 print:text-zinc-600">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white print:text-black"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin.com/in/gauravgarg-dev</span>
            </a>
            <span className="text-zinc-600 print:hidden">•</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white print:text-black"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/gauravgarg-dev</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
            Full-Stack Software Engineer with 3.5+ years of hands-on experience designing, developing, and deploying scalable web applications. Proficient across the entire engineering lifecycle—from designing resilient backend architectures with Node.js, Express, PostgreSQL, and MongoDB to crafting high-performance, accessible user interfaces with React and Next.js. Experienced in fintech workflows, responsive design, and building reliable RESTful APIs.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-semibold text-white print:text-black">Languages:</span>
              <span className="sm:col-span-3 text-zinc-300 print:text-zinc-800">
                JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-semibold text-white print:text-black">Frontend:</span>
              <span className="sm:col-span-3 text-zinc-300 print:text-zinc-800">
                React, Next.js (App Router), Tailwind CSS, Component Architecture, Responsive Design
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-semibold text-white print:text-black">Backend & APIs:</span>
              <span className="sm:col-span-3 text-zinc-300 print:text-zinc-800">
                Node.js, Express.js, RESTful APIs, JWT Authentication, Microservices
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-semibold text-white print:text-black">Databases:</span>
              <span className="sm:col-span-3 text-zinc-300 print:text-zinc-800">
                PostgreSQL, MongoDB, Relational Schema Design, Data Modeling
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-semibold text-white print:text-black">Tools & Workflow:</span>
              <span className="sm:col-span-3 text-zinc-300 print:text-zinc-800">
                Git, GitHub, Postman, VS Code, Vercel, Docker basics
              </span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1 mb-4">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                      {job.role} <span className="font-medium text-cyan-400 print:text-zinc-700">@ {job.company}</span>
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                    {job.period} | {job.location}
                  </div>
                </div>

                <div className="mt-1 text-xs text-zinc-400 print:text-zinc-600 font-mono">
                  <span className="font-semibold text-zinc-300 print:text-zinc-800">Tech Stack: </span>
                  {job.skills.join(" • ")}
                </div>

                <ul className="mt-3 space-y-1.5 list-disc list-outside pl-4 text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
                  {job.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1 mb-4">
            Key Projects
          </h2>

          <div className="space-y-4">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.title}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">
                    {proj.tags.join(" • ")}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Learning */}
        <section>
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400 print:text-black border-b border-white/[0.08] print:border-black/20 pb-1 mb-3">
            Education & Ongoing Learning
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300 print:text-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-white print:text-black">
                  Bachelor of Technology / Computer Science
                </span>
                <span className="text-zinc-400 print:text-zinc-600"> (Relevant Coursework: Data Structures, Web Technologies, Database Systems)</span>
              </div>
              <span className="text-xs font-mono text-zinc-400 print:text-zinc-600">India</span>
            </div>
            <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed mt-1">
              Active practitioner of modern system architectures, Next.js 16 server paradigms, and full-stack software design.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
