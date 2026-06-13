import { ProjectCard } from "./components";
import { PROJECTS } from "./data";

export const PorjectSection = () => {
  return (
    <section
      id="projects"
      className="flex items-center border-t-3 border-neutral-900 justify-center w-full min-h-[var(--section-min-height)] bg-neutral-100 px-4 md:px-16 py-12"
    >
      <div className="flex flex-col w-full gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.filename} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
