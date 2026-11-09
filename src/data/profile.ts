export type Link = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  summary: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Eric Sims",
  role: "Software engineer & founder",
  location: "Austin, Texas",
  headline: {
    before: "I build web products that help small businesses ",
    accent: "look and work bigger.",
  },
  lede:
    "I'm Eric — a software engineer and founder in Austin, Texas. I take products from the first sketch to the deploy, front end to back, with React and TypeScript.",
  availability: "Open to full-time engineering roles & select freelance work",
  // Update this if you'd rather be reached somewhere else.
  email: "hello@esims.dev",
  links: [
    { label: "GitHub", href: "https://github.com/esimscode" },
    { label: "X", href: "https://x.com/iameazysims" },
    { label: "Live Cultr", href: "https://livecultr.co" },
  ] satisfies Link[],
  about: [
    "I run Live Cultr, a small studio where I build marketing sites, internal tools and AI-assisted workflows for local service businesses. Being small means I own the whole build: design decisions, the front end, the API behind it, and the pipeline that ships it.",
    "Most of my work lives in TypeScript. I care about software that makes a measurable difference to the person using it — a faster booking flow, a report someone actually reads, a site that finally looks like the business behind it.",
    "My background is part engineering, part marketing. That combination is why I keep coming back to small businesses: they need good software and they need it explained in plain language.",
  ],
  facts: [
    { label: "Based in", value: "Austin, Texas" },
    { label: "Focus", value: "Full-stack web, front-end craft" },
    { label: "Currently", value: "Founder at Live Cultr" },
    { label: "Day-to-day", value: "React, TypeScript, Node" },
    { label: "Availability", value: "Full-time or freelance" },
  ],
  projects: [
    {
      name: "Switchback",
      summary: "A private, AI-assisted career operating system for tech professionals.",
      description:
        "Product work across the whole app: job tracking, AI-generated career guidance and a private, account-scoped data model.",
      tags: ["Product", "TypeScript", "AI"],
      href: "https://www.switchback.careers",
      year: "2026",
    },
    {
      name: "Siteforge",
      summary: "Marketing front end, CMS and job management for local service businesses.",
      description:
        "The system behind the studio's client sites — editable marketing pages, a CMS, and a back office for scheduled work.",
      tags: ["TypeScript", "CMS", "Full stack"],
      href: "https://livecultr-siteforge.vercel.app/",
      year: "2026",
    },
    {
      name: "Live Cultr",
      summary: "The studio site for the design and development practice I run.",
      description:
        "Brand, copy and build for a studio that helps small businesses look like the biggest name in their market.",
      tags: ["TypeScript", "Brand", "Marketing"],
      href: "https://livecultr.co",
      year: "2025",
    },
    {
      name: "Lead Cultr Security Program",
      summary: "A working information security program for a B2B SaaS, not a template.",
      description:
        "NIST, OWASP and GDPR/CCPA/TCPA controls written for engineers, with Terraform examples and policy-as-code in Rego.",
      tags: ["Security", "GRC", "Terraform", "Rego"],
      href: "https://esims.dev/leadcultr-security-program/",
      year: "2026",
    },
    {
      name: "Connect Music",
      summary: "Marketing site for a music distribution, publishing and artist-funding company.",
      description:
        "Built in Next.js: the capital and ownership story, animated growth stats, an artist roster with streaming numbers, the how-it-works sequence and the application flow.",
      tags: ["Next.js", "Front end", "Responsive"],
      href: "https://www.connectmusic.com/",
      year: "",
    },
  ] satisfies Project[],
  stack: [
    { label: "Product & UI", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML & CSS"] },
    { label: "Backend & data", items: ["Node.js", "Python", "REST APIs", "Sanity CMS", "SQL"] },
    { label: "AI & automation", items: ["OpenAI API", "Agent workflows", "Prompt pipelines", "Python scripts"] },
    { label: "Ship & operate", items: ["Git & GitHub", "GitHub Actions", "Vercel", "Terraform", "OPA / Rego"] },
  ] satisfies StackGroup[],
  contact: {
    title: "Have something that needs to ship?",
    lede:
      "I'm open to full-time engineering roles and a small number of freelance projects. If you need someone who can own the build end to end, I'd like to hear about it.",
  },
} as const;

export type Profile = typeof profile;
