import type { ProjectProps } from "../../types";

export const myProjects: ProjectProps[] = [
  {
    imgUrl: "/assets/projects/project_heracles.jpg",
    title: "Heracles",
    description:
      "When I look at the night sky and feel how vast the universe is, I don't feel small. I feel great, because my atoms come from those very stars. Being alive and conscious is the universe's way of knowing itself.",
    tech: ["Unknown"],
    githubURL: "",
    deployURL: "",
    status: "coming-soon",
  },
  {
    imgUrl: "/assets/projects/project_bs_v2.png",
    title: "Brawl Stats V2",
    description:
      "Check key stats and data for Brawl Stars with this fan-made tool. Explore brawlers’ performance, compare metrics, and access intuitive visualizations. Perfect for players and enthusiasts looking to improve their strategy.",
    tech: ["Rest API", "React", "TypeScript", "ExpressJS", "NodeJS"],
    githubURL: "https://github.com/theHELDERscrolls/brawl_stats_v2",
    deployURL: "https://brawl-stats-v2.vercel.app/",
    status: "completed",
  },
  {
    imgUrl: "/assets/projects/project_back.jpg",
    title: "Lokalqy App (backend)",
    description:
      "Backend of LokaLqy App, developed with Node.js + Express + TypeScript using MongoDB and Cloudinary. It enables the management of rental properties and vehicles, including user and role control, payments, and im age uploads.",
    tech: ["NodeJS", "ExpressJS", "MongoDB", "TypeScript"],
    githubURL: "https://github.com/theHELDERscrolls/lokalqy-app",
    deployURL: null,
    status: "in-process",
  },
];
