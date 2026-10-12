import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ExternalLink, 
  CheckCircle, 
  Terminal, 
  Sparkles, 
  Award,
  ArrowRight,
  Code2,
  GraduationCap
} from 'lucide-react';
import { PROFILE_INFO, PORTE_JAI_STATS } from '../data/profileData';

export const Hero: React.FC = () => {
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubIndex((prev) => (prev + 1) % PROFILE_INFO.subtitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Status & Live Views Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                <span>Open for Technical & Educational Inquiries</span>
              </span>
              
              {/* Profile views from README */}
              <div className="inline-flex items-center rounded-md overflow-hidden shadow-sm">
                <img 
                  src={PROFILE_INFO.viewsUrl} 
                  alt="Profile views counter" 
                  className="h-6"
                />
              </div>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <div className="text-sm md:text-base font-mono text-blue-400 uppercase tracking-widest font-semibold flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span>👋 Hi there, I'm</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Junaid Ahamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">Jesan</span>
              </h1>
            </div>

            {/* Dynamic Rotating Role Tagline */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm sm:text-base font-medium shadow-inner transition-all duration-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-cyan-300">
                  {PROFILE_INFO.subtitles[subIndex]}
                </span>
              </div>
            </div>

            {/* Descriptive Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Driving international educational access as <strong>Founder</strong> at{' '}
              <a 
                href="#leadership"
                className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-blue-500/50 hover:decoration-blue-400 inline-flex items-center gap-1"
              >
                Porte Jai.edu
              </a>
              , while building scalable applications with <strong>React</strong>, engineering automated test suites with <strong>Playwright & SQA</strong>, and conquering algorithms on <strong>LeetCode & Codeforces</strong>.
            </p>

            {/* Success Badge */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a 
                href="#leadership"
                className="transform hover:scale-105 transition-transform"
              >
                <img 
                  src="https://img.shields.io/badge/🌟_500+_Successful_Admissions-upto_90%25_Success_Rate-brightgreen?style=for-the-badge" 
                  alt="500+ Successful Admissions upto 90% Success Rate"
                  className="rounded-md shadow-lg shadow-emerald-950/40"
                />
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#leadership"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 group transition-all"
              >
                <span>Porte Jai.edu Founder Hub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#problem-solving"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 flex items-center gap-2 transition-all"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Problem Solving & Judges</span>
              </a>

              <a
                href="https://github.com/junaidjesan2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white text-sm border border-slate-800 flex items-center gap-1.5 transition-all"
              >
                <span>GitHub @junaidjesan2</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Connection Quick Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {PROFILE_INFO.socials.slice(0, 5).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:-translate-y-0.5"
                    title={social.name}
                  >
                    <span className="text-xs font-semibold">{social.name.split(' ')[0]}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Highlights & KPI Grid */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Featured Achievement Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> 100% Success
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Founder</h3>
                  <p className="text-xs text-slate-400">Porte Jai.edu • 3 Year+ Track Record</p>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                    500+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Successful Admissions</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                    95%
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Visa & Acceptance Rate</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-indigo-400 font-mono">
                    3+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Online Judge Profiles</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">
                    15+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Languages & Tools</div>
                </div>
              </div>

              {/* Leadership quote from README */}
              <blockquote className="p-3.5 rounded-xl bg-blue-950/20 border-l-4 border-blue-500 text-xs text-slate-300 italic">
                "{PORTE_JAI_STATS.quote}"
              </blockquote>
            </div>

            {/* Quick Tech Snapshot Terminal Card */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-slate-400">junaid@explorer:~$ dev-profile</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <p><span className="text-blue-400">const</span> <span className="text-cyan-300">coreStack</span> = [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'JavaScript'</span>, <span className="text-amber-300">'Playwright'</span>, <span className="text-amber-300">'Postman'</span>];</p>
                <p><span className="text-blue-400">const</span> <span className="text-cyan-300">focus</span> = <span className="text-emerald-400">'Machine Learning 📚 & Problem Solving ⚡'</span>;</p>
                <p><span className="text-blue-400">const</span> <span className="text-cyan-300">status</span> = <span className="text-emerald-400">'Founder @ Porte Jai.edu 🌏'</span>;</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
