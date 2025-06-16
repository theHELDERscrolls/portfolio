import { SectionTitle } from "../components";
import ProjectCard from "../components/ui/cards/ProjectCard";
import { myProjects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="sect-projects"
      className="p-4 mx-auto mb-10 max-w-7xl min-h-screen"
    >
      <SectionTitle text="PROJECTS" />
      <article
        id="projects-grid"
        className={`grid gap-6 mt-8 justify-items-center ${
          myProjects.length > 1
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-flow-col"
        }`}
      >
        {myProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
