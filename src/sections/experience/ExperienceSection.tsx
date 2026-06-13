import { useTranslation } from "react-i18next";
import { EducationCard, WorkCard } from "./components";
import { EDUCATION, WORK_EXPERIENCE } from "./data";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="w-full px-4 py-12 bg-neutral-300 border-t-3 border-neutral-900 md:px-16"
    >
      <div className="flex flex-col gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          {t("experience.title")}
        </h2>

        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            {t("experience.work")}
          </h3>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCE.map((job) => (
              <WorkCard key={job.id} {...job} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            {t("experience.education")}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu) => (
              <EducationCard key={edu.id} {...edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
