import { SectionTitle } from "../components";
import { IconTag } from "../components/ui/icons";

const Projects = () => {
  return (
    <section
      id="sect-projects"
      className="p-4 mx-auto border border-red-500 max-w-7xl min-h-dvh"
    >
      <SectionTitle text="Projects" />
      <article
        id="projects-grid"
        className="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 md:grid-cols-3"
      >
        <div id="project-card" className="border border-indigo-500 w-xs h-xs bg-indigo-800/10">
          <IconTag svgId="icon-completed" text="complete" className="border rounded-full bg-gradient-to-r from-emerald-800/35 to-emerald-800/10 border-emerald-400 text-emerald-400"/>
          <IconTag svgId="icon-process" text="in process" className="border rounded-full bg-gradient-to-r from-amber-800/35 to-amber-800/10 border-amber-400 text-amber-400"/>
          <IconTag svgId="icon-coming-soon" text="new" className="border rounded-full bg-gradient-to-r from-rose-800/35 to-rose-800/10 border-rose-400 text-rose-400"/>
        </div>
      </article>
    </section>
  );
};

export default Projects;
