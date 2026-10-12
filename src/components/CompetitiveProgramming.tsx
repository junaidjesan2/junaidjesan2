import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Play, 
  Cpu, 
  Flame, 
  CheckCircle2, 
  Binary, 
  GitBranch, 
  Zap,
  Terminal
} from 'lucide-react';
import { JUDGE_PROFILES } from '../data/profileData';

interface AlgorithmDemo {
  id: string;
  title: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  problemSummary: string;
  inputSample: string;
  steps: string[];
  cppSnippet: string;
}

const ALGORITHMS: AlgorithmDemo[] = [
  {
    id: "bin-search",
    title: "Binary Search (Logarithmic Search)",
    category: "Divide & Conquer",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    problemSummary: "Find target element index in a sorted array by halving search space at each step.",
    inputSample: "Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], Target: 23",
    steps: [
      "Range [0, 9], mid = 4 (value: 16) -> 16 < 23, search right half [5, 9]",
      "Range [5, 9], mid = 7 (value: 56) -> 56 > 23, search left half [5, 6]",
      "Range [5, 6], mid = 5 (value: 23) -> Match found at index 5!",
      "Finished in 3 iterations instead of linear 10 steps."
    ],
    cppSnippet: `int binarySearch(const vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },
  {
    id: "two-pointers",
    title: "Two Pointers (Target Sum)",
    category: "Arrays & Pointers",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    problemSummary: "Determine if two numbers in a sorted array add up to target with constant memory.",
    inputSample: "Array: [1, 3, 4, 7, 11, 15], Target: 15",
    steps: [
      "Pointers: L=0 (1), R=5 (15) -> Sum = 16 > 15, decrement R to 4",
      "Pointers: L=0 (1), R=4 (11) -> Sum = 12 < 15, increment L to 1",
      "Pointers: L=1 (3), R=4 (11) -> Sum = 14 < 15, increment L to 2",
      "Pointers: L=2 (4), R=4 (11) -> Sum = 15 == 15 -> Target pair found [4, 11]!"
    ],
    cppSnippet: `bool twoSumSorted(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}`
  },
  {
    id: "bfs-graph",
    title: "Breadth-First Search (Shortest Path)",
    category: "Graph Theory",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    problemSummary: "Traverse unweighted graph layer by layer to compute shortest path distances.",
    inputSample: "Source Node 1, Adjacency List: {1: [2, 3], 2: [4], 3: [4, 5], 4: [], 5: []}",
    steps: [
      "Initialize Queue: [1], Distances: {1: 0}",
      "Pop 1 -> Explore neighbors 2 (dist 1) & 3 (dist 1). Queue: [2, 3]",
      "Pop 2 -> Explore neighbor 4 (dist 2). Queue: [3, 4]",
      "Pop 3 -> Explore 5 (dist 2). All reachable vertices mapped with minimal edge count."
    ],
    cppSnippet: `vector<int> bfsShortestPath(int start, const vector<vector<int>>& adj, int n) {
    vector<int> dist(n + 1, -1);
    queue<int> q;
    dist[start] = 0;
    q.push(start);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }
    return dist;
}`
  },
  {
    id: "dp-memo",
    title: "Dynamic Programming (Subproblem Memoization)",
    category: "Dynamic Programming",
    timeComplexity: "O(N * W)",
    spaceComplexity: "O(W)",
    problemSummary: "Solve 0/1 Knapsack optimization by storing computed optimal sub-structures.",
    inputSample: "Capacity: 10, Weights: [2, 3, 5], Values: [30, 40, 70]",
    steps: [
      "Compute state dp[w] = max value achievable with capacity w",
      "Process item 1 (w=2, val=30): dp updated for capacities 2..10",
      "Process item 2 (w=3, val=40): combine with existing subsets",
      "Process item 3 (w=5, val=70): max profit optimal value = 110 at weight 8!"
    ],
    cppSnippet: `int knapsack(int W, const vector<int>& wt, const vector<int>& val) {
    vector<int> dp(W + 1, 0);
    for (size_t i = 0; i < wt.size(); ++i) {
        for (int w = W; w >= wt[i]; --w) {
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);
        }
    }
    return dp[W];
}`
  }
];

export const CompetitiveProgramming: React.FC = () => {
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmDemo>(ALGORITHMS[0]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  const runSimulation = () => {
    setRunning(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedAlgo.steps.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setRunning(false);
      }
    }, 800);
  };

  return (
    <section id="problem-solving" className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Flame className="w-3.5 h-3.5" />
            <span>Competitive Programming & Problem Solving</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Online Judge Profiles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Algorithmic Arena</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Active competitive programmer sharpening analytical reasoning across <strong>LeetCode</strong>, <strong>Codeforces</strong>, and <strong>HackerRank</strong> in C++ and JavaScript.
          </p>
        </div>

        {/* Online Judge Profile Cards from README */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {JUDGE_PROFILES.map((judge) => (
            <div 
              key={judge.platform}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: judge.color }}
                    />
                    <h3 className="text-lg font-bold text-white">{judge.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">@{judge.handle}</span>
                </div>

                {/* Badge Image directly from README */}
                <div className="mb-4 flex items-center justify-start">
                  <img 
                    src={judge.badgeUrl} 
                    alt={`${judge.name} badge`} 
                    className="h-7 rounded"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-mono mb-4">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Status / Activity:</span>
                    <span className="text-emerald-400">{judge.ratingHighlights}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Problem Scale:</span>
                    <span className="text-amber-300">{judge.solvedCount}</span>
                  </div>
                </div>
              </div>

              <a
                href={judge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 group-hover:border-slate-700 transition-all"
              >
                <span>View {judge.name} Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Algorithmic Trace Sandbox */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span>INTERACTIVE ALGORITHM EXECUTION TRACE</span>
              </div>
              <h3 className="text-xl font-bold text-white">Algorithmic Strategy Inspector</h3>
            </div>

            {/* Select Algorithm Tabs */}
            <div className="flex flex-wrap gap-2">
              {ALGORITHMS.map((algo) => (
                <button
                  key={algo.id}
                  onClick={() => {
                    setSelectedAlgo(algo);
                    setActiveStep(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedAlgo.id === algo.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {algo.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Execution flow & trace steps */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{selectedAlgo.title}</h4>
                <p className="text-xs text-slate-300 mb-3">{selectedAlgo.problemSummary}</p>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                    Time: {selectedAlgo.timeComplexity}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-purple-300">
                    Space: {selectedAlgo.spaceComplexity}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-300">
                    {selectedAlgo.category}
                  </span>
                </div>
              </div>

              {/* Sample input */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                <span className="text-slate-400">Input: </span>
                <span className="text-emerald-300">{selectedAlgo.inputSample}</span>
              </div>

              {/* Trace steps */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Execution Trace Steps:</span>
                  <button
                    onClick={runSimulation}
                    disabled={running}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{running ? 'Tracing...' : 'Run Trace'}</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {selectedAlgo.steps.map((st, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg text-xs font-mono transition-all flex items-start gap-2.5 ${
                        i <= activeStep
                          ? 'bg-slate-950/90 border border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-950/40 border border-slate-800/40 text-slate-400'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-[10px]">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Code implementation in C++ */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">solution.cpp (C++ STL)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
                  </span>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed bg-slate-950">
                  <code>{selectedAlgo.cppSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
