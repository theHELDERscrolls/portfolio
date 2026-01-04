import { projects } from "@/data";
import { SectionTitle } from "@/components";
import { GitHubLastRepoCard, ProjectCard } from "./components";

const ProjectsPage = () => {
  return (
    <section
      id="experience-page"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
    >
      <SectionTitle title="Projects" />

      <div className="flex flex-col items-center justify-center gap-2 mb-4">
        <p className="text-lg text-neutral-400">The latest thing I've been working on:</p>
        <GitHubLastRepoCard />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 w-full">
        {/* Contenedor de los proyectos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {projects.map((project) => (
            // Tarjeta del proyecto
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
