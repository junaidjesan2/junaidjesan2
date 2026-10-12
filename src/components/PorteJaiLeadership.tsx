import React, { useState } from 'react';
import { 
  Globe, 
  CheckCircle, 
  Award, 
  GraduationCap, 
  Users, 
  Building2, 
  Calendar, 
  Compass, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
  TrendingUp,
  FileCheck2,
  BookOpen
} from 'lucide-react';
import { PORTE_JAI_STATS, PROFILE_INFO } from '../data/profileData';

export const PorteJaiLeadership: React.FC = () => {
  // Interactive University Eligibility Assessment state
  const [destination, setDestination] = useState<'South Korea' | 'China' | 'Malaysia' | 'Hungary' | 'Cyprus'>('South Korea');
  const [degree, setDegree] = useState<'Bachelors' | 'Masters' | 'Diploma'>('Masters');
  const [gpa, setGpa] = useState<'High' | 'Medium' | 'Average'>('High');
  const [ielts, setIelts] = useState<'7.0+' | '6.0-6.5' | 'less than 6.0'>('7.0+');
  const [assessed, setAssessed] = useState(false);

  // Recommendations generator
  const getEligibilityResult = () => {
    let scholarshipChance = "High (Up to 50% - 100% GKS/CSC/Stipendium)";
    let universityTier = "Top Global Partner Universities";
    let processSpeed = "Fast-track 3-4 Weeks";

    if (gpa === 'Medium') {
      scholarshipChance = "Partial (25% - 50%)";
      universityTier = "Accredited Partner Universities";
    } else if (gpa === 'Average') {
      scholarshipChance = "Standard Tuition Waivers & Direct Entry";
      universityTier = "Direct Partner Universities with Foundation/Language Track";
      processSpeed = "Standard 4-6 Weeks";
    }

    if (ielts === 'less than 6.0') {
      universityTier += " (Foundation / Language Pathway / MOI Available)";
    }

    return { scholarshipChance, universityTier, processSpeed };
  };

  const result = getEligibilityResult();

  return (
    <section id="leadership" className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Globe className="w-3.5 h-3.5" />
            <span>Executive Educational Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Porte Jai.edu — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Founder</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Leading international student admissions at Porte Jai.edu, bridging high-potential candidates with world-class universities in South Korea, China, Malaysia, Hungary, and Cyprus.
          </p>
        </div>

        {/* Core Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">Student Success</span>
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              500+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Successful Student Admissions
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">Visa & Acceptance</span>
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Admission Success Rate
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">Leadership Tenure</span>
              <Calendar className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">
              3 Year+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Founder — Porte Jai.edu
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400">Institutional Reach</span>
              <Building2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
              45+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Global University Partners
            </div>
          </div>
        </div>

        {/* Detailed Role Breakdown & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Key Strategic Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Key Responsibilities & Proven Milestones</span>
            </h3>

            <div className="space-y-3">
              {PORTE_JAI_STATS.achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-semibold text-slate-100">{item.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-900/40 text-blue-300 border border-blue-800/50">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-900/40 shadow-inner">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-200 italic font-medium leading-relaxed">
                    "{PORTE_JAI_STATS.quote}"
                  </p>
                  <div className="mt-2 text-xs text-blue-300 font-semibold">
                    — Junaid Ahamed Jesan, Founder at Porte Jai.edu
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Study Abroad Eligibility Matcher */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-blue-500/30 p-6 shadow-2xl backdrop-blur-sm relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-base">Study Abroad Consultation Advisor</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300">
                  Interactive
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Simulate university qualification and scholarship assessment based on Porte Jai.edu's admission rubric:
              </p>

              {/* Form Controls */}
              <div className="space-y-3.5">
                {/* Destination */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">1. Target Country</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 text-[11px] sm:text-xs">
                    {(['South Korea', 'China', 'Malaysia', 'Hungary', 'Cyprus'] as const).map((dest) => (
                      <button
                        key={dest}
                        onClick={() => { setDestination(dest); setAssessed(true); }}
                        className={`py-1.5 px-1 rounded-lg font-medium transition-all truncate text-center ${
                          destination === dest 
                            ? 'bg-blue-600 text-white font-bold shadow-sm' 
                            : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Degree */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">2. Target Degree</label>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {(['Bachelors', 'Masters', 'Diploma'] as const).map((deg) => (
                      <button
                        key={deg}
                        onClick={() => { setDegree(deg); setAssessed(true); }}
                        className={`py-1.5 rounded-lg font-medium transition-all ${
                          degree === deg 
                            ? 'bg-blue-600 text-white font-bold' 
                            : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {deg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Academic Standing */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">3. Academic Profile / GPA</label>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    <button
                      onClick={() => { setGpa('High'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        gpa === 'High' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      3.5+ / Distinction
                    </button>
                    <button
                      onClick={() => { setGpa('Medium'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        gpa === 'Medium' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      3.0 - 3.49
                    </button>
                    <button
                      onClick={() => { setGpa('Average'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        gpa === 'Average' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      2.5 - 2.99
                    </button>
                  </div>
                </div>

                {/* English Score */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">4. English Proficiency</label>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    <button
                      onClick={() => { setIelts('7.0+'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        ielts === '7.0+' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      IELTS 7.0+
                    </button>
                    <button
                      onClick={() => { setIelts('6.0-6.5'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        ielts === '6.0-6.5' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      IELTS 6.0-6.5
                    </button>
                    <button
                      onClick={() => { setIelts('less than 6.0'); setAssessed(true); }}
                      className={`py-1.5 rounded-lg font-medium transition-all ${
                        ielts === 'less than 6.0' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      Less than 6.0
                    </button>
                  </div>
                </div>
              </div>

              {/* Assessment Result Output */}
              <div className="mt-5 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Match Forecast:</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 100% Eligible for Partner Admissions
                  </span>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Level:</span>
                    <span className="text-white font-medium">{degree} in {destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scholarship Tier:</span>
                    <span className="text-amber-400 font-semibold">{result.scholarshipChance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">University Match:</span>
                    <span className="text-blue-300 font-medium text-right max-w-[200px] truncate">{result.universityTier}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
                  >
                    <span>Book Personalized Counseling</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5-Step Admission Lifecycle */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              The 5-Step Guided Admission Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              How Junaid leads students from initial profile assessment all the way to campus arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Profile Assessment",
                desc: "One-on-one counseling evaluating career goals, academic scores, and country fit."
              },
              {
                step: "02",
                title: "University Selection",
                desc: "Strategic shortlisting of universities offering scholarships and high visa acceptance."
              },
              {
                step: "03",
                title: "Documentation & SOP",
                desc: "Rigorous review of Statement of Purpose, letters of recommendation, and transcripts."
              },
              {
                step: "04",
                title: "Offer & Visa Filing",
                desc: "Securing CAS/I-20, financial document preparation, and mock visa interview sessions."
              },
              {
                step: "05",
                title: "Campus Onboarding",
                desc: "Pre-departure briefings, accommodation support, airport pickups, and alumni connection."
              }
            ].map((stepItem) => (
              <div 
                key={stepItem.step}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center relative group hover:border-blue-500/40 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3 border border-blue-500/30">
                  {stepItem.step}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{stepItem.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
