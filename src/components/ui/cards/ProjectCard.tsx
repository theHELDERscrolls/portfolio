import { IconTag, Tag } from "../icons";
import { ButtonRefIcon } from "../buttons";
import type { ProjectProps } from "../../../types";
import { getProjectStatus } from "../../../utils";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const projectStatus = getProjectStatus(project);
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      ref={ref}
      id="project-card"
      className={`group relative flex flex-col justify-between h-auto max-w-xs border rounded-2xl transition-all duration-300
        ${inView ? "animate-fade-in" : "opacity-0"}
        ${
          isComingSoon
            ? "pointer-events-none grayscale border-neutral-700 bg-neutral-900"
            : "border-indigo-900 bg-indigo-800/10 hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:-translate-y-1"
        }
      `}
    >
      <IconTag {...projectStatus} />

      <img
        src={project.imgUrl}
        alt={`${project.title} web image`}
        className="object-cover w-full h-40 aspect-video rounded-t-2xl"
      />

      <section
        id="project-info"
        className="flex flex-col justify-between h-full p-4"
      >
        <div className="flex flex-col justify-between h-full gap-2">
          <h3 className="text-xl font-bold text-white transition-all font-orbitron group-hover:text-amber-400">
            {project.title}
          </h3>
          <p className="text-white text-balance">{project.description}</p>
          <div
            id="project-tech"
            className="flex items-center justify-end gap-2"
          >
            {project.tech?.slice(0, 3).map((t) => (
              <Tag key={t} text={t} />
            ))}
            {project.tech && project.tech.length > 3 && (
              <Tag text={`+${project.tech.length - 3}`} />
            )}
          </div>
        </div>
        <nav
          id="link-project"
          className="flex items-center justify-around gap-4 mt-4"
        >
          <ButtonRefIcon
            href={project.githubURL}
            idName="icon-github"
            size={16}
            text="Github"
            className="w-full px-2 py-1 transition-all duration-300 border text-neutral-400 border-neutral-400 rounded-xl bg-neutral-950 hover:border-white hover:text-white hover:bg-neutral-800/25"
          />
          <ButtonRefIcon
            href={project.deployURL}
            idName="icon-web-link"
            size={16}
            text="Website"
            className="w-full px-2 py-1 text-indigo-500 transition-all duration-300 border border-indigo-500 rounded-xl bg-indigo-950 hover:border-indigo-300 hover:text-indigo-300 hover:bg-indigo-800/25"
          />
        </nav>
      </section>

      {isComingSoon && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/70 backdrop-blur-xs animate-fade-in">
          <span className="text-sm font-semibold text-white font-orbitron">
            🔒 Coming Soon
          </span>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
