import type { ProjectProps } from "../../types";

export const myProjects: ProjectProps[] = [
  {
    imgUrl: "src/assets/projects/project_heracles.jpg",
    title: "Heracles",
    description:
      "When I look at the night sky and feel how vast the universe is, I don't feel small. I feel great, because my atoms come from those very stars. Being alive and conscious is the universe's way of knowing itself.",
    tech: ["Unknown"],
    githubURL: "",
    deployURL: "",
    status: "coming-soon",
  },
  {
    imgUrl: "src/assets/projects/project_bs.png",
    title: "Brawl Stats",
    description:
      "Check key stats and data for Brawl Stars with this fan-made tool. Explore brawlers’ performance, compare metrics, and access intuitive visualizations. Perfect for players and enthusiasts looking to improve their strategy.",
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
];

/* 
  Coming soon default phrase:
  "We live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people. And yet, we have dared to contemplate the origin of time, to explore the nature of matter, and to question our place in the cosmos"
*/
