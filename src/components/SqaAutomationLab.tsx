import React, { useState } from 'react';
import { 
  TestTube, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Clock, 
  Check, 
  XCircle,
  FileCode,
  Sparkles
} from 'lucide-react';

interface TestCase {
  id: string;
  name: string;
  suite: 'Playwright E2E' | 'Postman API' | 'Selenium Regression';
  duration: string;
  status: 'passed' | 'running' | 'idle';
  assertion: string;
}

const INITIAL_TESTS: TestCase[] = [
  {
    id: "test-1",
    name: "auth.spec.ts — Student Portal Session Auth",
    suite: "Playwright E2E",
    duration: "184ms",
    status: "idle",
    assertion: "expect(page.locator('#dashboard')).toBeVisible()"
  },
  {
    id: "test-2",
    name: "admission-form.spec.ts — Document Upload & Validation",
    suite: "Playwright E2E",
    duration: "312ms",
    status: "idle",
    assertion: "expect(response.status()).toBe(201)"
  },
  {
    id: "test-3",
    name: "api/partner-universities — Schema & Response Contract",
    suite: "Postman API",
    duration: "95ms",
    status: "idle",
    assertion: "pm.response.to.have.jsonSchema(partnerSchema)"
  },
  {
    id: "test-4",
    name: "visa-tracker.spec.ts — Multi-tab Window Switch & Download",
    suite: "Playwright E2E",
    duration: "240ms",
    status: "idle",
    assertion: "expect(download.suggestedFilename()).toContain('.pdf')"
  },
  {
    id: "test-5",
    name: "api/counseling/book — Rate Limiting & CSRF Header Token",
    suite: "Postman API",
    duration: "76ms",
    status: "idle",
    assertion: "pm.expect(pm.response.headers.get('x-rate-limit')).to.exist"
  }
];

export const SqaAutomationLab: React.FC = () => {
  const [tests, setTests] = useState<TestCase[]>(INITIAL_TESTS);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'All' | 'Playwright E2E' | 'Postman API'>('All');
  const [logs, setLogs] = useState<string[]>([
    "Ready. Click 'Run Test Suite' to simulate automated Playwright & Postman execution."
  ]);

  const runAllTests = () => {
    setIsRunning(true);
    setLogs(["[Playwright v1.42] Initializing Chromium, WebKit & Firefox headless runners..."]);

    tests.forEach((_, idx) => {
      setTimeout(() => {
        setTests((prev) => 
          prev.map((t, i) => i === idx ? { ...t, status: 'running' } : t)
        );
        setLogs((prevLogs) => [
          ...prevLogs,
          `▶ Running [${tests[idx].suite}] ${tests[idx].name}`
        ]);
      }, (idx * 400) + 200);

      setTimeout(() => {
        setTests((prev) => 
          prev.map((t, i) => i === idx ? { ...t, status: 'passed' } : t)
        );
        setLogs((prevLogs) => [
          ...prevLogs,
          `✔ PASS: ${tests[idx].name} (${tests[idx].duration}) — ${tests[idx].assertion}`
        ]);

        if (idx === tests.length - 1) {
          setIsRunning(false);
          setLogs((prevLogs) => [
            ...prevLogs,
            "==================================================",
            `🎉 All ${tests.length} tests passed successfully! 100% Assertion Rate (0 failed, 0 flaky)`
          ]);
        }
      }, (idx * 400) + 650);
    });
  };

  const resetTests = () => {
    setTests(INITIAL_TESTS);
    setLogs(["Test suite reset. Ready for new test execution."]);
  };

  const filteredTests = activeTab === 'All' 
    ? tests 
    : tests.filter(t => t.suite === activeTab);

  return (
    <section id="sqa-lab" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <TestTube className="w-3.5 h-3.5" />
            <span>Software Quality Assurance & Automation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Playwright & Postman <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">SQA Test Lab</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Delivering rock-solid digital experiences through automated End-to-End browser validation, RESTful API contract testing, and regression analysis.
          </p>
        </div>

        {/* Live Test Runner Card */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 lg:p-8 shadow-2xl">
          
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Automated Test Execution Suite</h3>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>Frameworks: Playwright, Postman, Selenium</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={resetTests}
                disabled={isRunning}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors disabled:opacity-50"
                title="Reset Suite"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={runAllTests}
                disabled={isRunning}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{isRunning ? 'Running Tests...' : 'Run Test Suite'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Test Cases List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Test Specifications</span>
                <div className="flex gap-1">
                  {(['All', 'Playwright E2E', 'Postman API'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                        activeTab === tab 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {filteredTests.map((test) => (
                  <div
                    key={test.id}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {test.status === 'passed' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : test.status === 'running' ? (
                        <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
                      )}
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-slate-200">
                          {test.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 mt-0.5">
                          <span className="text-cyan-400">{test.suite}</span>
                          <span>•</span>
                          <span className="text-slate-400">{test.assertion}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 shrink-0">
                      {test.duration}
                    </span>
                  </div>
                ))}
              </div>

              {/* SQA Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-xs">0% Flakiness</div>
                  <div className="text-[11px] text-slate-400">Strict Auto-wait</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-cyan-400 font-bold text-xs">Cross-Browser</div>
                  <div className="text-[11px] text-slate-400">Chrome, Safari, FF</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-indigo-400 font-bold text-xs">API Regression</div>
                  <div className="text-[11px] text-slate-400">Automated Postman</div>
                </div>
              </div>
            </div>

            {/* Right: Real-time Terminal Log Output */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col h-full shadow-inner">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300">test-runner-console</span>
                  </div>
                  <span className="text-emerald-400 text-[10px]">LIVE</span>
                </div>

                <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5 overflow-y-auto max-h-[360px] bg-slate-950/90 leading-relaxed">
                  {logs.map((log, i) => (
                    <div 
                      key={i}
                      className={
                        log.startsWith('✔') 
                          ? 'text-emerald-400 font-medium' 
                          : log.startsWith('🎉') 
                          ? 'text-amber-300 font-bold' 
                          : log.startsWith('▶') 
                          ? 'text-cyan-300' 
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
