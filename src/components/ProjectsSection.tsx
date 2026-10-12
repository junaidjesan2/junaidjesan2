import React from 'react';
import { FolderGit2, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/profileData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Deployments & Initiatives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">Live Platforms</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            From leading Fly Away International's Bangladesh division to crafting performant web applications and robust test frameworks.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {proj.badge}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-950 text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {proj.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-3">
                  {proj.subtitle}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.tags.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
