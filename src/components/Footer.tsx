import React from 'react';
import { ArrowUp, Heart, Globe, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              JJ
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm">Junaid Ahamed Jesan</div>
              <div className="text-[11px] text-slate-400">
                Country Manager (Bangladesh) @ Fly Away International • Software QA & React
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#leadership" className="hover:text-white transition-colors">Fly Away Leadership</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#problem-solving" className="hover:text-white transition-colors">Problem Solving</a>
            <a href="#sqa-lab" className="hover:text-white transition-colors">SQA Lab</a>
            <a href={PROFILE_INFO.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Live Portfolio
            </a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all flex items-center gap-1.5"
            title="Scroll to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Junaid Ahamed Jesan. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Imported & optimized from</span>
            <a 
              href="https://github.com/junaidjesan2/junaidjesan2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-mono"
            >
              junaidjesan2/junaidjesan2
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
