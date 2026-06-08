export const PROJECTS = [
  {
    filename: "reitera.java",
    title: "Reitera",
    description:
      "Spaced repetition flashcard app powered by the FSRS-6 algorithm. Create decks, study smarter and track your learning progress. Built as a TFG project with Angular and Spring Boot.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "TypeScript", "Java"],
    image: "/images/project_reitera.png",
    githubUrl: "https://github.com/theHELDERscrolls/Reitera",
    liveUrl: "https://reitera.vercel.app",
  },
  {
    filename: "bs_v2.tsx",
    title: "Brawl Stats",
    description:
      "Full-stack web app that displays Brawl Stars player and club statistics using the official API.",
    tags: ["React", "TypeScript", "Vite", "Node.js"],
    image: "/images/project_bs_v2.png",
    githubUrl: "https://github.com/theHELDERscrolls/brawl_stats_v2",
  },
  {
    filename: "memex.md",
    title: "Memex",
    description:
      "A terminal REPL that turns an LLM into a personal wiki manager. Ingest sources, writes structured pages, runs incremental audits and generates Anki flashcards.",
    tags: ["TypeScript", "Node.js", "Anthropic API"],
    image: "/images/project_memex.jpg",
    githubUrl: "https://github.com/theHELDERscrolls/memex",
  },
] as const;
