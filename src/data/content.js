import introPhoto from "../assets/introPhoto.jpeg";
import aiLearningAssistantImg from "../assets/AI-Learning-Assistant.png";
import randomJokesImg from "../assets/random-jokes.png";
import fitloopImg from "../assets/FitloopAdPerformance.png";
import vardiyaKazancImg from "../assets/VardiyaKazanc.jpg";

export const site = {
  name: "Gözde Gürler",
  initials: "GG",
  tagline: "Product, Engineering & Operations",
  taglineAreas: ["AI Solutions", "Process Improvement", "E-commerce, Fintech & EdTech"],
  summary:
    "I turn business needs and user problems into practical digital solutions. My experience spans e-commerce operations at eBay and ÇiçekSepeti, banking software at Intertech, and product development, test automation, and AI learning workflows at Workintech. Across these roles, I’ve connected the people who need a solution with the technology that makes it work—from understanding requirements to building, testing, and improving features. Today, I bring that perspective to product management and hands-on development, including an AI analytics agent and an iOS app published on the App Store.",
  photo: introPhoto,
  location: "Istanbul, Türkiye",
};

export const links = {
  github: "https://github.com/GzdeGrlr",
  linkedin: "https://www.linkedin.com/in/gozde-gurler/",
  email: "gzde.gurler@gmail.com",
};

export const navItems = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    company: "Workintech",
    role: "Full Stack Developer",
    period: "Feb 2025 – July 2026",
    location: "Istanbul",
    bullets: [
      "Contributed to NextGen, an EdTech platform supporting end-to-end learning journeys — lessons, live classes, practice modules, progress tracking, and project-based learning.",
      "Built n8n automation workflows for internal processes, AI-driven content generation, student follow-up, and learning quality operations.",
      "Designed AI-assisted personalized learning workflows using student performance data, lesson scores, and cohort benchmarks.",
      "Created SQL-based data pipelines and dashboards that turned learning data into actionable insights for education and operations teams.",
      "Led the iyzico payment integration for course purchases.",
      "Integrated external tools and APIs — Typeform, Pipedrive, Slack — to improve communication flows, CRM visibility, and operational efficiency.",
      "Set up and implemented Playwright-based UAT automation tests for critical user journeys, improving release readiness and helping detect regressions earlier in the development process.",
      "Took ownership of landing page development, focusing on performance, responsiveness, user experience, and conversion-oriented improvements.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "SQL", "n8n", "Looker Studio", "Playwright"],
  },
  {
    company: "Intertech (Information Technology and Marketing Inc.)",
    role: "Software Engineer",
    period: "May 2023 – Dec 2024",
    location: "Istanbul",
    bullets: [
      "Developed and improved features for a Legal Tracking System used by bank employees to manage legal cases.",
      "Collaborated with stakeholders to translate business requirements into scalable technical solutions.",
      "Improved system performance through SQL query optimization and backend enhancements.",
      "Participated in Agile development cycles including sprint planning and delivery.",
    ],
    tech: [".NET", "Entity Framework", "React", "SQL Server", "OOP", "Docker", "Elastic Search", "TFS"],
  },
  {
    company: "GittiGidiyor.com / eBay",
    role: "Listing Quality & Integration Specialist",
    period: "Jun 2021 – Aug 2022",
    location: "Istanbul",
    bullets: [
      "Worked cross-functionally with product, engineering, and business teams to improve seller and customer experience in a large-scale marketplace.",
      "Contributed to improving seller experience by identifying and prioritizing recurring issues.",
      "Led stakeholder communication and resolved seller-side integration and listing issues.",
      "Contributed to process improvements by analyzing user feedback and recurring platform problems.",
    ],
    tech: ["Stakeholder Management", "Marketplace Operations"],
  },
  {
    company: "CicekSepeti.com",
    role: "Business Development, Quality & Audit Assistant",
    period: "Oct 2020 – Jun 2021",
    location: "Istanbul",
    bullets: [
      "Detected filter and product-related errors to fix on the website.",
      "Worked closely with the Loraflora.com Mexico team, helping them resolve product troubles.",
      "Mentored newly-hired teammates as part of The Buddy Program.",
    ],
    tech: ["Quality Assurance", "Process Improvement"],
  },
];

export const skillGroups = [
  {
    title: "Product",
    items: [
      "Product Development",
      "Feature Prioritization",
      "User Journey Analysis",
      "Conversion Optimization",
      "Stakeholder Management",
      "Agile / Scrum",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "LLM-Powered Features",
      "Claude API & Tool Calling",
      "LLM Evals",
      "Prompt Engineering",
      "n8n",
      "Zapier",
      "Claude Code",
      "Windsurf",
      "Codex",
    ],
  },
  {
    title: "Data",
    items: [
      "SQL (MySQL, SQL Server)",
      "Data Analysis",
      "KPI Tracking",
      "Looker Studio",
      "Power BI",
      "QlikSense",
      "A/B Testing",
    ],
  },
  {
    title: "Engineering",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native / Expo",
      "Node.js",
      ".NET",
      "REST APIs",
      "Playwright (E2E / UAT)",
      "Unit Testing (Jest, Vitest)",
    ],
  },
];

export const projects = [
  {
    title: "Fitloop Ad Performance",
    description:
      "A marketing team asks the same ad questions every day, plus many one-off ones. I split them: a dashboard answers the daily questions and an AI analyst answers the rest, both from the same metrics, so the numbers always match. When the team keeps asking the agent something, it moves onto the dashboard. Every number is checked by 167 tests and an eval set, so the team can trust what the agent says.",
    image: fitloopImg,
    tech: ["Next.js", "TypeScript", "LLM Agent", "Claude API", "Tool Calling"],
    repo: "https://github.com/GzdeGrlr/fitloop-ad-performance",
    live: "https://fitloop-ad-performance.vercel.app",
    liveLabel: "Live demo",
  },
  {
    title: "Vardiya Kazanç",
    description:
      "Couriers rarely know what they actually earn per hour once fuel and other costs come out. This iOS app tracks shifts, deliveries, tips and expenses and shows real net earnings. Data stays on the phone for privacy, and the business model is a free version with ads plus a one-time Premium instead of a subscription.",
    image: vardiyaKazancImg,
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "StoreKit"],
    live: "https://apps.apple.com/tr/app/vardiya-kazan%C3%A7/id6809516757",
    liveLabel: "App Store",
  },
  {
    title: "Personalized Learning Assistant",
    description:
      "An AI-powered learning assistant that analyzes student performance data to generate personalized study plans and recommendations, supporting data-driven learning workflows.",
    image: aiLearningAssistantImg,
    tech: ["Claude Artifact", "Data Analysis", "Workflow", "Automation"],
    live: "https://claude.ai/public/artifacts/56c31e5a-74ae-40b6-8180-6c7dd4e11a6c",
    liveLabel: "View demo",
  },
  {
    title: "Give it a laugh!",
    description:
      "A random-jokes app built with async Redux and a public jokes API — laugh for a moment and save the jokes you loved.",
    image: randomJokesImg,
    tech: ["React", "Redux", "Router", "Axios"],
    repo: "https://github.com/GzdeGrlr/give-it-a-laugh",
    live: "https://give-it-a-laugh.vercel.app/",
  },
];

export const education = [
  {
    school: "Boğaziçi University",
    degree: "B.A. in Philosophy",
    period: "2014 – 2020",
  },
  {
    school: "Istanbul University",
    degree: "Associate Degree in Computer Programming",
    period: "2022 – 2024",
  },
  {
    school: "Workintech",
    degree: "Full Stack Web Development Program",
    period: "2022 – 2023",
  },
];
