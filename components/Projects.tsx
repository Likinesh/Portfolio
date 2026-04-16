"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

import Link from "next/link";

interface ProjectsProps {
  showAll?: boolean;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="py-10 sm:py-16 relative">
      <div className="section-container relative z-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12">
          <div>
            {!showAll && (
              <>
                <div className="section-label mb-6">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">03 // work</span>
                  <div className="h-px w-12 bg-accent opacity-50" />
                </div>
                <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-white-custom leading-tight">
                  Selected <span className="text-accent italic glow-text tracking-tighter pr-2">Projects.</span>
                </h2>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:gap-16">
          {displayProjects.map((project, i) => (
            <div key={project.id} className="relative group">
              {/* Background Glow on hover */}
              <div className="absolute inset-0 bg-accent blur-[100px] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none" />

              <div className="glass-card rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center gap-6 sm:gap-10 p-10 sm:p-14 transition-transform duration-500 hover:border-[rgba(198,241,53,0.2)]">

                {/* Visual Placeholder / Branding Area */}
                <div className="w-full md:w-[45%] h-[200px] sm:h-[300px] rounded-2xl bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex items-center justify-center group/img shrink-0">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20" />

                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-fit opacity-70 group-hover/img:opacity-100 transition-all duration-700 transform group-hover/img:scale-105 relative z-10" />
                  ) : (
                    <div className="font-heading font-bold text-4xl sm:text-5xl text-[rgba(255,255,255,0.1)] group-hover/img:text-[rgba(198,241,53,0.3)] transition-colors duration-500 tracking-tighter transform group-hover/img:scale-110 relative z-10">
                      {project.title.split(" ")[0]}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="w-full md:w-[55%] flex flex-col justify-center">
                  <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    {project.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white-custom mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-custom leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-3 mt-4 mb-10">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-muted-2 font-mono text-[0.65rem] sm:text-[0.7rem] px-4 py-2 uppercase tracking-widest"
                        style={{ margin: "4px" }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="w-full h-px bg-[rgba(255,255,255,0.05)] my-6" />

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.3)] text-white-custom font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 group/btn shrink-0"
                        style={{ marginRight: "12px" }}
                      >
                        <span>Source Code</span>
                        <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 border border-[rgb(198,241,53)] bg-[rgba(198,241,53,0.05)] hover:bg-[rgb(198,241,53)] hover:text-[#0b0b0b] text-[rgb(198,241,53)] font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 group/btn shadow-[0_0_15px_rgba(198,241,53,0.15)] hover:shadow-[0_0_25px_rgba(198,241,53,0.4)] shrink-0"
                      >
                        <span>Live Demo</span>
                        <span className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="mt-16 sm:mt-20 flex justify-center relative z-10 pb-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center group relative overflow-hidden bg-accent text-[#0b0b0b] font-heading font-bold text-[0.9rem] sm:text-base tracking-wide px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-xl hover:shadow-[0_0_30px_rgba(198,241,53,0.3)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              View Project Archive →
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
