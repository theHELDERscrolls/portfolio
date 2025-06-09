import { SectionTitle, WorkCard } from "../components";
import { workList } from "../data";

const Experience = () => {
  return (
    <section id="sect-work-exp" className="mx-auto max-w-7xl min-h-dvh">
      <SectionTitle text="Work Experience" />
      <article
        id="work-grid"
        className="grid grid-cols-1 gap-6 mt-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3"
      >
        {workList.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </article>
    </section>
  );
};

export default Experience;
