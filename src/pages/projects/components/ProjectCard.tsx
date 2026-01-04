import { IconLabel, Svg } from "@/components";
import { techStack } from "@/data";
import type { ProjectItem } from "@/types";
import { ProjectStatusTag } from "./ProjectStatusTag";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const techMap = Object.fromEntries(techStack.map((t) => [t.id, t]));

  return (
    <div
      key={project.title}
      className="flex relative min-h-[550px] flex-col max-w-xs items-center justify-between border-2 overflow-hidden border-indigo-500/10 bg-indigo-800/10 shadow rounded-xl group hover:shadow-[0_0_10px_#7C86FF] hover:border-indigo-500 hover:bg-indigo-800/20  hover:-translate-y-1 transition-all ease-in-out duration-300"
    >
      {/* Project status */}
      <ProjectStatusTag status={project.status} />

      <img
        src={project.imgUrl}
        alt={`${project.title} image`}
        loading="lazy"
        className="object-cover w-full h-40"
      />

      <main className="flex flex-col items-start justify-center flex-1 gap-2 p-2">
        {/* Título */}
        <div className="flex flex-col flex-1 h-full gap-2">
          <h3 className="text-lg font-bold transition-all duration-300 ease-in-out font-orbitron sm:text-neutral-100 group-hover:text-amber-400 text-amber-400">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-sm text-balance">{project.description}</p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2 my-4">
          <h4 className="w-full font-mono border-b-2 text-neutral-400 border-b-neutral-400/25">
            Used tech:
          </h4>
          {/* TEch stack */}
          <div className="flex flex-wrap items-center justify-start w-full gap-2">
            {project.tech.map((techId) => {
              const tech = techMap[techId];
              if (!tech) return null;

              return (
                <Svg
                  key={`${project.title}-${techId}`}
                  iconId={tech.symbolId}
                  sprite="/techSprite.svg"
                  className="w-8 h-8 p-1 ring-2 bg-neutral-800/25 ring-neutral-500/25 rounded-xl"
                  aria-label={tech.name}
                />
              );
            })}
          </div>
        </div>

        {/* Links de despliegue y repo */}
        <div className="flex items-center justify-center w-full gap-2">
          {project.deployURL && (
            <a
              href={project.deployURL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <IconLabel
                iconId="icon-time"
                className="flex items-center justify-center w-full px-2 py-1 font-bold transition-all duration-300 ease-in-out border-2 rounded-lg border-lime-500/25 bg-lime-800/25 text-lime-300 hover:bg-lime-800/50 hover:border-lime-500/50"
                iconClassName="h-6 w-6 text-lime-300"
              >
                Website
              </IconLabel>
            </a>
          )}

          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <IconLabel
              iconId="icon-github"
              className="flex items-center justify-center w-full px-2 py-1 font-bold transition-all duration-300 ease-in-out border-2 rounded-lg border-neutral-500/50 bg-neutral-800/50 text-neutral-300 hover:bg-neutral-800/90 hover:border-neutral-500/90"
              iconClassName="h-6 w-6 text-neutral-300"
            >
              GitHub
            </IconLabel>
          </a>
        </div>
      </main>
    </div>
  );
};
