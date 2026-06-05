export type ProjectStatus = "completed" | "new" | "in-process";

export type ProjectItem = {
  imgUrl: string;
  title: string;
  description: string;
  tech: string[];
  githubURL: string;
  deployURL: string | null;
  status: ProjectStatus;
};
