import { IconLabel } from "@/components";
import type { ProjectStatus } from "@/types";

interface ProjectStatusTagProps {
  status: ProjectStatus;
}

const STATUS_CONFIG: Record<
  ProjectStatus,
  {
    label: string;
    className: string;
    iconClassName: string;
    iconId: string;
  }
> = {
  completed: {
    label: "Completed",
    iconId: "icon-check",
    className:
      "border-emerald-800 bg-gradient-to-r from-emerald-800 to-transparent text-emerald-300",
    iconClassName: "text-emerald-300",
  },
  new: {
    label: "New",
    iconId: "icon-sparkles",
    className:
      "border-rose-800 bg-gradient-to-r from-rose-800 to-transparent text-rose-300",
    iconClassName: "text-rose-300",
  },
  "in-process": {
    label: "In process",
    iconId: "icon-clock",
    className:
      "border-yellow-800 bg-gradient-to-r from-yellow-800 to-transparent text-yellow-300",
    iconClassName: "text-yellow-300",
  },
};

export const ProjectStatusTag = ({ status }: ProjectStatusTagProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <IconLabel
      iconId={config.iconId}
      className={`absolute top-1 right-1 flex items-center gap-2 px-1 py-0.5 text-xs font-bold border-2 rounded-lg ${config.className}`}
      iconClassName={`h-6 w-6 ${config.iconClassName}`}
    >
      {config.label}
    </IconLabel>
  );
};
