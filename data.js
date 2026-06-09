// ── Workshop Catalog ─────────────────────────────────────────────────────────
// Add or edit workshops here. Each entry renders as a card on the homepage.
const WORKSHOPS = [
  {
    id: "intro",
    title: "Starbucks Agentforce Workshop",
    description: "A walkthrough of building an Agent including topics, actions, and Agentforce Vibes. No prior AI experience required.",
    level: "Beginner",
    duration: "3 hrs",
    color: "#0176d3",       // accent bar color
    tagBg: "#e8f4ff",
    tagColor: "#0176d3",
    link: "starbucks-workshop.html",
  },
  {
    id: "agent-builder",
    title: "Building Your First Agent",
    description: "Hands-on lab: create an Agentforce agent in Agent Builder, define topics, add standard actions, and test in Preview.",
    level: "Beginner",
    duration: "90 min",
    color: "#06a59a",
    tagBg: "#e6f9f8",
    tagColor: "#06a59a",
    link: "#",
  },
  {
    id: "custom-actions",
    title: "Custom Apex Actions",
    description: "Extend your agent with custom Apex-backed actions. Learn how to author, deploy, and wire up Apex invocable methods.",
    level: "Intermediate",
    duration: "2 hrs",
    color: "#9b59b6",
    tagBg: "#f5eefb",
    tagColor: "#7d3c98",
    link: "#",
  },
  {
    id: "flow-actions",
    title: "Agent Actions with Flows",
    description: "Use Salesforce Flow as agent actions — trigger auto-launched flows, pass inputs, and handle outputs in conversation.",
    level: "Intermediate",
    duration: "90 min",
    color: "#ff9000",
    tagBg: "#fff4e6",
    tagColor: "#b35900",
    link: "#",
  },
  {
    id: "prompt-templates",
    title: "Prompt Templates & Grounding",
    description: "Design and test Prompt Templates, ground them with CRM data, and apply them inside agent topics for richer responses.",
    level: "Intermediate",
    duration: "2 hrs",
    color: "#ea001e",
    tagBg: "#fde8eb",
    tagColor: "#b0001a",
    link: "#",
  },
  {
    id: "advanced-orchestration",
    title: "Multi-Step Orchestration",
    description: "Chain multiple actions, handle branching logic, manage session state, and build production-grade autonomous workflows.",
    level: "Advanced",
    duration: "3 hrs",
    color: "#2e844a",
    tagBg: "#e8f5ec",
    tagColor: "#1a5230",
    link: "#",
  },
];

// ── Resources ────────────────────────────────────────────────────────────────
// Add resources to the relevant array. Each shows in its tab.

const SLIDES = [
  {
    title: "Intro to Agentforce — Slides",
    description: "Deck covering agent concepts, architecture overview, and platform capabilities.",
    icon: "📑",
    iconBg: "#e8f4ff",
    link: "#",             // replace with your PDF / Google Slides link
  },
  {
    title: "Agent Builder Lab Guide",
    description: "Step-by-step PDF guide for the Agent Builder hands-on lab.",
    icon: "📋",
    iconBg: "#e6f9f8",
    link: "#",
  },
  {
    title: "Custom Actions Workshop Deck",
    description: "Slide deck for the Apex and Flow custom actions workshop.",
    icon: "📊",
    iconBg: "#f5eefb",
    link: "#",
  },
];

const CODE_SAMPLES = [
  {
    title: "Hello Agent — Starter Repo",
    description: "Minimal Agentforce project with one topic and one Apex action. Great starting point.",
    icon: "💻",
    iconBg: "#e8f4ff",
    link: "#",             // replace with your GitHub repo link
  },
  {
    title: "Apex Invocable Action Template",
    description: "Boilerplate Apex class with @InvocableMethod ready for agent actions.",
    icon: "⚡",
    iconBg: "#fff4e6",
    link: "#",
  },
  {
    title: "Prompt Template Examples",
    description: "A library of Prompt Template XML samples with CRM merge fields.",
    icon: "🔧",
    iconBg: "#f5eefb",
    link: "#",
  },
];

const VIDEOS = [
  {
    title: "Agentforce Overview (15 min)",
    description: "High-level video walk-through of what Agentforce is and how it fits into the Salesforce platform.",
    icon: "▶️",
    iconBg: "#fde8eb",
    link: "#",             // replace with YouTube / Vimeo link
  },
  {
    title: "Agent Builder Demo",
    description: "Live demo: building, configuring, and previewing an agent from scratch in 30 minutes.",
    icon: "🎬",
    iconBg: "#e6f9f8",
    link: "#",
  },
  {
    title: "Custom Apex Actions Deep-Dive",
    description: "Detailed walkthrough of authoring and testing Apex-backed agent actions.",
    icon: "🎥",
    iconBg: "#e8f5ec",
    link: "#",
  },
];

const LINKS = [
  {
    title: "Agentforce Developer Docs",
    description: "Official Salesforce documentation for Agentforce development.",
    icon: "📖",
    iconBg: "#e8f4ff",
    link: "https://developer.salesforce.com/docs/einstein/genai/guide/agentforce-overview.html",
  },
  {
    title: "Trailhead: Agentforce Basics",
    description: "Free guided learning path on Trailhead to get started with Agentforce.",
    icon: "🥾",
    iconBg: "#fff4e6",
    link: "https://trailhead.salesforce.com/content/learn/modules/agentforce-basics",
  },
  {
    title: "Agentforce GitHub Samples",
    description: "Official Salesforce GitHub org with Agentforce code samples and starter projects.",
    icon: "🐙",
    iconBg: "#f5eefb",
    link: "https://github.com/salesforce",
  },
  {
    title: "Salesforce Developer Blog",
    description: "Latest posts on Agentforce patterns, announcements, and best practices.",
    icon: "✍️",
    iconBg: "#e8f5ec",
    link: "https://developer.salesforce.com/blogs/",
  },
  {
    title: "Agentforce Community Group",
    description: "Connect with other builders in the Salesforce Trailblazer Community.",
    icon: "🌐",
    iconBg: "#e6f9f8",
    link: "https://trailhead.salesforce.com/trailblazer-community/groups",
  },
];
