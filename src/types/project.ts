import type { techStack } from "@/data";

type TechId = (typeof techStack)[number]["id"];

export type ProjectStatus = "completed" | "new" | "in-process";

export type ProjectItem = {
  imgUrl: string;
  title: string;
  description: string;
  tech: TechId[];
  githubURL: string;
  deployURL: string | null;
  status: ProjectStatus;
};
