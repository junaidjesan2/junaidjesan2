import React, { useState } from 'react';
import { Code2, Filter, Layers, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { SKILLS_LIST, SkillItem } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Languages', 'Frontend', 'QA & Testing', 'Backend & Cloud', 'Tools & Systems'];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_LIST 
    : SKILLS_LIST.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Languages, Frameworks & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300">Engineering Tools</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Spanning modern frontend engineering in React, automated SQA suites with Playwright & Postman, algorithmic mastery in C++, and machine learning exploration in Python.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              className="cursor-pointer group p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 p-2.5 border border-slate-800 group-hover:border-slate-700 flex items-center justify-center">
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${
                    skill.level === 'Advanced' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : skill.level === 'Proficient'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="text-[11px] font-mono text-cyan-400/90 mb-2">
                  {skill.category}
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[180px]">{skill.experience}</span>
                <span className="text-blue-400 font-mono group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Detailed Skill Inspector */}
        {activeSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-slate-950 p-2.5 border border-slate-800 flex items-center justify-center">
                  <img src={activeSkill.iconUrl} alt={activeSkill.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-cyan-400">{activeSkill.category}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                      {activeSkill.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">Architecture & Application</div>
                  <p className="text-slate-200">{activeSkill.description}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">Key Competencies</div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400">
                    {activeSkill.experience}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
