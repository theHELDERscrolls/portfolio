import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    imgUrl: "/assets/projects/project_bs_v2.png",
    title: "Brawl Stats V2",
    description:
      "Check key stats and data for Brawl Stars with this fan-made tool. Explore brawlers’ performance, compare metrics, and access intuitive visualizations. Perfect for players and enthusiasts looking to improve their strategy.",
    tech: ["express", "nodejs", "react", "tailwindcss", "typescript"],
    githubURL: "https://github.com/theHELDERscrolls/brawl_stats_v2",
    deployURL: "https://brawl-stats-v2.vercel.app/",
    status: "completed",
  },
  {
    imgUrl: "/assets/projects/project_back.jpg",
    title: "Lokalqy App (backend)",
    description:
      "Backend of LokaLqy App, developed with Node.js + Express + TypeScript using MongoDB and Cloudinary. It enables the management of rental properties and vehicles, including user and role control, payments, and im age uploads.",
    tech: ["express", "mongodb", "nodejs", "typescript"],
    githubURL: "https://github.com/theHELDERscrolls/lokalqy-app",
    deployURL: null,
    status: "in-process",
  },
];
