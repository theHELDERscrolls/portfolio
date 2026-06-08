import { EducationCard, WorkCard } from "./components";
import { EDUCATION, WORK_EXPERIENCE } from "./data/experience.data";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full px-4 py-12 bg-neutral-300 border-t-3 border-neutral-900 md:px-16"
    >
      <div className="flex flex-col gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          Experience
        </h2>

        {/* Work */}
        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            Work
          </h3>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCE.map((job) => (
              <WorkCard key={`${job.company}-${job.title}`} {...job} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu) => (
              <EducationCard
                key={`${edu.institution}-${edu.degree}`}
                {...edu}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
