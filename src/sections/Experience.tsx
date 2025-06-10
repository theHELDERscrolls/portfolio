import { SectionTitle, WorkCard } from "../components";
import { workList } from "../data";

const Experience = () => {
  return (
    <section id="sect-work-exp" className="p-4 mx-auto max-w-7xl min-h-dvh">
      <SectionTitle text="WORK EXPERIENCE" />
      <article
        id="work-grid"
        className={`grid gap-6 mt-8 justify-items-center ${
          workList.length > 1
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : "grid-flow-col"
        }`}
      >
        {workList.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </article>
    </section>
  );
};

export default Experience;
