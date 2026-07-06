import introPhoto from "../assets/introPhoto.jpeg";
import pizzaStoreImg from "../assets/pizza-store.png";
import randomJokesImg from "../assets/random-jokes.png";
import propertyPulseImg from "../assets/PropertyPulse.png";

export const site = {
  name: "Gözde Gürler",
  initials: "GG",
  tagline: "Product-Minded Technologist",
  taglineAreas: ["EdTech", "E-commerce", "AI & Automation"],
  summary:
    "Product-oriented Full Stack Developer with experience in EdTech and e-commerce platforms, combining software development, automation, data analysis, and product thinking to improve user experience and operational efficiency. I build internal tools, AI-assisted workflows, dashboards, landing pages, and data-driven product improvements.",
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
    period: "Feb 2025 – Present",
    location: "Istanbul",
    bullets: [
      "Contributing to NextGen, an EdTech platform supporting end-to-end learning journeys — lessons, live classes, practice modules, progress tracking, and project-based learning.",
      "Building n8n automation workflows for internal processes, AI-driven content generation, student follow-up, and learning quality operations.",
      "Designing AI-assisted personalized learning workflows using student performance data, lesson scores, and cohort benchmarks.",
      "Creating SQL-based data pipelines and dashboards that turn learning data into actionable insights for education and operations teams.",
      "Led the iyzico payment integration and own landing page development with a focus on performance and conversion.",
      "Integrating external tools and APIs — Typeform, Pipedrive, Slack — to improve communication flows, CRM visibility, and operational efficiency.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "SQL", "n8n", "Looker Studio"],
  },
  {
    company: "Intertech (Information Technology and Marketing Inc.)",
    role: "Software Engineer",
    period: "May 2023 – Dec 2024",
    location: "Istanbul",
    bullets: [
      "Developed and improved features for a Legal Tracking System used by enterprise clients.",
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
      "Node.js",
      ".NET",
      "REST APIs",
    ],
  },
];

export const projects = [
  {
    title: "Pizza DOT",
    description:
      "An order form project for a pizza shop built around a 'create your own pizza' concept, with multi-step form validation and end-to-end tests.",
    image: pizzaStoreImg,
    tech: ["React", "Router", "Axios", "Cypress"],
    repo: "https://github.com/GzdeGrlr/pizza-store-form",
    live: "https://pizza-store-form-neoa8gjs0-gzdegrlr.vercel.app/",
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
  {
    title: "Property Pulse",
    description:
      "A real estate platform built with Next.js and MongoDB, offering dynamic property listings, secure authentication with NextAuth, and a user-friendly interface.",
    image: propertyPulseImg,
    tech: ["Next.js", "NextAuth", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/GzdeGrlr/PropertyPulse",
    live: "https://property-pulse-taupe-two.vercel.app/",
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
