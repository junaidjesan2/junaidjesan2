export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & Cloud' | 'QA & Testing' | 'Tools & Systems';
  level: string;
  iconUrl: string;
  experience: string;
  description: string;
}

export interface JudgeProfile {
  name: string;
  platform: 'LeetCode' | 'HackerRank' | 'Codeforces';
  handle: string;
  url: string;
  color: string;
  badgeUrl: string;
  ratingHighlights: string;
  solvedCount: string;
}

export const PROFILE_INFO = {
  name: "Junaid Ahamed Jesan",
  title: "Country Manager (Bangladesh) at Fly Away International 🌏",
  subtitles: [
    "Country Manager (Bangladesh) at Fly Away International 🌏",
    "Problem Solver & Competitive Programmer ⚡",
    "React & JavaScript Engineer 💻",
    "SQA & Playwright Test Automation Specialist 🧪",
    "Machine Learning Explorer 📚"
  ],
  bio: "Country Manager for Fly Away International in Bangladesh with a stellar track record of 150+ successful student admissions (100% success rate) to premier international universities. Simultaneously passionate about Software Engineering, Test Automation (Playwright, SQA), React ecosystem, and competitive problem-solving.",
  email: "junaidjesan2@gmail.com",
  portfolioUrl: "https://junaidjesan.netlify.app/",
  flyAwayUrl: "https://flyawayinternational.com",
  location: "Dhaka, Bangladesh",
  viewsUrl: "https://komarev.com/ghpvc/?username=junaidjesan2&label=Profile%20views&color=0e75b6&style=flat",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/junaidjesan2",
      icon: "linkedin",
      handle: "/in/junaidjesan2",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/junaidjesan2",
      icon: "github",
      handle: "@junaidjesan2",
      color: "hover:text-white"
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com/junaidjesan2",
      icon: "twitter",
      handle: "@junaidjesan2",
      color: "hover:text-sky-400"
    },
    {
      name: "Facebook",
      url: "https://fb.com/junaidjesan2",
      icon: "facebook",
      handle: "junaidjesan2",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/junaid_jesan",
      icon: "instagram",
      handle: "@junaid_jesan",
      color: "hover:text-pink-400"
    },
    {
      name: "Discord",
      url: "https://discord.gg/junaidjesan2",
      icon: "discord",
      handle: "junaidjesan2",
      color: "hover:text-indigo-400"
    }
  ]
};

export const FLY_AWAY_STATS = {
  role: "Country Manager (Bangladesh)",
  duration: "1 Year+",
  admissions: "150+",
  successRate: "100%",
  partnerUniversities: "45+",
  countriesRepresented: ["United Kingdom", "United States", "Canada", "Australia", "Germany", "Malaysia", "Sweden"],
  achievements: [
    {
      title: "150+ Successful Student Admissions",
      detail: "Assisted students in securing admissions and scholarship offers across top-tier universities worldwide.",
      tag: "Admissions"
    },
    {
      title: "100% Admission & Visa Success Rate",
      detail: "Maintained a spotless success rate through rigorous document auditing and interview coaching.",
      tag: "Excellence"
    },
    {
      title: "Personalized Educational Counseling",
      detail: "Empowered students with curated career roadmaps, course matchmaking, and scholarship strategies.",
      tag: "Mentorship"
    },
    {
      title: "Global University Partnerships",
      detail: "Formed bilateral recruitment pacts with renowned academic institutions across the UK, USA, and Europe.",
      tag: "Growth"
    },
    {
      title: "Seminars & Spot Admission Events",
      detail: "Organized high-impact educational expos and spot admissions, attracting hundreds of aspiring scholars.",
      tag: "Outreach"
    }
  ],
  quote: "Helping students achieve their dream of studying abroad, ensuring a smooth process from counseling to campus."
};

