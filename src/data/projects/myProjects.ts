import type { ProjectProps } from "../../types";

export const myProjects: ProjectProps[] = [
  {
    imgUrl: "src/assets/projects/project_bs.png",
    title: "Brawl Stats",
    description:
      "A web to explore Brawl Stars characters and view their stats across different maps.",
    tech: ["Rest API", "JavaScript", "CSS", "HTML"],
    githubURL: "https://github.com/theHELDERscrolls/Brawl_Stats",
    deployURL: "https://brawl-stats-fan-made.vercel.app/",
    status: "completed",
  },
  {
    imgUrl: "src/assets/projects/project_skyrimzon.png",
    title: "Skyrimzon",
    description:
      "Skyrimzon: Your medieval fantasy store with the best selection of products inspired by Skyrim. Discover armors, weapons, potions, and more to live your own adventure.",
    tech: ["TypeScript", "React", "Node.js", "GraphQL"],
    githubURL: "https://github.com/theHELDERscrolls/practica_DOM",
    deployURL: "https://skyrimzon.vercel.app/",
    status: "completed",
  },
  {
    imgUrl: "src/assets/projects/project_heracles.jpg",
    title: "Heracles",
    description:
      "A new project is launching soon. Prepare for an interstellar journey as we build something out of this world.",
    tech: ["Unknown"],
    githubURL: "",
    deployURL: "",
    status: "coming-soon",
  },
];
