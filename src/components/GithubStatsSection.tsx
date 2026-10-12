import React from 'react';
import { BarChart3, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const GithubStatsSection: React.FC = () => {
  return (
    <section id="github-stats" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Open Source & Version Control</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub Activity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Repository Insights</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Live telemetry, top languages, and commit statistics imported directly from GitHub for <strong>@junaidjesan2</strong>.
          </p>
        </div>

        {/* GitHub Stats Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Top Languages Widget */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-base">Top Languages Breakdown</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">@junaidjesan2</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center min-h-[170px] overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs?username=junaidjesan2&show_icons=true&locale=en&layout=compact&theme=tokyonight&hide_border=true" 
                alt="Top Languages - Junaid Jesan"
                className="max-w-full h-auto rounded"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Primary: JavaScript, React, C++, Python</span>
              <span className="font-mono text-cyan-400">Live API</span>
            </div>
          </div>

          {/* GitHub Overall Stats Widget */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white text-base">GitHub Contribution Telemetry</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">@junaidjesan2</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center min-h-[170px] overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api/username=junaidjesan2&show_icons=true&locale=en&theme=tokyonight&hide_border=true" 
                alt="GitHub Stats - Junaid Jesan"
                className="max-w-full h-auto rounded"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Commits, PRs, Contributed Repositories</span>
              <a 
                href="https://github.com/junaidjesan2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-mono inline-flex items-center gap-1"
              >
                Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Profile Views & Repository Quick Link Footer Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/30 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Official GitHub Repository: junaidjesan2/junaidjesan2</div>
              <div className="text-xs text-slate-400">Open-source profile readme and developer identity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img 
              src="https://komarev.com/ghpvc/?username=junaidjesan2&label=Profile%20views&color=0e75b6&style=flat" 
              alt="Profile views count"
              className="h-6"
            />
            <a
              href="https://github.com/junaidjesan2/junaidjesan2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