export const JUDGE_PROFILES: JudgeProfile[] = [
  {
    name: "LeetCode",
    platform: "LeetCode",
    handle: "junaidjesan2",
    url: "https://leetcode.com/u/junaidjesan2/",
    color: "#FFA116",
    badgeUrl: "https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black",
    ratingHighlights: "Active Daily Solver",
    solvedCount: "150+ Problems"
  },
  {
    name: "Codeforces",
    platform: "Codeforces",
    handle: "junaidjesan",
    url: "https://codeforces.com/profile/junaidjesan",
    color: "#1F8ACB",
    badgeUrl: "https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white",
    ratingHighlights: "Contest Participant",
    solvedCount: "Div 2 / Div 3 Solved"
  },
  {
    name: "HackerRank",
    platform: "HackerRank",
    handle: "junaidjesan2",
    url: "https://www.hackerrank.com/profile/junaidjesan2",
    color: "#2EC866",
    badgeUrl: "https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white",
    ratingHighlights: "Problem Solving Badges",
    solvedCount: "Gold / Silver Badges"
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    experience: "Hooks, Context, SPAs, State Architecture",
    description: "Component-driven design, performant UI rendering, modern React 18/19 patterns."
  },
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    level: "Advanced",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    experience: "Asynchronous JS, Event Loop, Closures, DOM",
    description: "Modern JavaScript programming, modular architecture, functional patterns."
  },
  {
    name: "Playwright",
    category: "QA & Testing",
    level: "Proficient",
    iconUrl: "https://ray.run/playwright-brand-assets/playwright-logo.svg",
    experience: "E2E Testing, Cross-browser automation, Parallel runners",
    description: "Automated end-to-end tests for web applications with modern assertions and reports."
  },
  {
    name: "Selenium",
    category: "QA & Testing",
    level: "Proficient",
    iconUrl: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
    experience: "WebDriver automation, Regression testing",
    description: "Browser automation suites, test verification, and automated regression flows."
  },
  {
    name: "Postman",
    category: "QA & Testing",
    level: "Proficient",
    iconUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    experience: "API testing, Collections, Automated test scripts",
    description: "RESTful API validation, payload assertion, environment variables, Newman runs."
  },
  {
    name: "C++",
    category: "Languages",
    level: "Advanced",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    experience: "STL, Competitive Programming, Data Structures",
    description: "High-performance algorithmic problem solving, vectors, maps, graphs, DP."
  },
  {
    name: "C",
    category: "Languages",
    level: "Proficient",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    experience: "Pointers, Memory allocation, System fundamentals",
    description: "Foundation of computer science, low-level memory mechanics, and algorithms."
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    experience: "Machine Learning exploration, Scripting, Problem Solving",
    description: "Data exploration, numerical computing, and machine learning foundations."
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    experience: "Responsive layouts, Dark mode, Modern design systems",
    description: "Utility-first CSS styling, animations, responsive grid and flexbox layouts."
  },
  {
    name: "Node.js",
    category: "Backend & Cloud",
    level: "Intermediate",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    experience: "REST APIs, Express, NPM ecosystem",
    description: "Backend microservices, asynchronous I/O, server-side development."
  },
  {
    name: "MySQL",
    category: "Backend & Cloud",
    level: "Intermediate",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    experience: "Relational modeling, Complex queries, Indexing",
    description: "Structured query management, schema relationships, transactional integrity."
  },
  {
    name: "MongoDB",
    category: "Backend & Cloud",
    level: "Intermediate",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    experience: "NoSQL document store, Aggregation pipelines",
    description: "Flexible JSON-like document modeling for modern web applications."
  },
  {
    name: "Firebase",
    category: "Backend & Cloud",
    level: "Intermediate",
    iconUrl: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    experience: "Firestore, Authentication, Realtime databases",
    description: "Cloud-native serverless integration, user auth flows, and live data."
  },
  {
    name: "Linux",
    category: "Tools & Systems",
    level: "Proficient",
    iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    experience: "Bash scripting, CLI navigation, System management",
    description: "Server administration, terminal workflows, and development environment setup."
  },
  {
    name: "Git & GitHub",
    category: "Tools & Systems",
    level: "Advanced",
    iconUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    experience: "Version control, Branching workflows, PR reviews",
    description: "Collaborative source control, release tags, CI/CD automated workflows."
  },
  {
    name: "Figma",
    category: "Tools & Systems",
    level: "Intermediate",
    iconUrl: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    experience: "UI/UX wireframes, Prototyping, Design to code",
    description: "Translating wireframes into clean, accessible web components."
  }
];

export const PROJECTS = [
  {
    id: "portfolio-hub",
    title: "Personal Portfolio & Web Showcase",
    subtitle: "junaidjesan.netlify.app",
    link: "https://junaidjesan.netlify.app/",
    description: "Live responsive personal web portfolio featuring projects, technical accomplishments, and contact integration.",
    tags: ["React", "JavaScript", "Responsive Design", "Netlify"],
    badge: "Live Project",
    status: "Published"
  },
  {
    id: "fly-away-portal",
    title: "Fly Away International Bangladesh Operations",
    subtitle: "flyawayinternational.com",
    link: "https://flyawayinternational.com",
    description: "Country leadership operations driving 150+ foreign university student placements across UK, USA, Australia, and Canada with a 100% visa success rate.",
    tags: ["Global Education", "Leadership", "Student Counseling", "Partnerships"],
    badge: "150+ Admissions",
    status: "Active Leadership"
  },
  {
    id: "qa-automation-suite",
    title: "Playwright E2E & SQA Framework",
    subtitle: "Automated Regression & UI Testing",
    link: "https://github.com/junaidjesan2",
    description: "Comprehensive test automation repository executing end-to-end user journeys, cross-browser validation, and REST API regression scripts with Postman.",
    tags: ["Playwright", "Postman", "QA", "JavaScript", "Selenium"],
    badge: "SQA Excellence",
    status: "Active"
  },
  {
    id: "competitive-algorithms",
    title: "Algorithms & Competitive Programming Vault",
    subtitle: "LeetCode & Codeforces Solutions",
    link: "https://leetcode.com/u/junaidjesan2/",
    description: "Collection of solved problems covering Dynamic Programming, Graph Theory, Segment Trees, Greedy Strategies, and Number Theory in C++ and JavaScript.",
    tags: ["C++", "Algorithms", "Data Structures", "LeetCode"],
    badge: "Problem Solving",
    status: "Ongoing"
  }
];
