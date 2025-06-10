import type { ProjectProps } from "../types";
import type { IconTagProps } from "../types/iconTag";

const getProjectStatus = (project: ProjectProps): IconTagProps => {
  switch (project.status) {
    case "completed":
      return {
        svgId: "icon-completed",
        text: "completed",
        className:
          "absolute border rounded-full right-1 top-1 bg-gradient-to-r from-lime-900 to-lime-800/75 border-lime-400 text-lime-400",
      };
    case "new":
      return {
        svgId: "icon-new",
        text: "new",
        className:
          "absolute border rounded-full right-1 top-1 bg-gradient-to-r from-rose-900 to-rose-800/75 border-rose-400 text-rose-400",
      };
    case "in-process":
      return {
        svgId: "icon-process",
        text: "in process",
        className:
          "absolute border rounded-full right-1 top-1 bg-gradient-to-r from-yellow-900 to-yellow-800/75 border-yellow-400 text-yellow-400",
      };
    case "coming-soon":
      return {
        svgId: "icon-coming-soon",
        text: "coming soon",
        className:
          "absolute border rounded-full right-1 top-1 bg-gradient-to-r from-neutral-900 to-neutral-800/75 border-neutral-400 text-neutral-400",
      };
  }
};

export default getProjectStatus;
