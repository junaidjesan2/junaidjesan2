import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PorteJaiLeadership } from './components/PorteJaiLeadership';
import { SkillsSection } from './components/SkillsSection';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { SqaAutomationLab } from './components/SqaAutomationLab';
import { ProjectsSection } from './components/ProjectsSection';
import { GithubStatsSection } from './components/GithubStatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <PorteJaiLeadership />
        <SkillsSection />
        <CompetitiveProgramming />
        <SqaAutomationLab />
        <ProjectsSection />
        <GithubStatsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
