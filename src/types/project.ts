export type ProjectStatus = "completed" | "new" | "coming-soon" | "in-process";

export interface ProjectProps {
  imgUrl: string;
  title: string;
  description: string;
  tech: string[];
  githubURL: string;
  deployURL: string;
  status: ProjectStatus;
}
