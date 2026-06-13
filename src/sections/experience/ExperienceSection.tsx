import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrutalButton } from "@/components";
import { EducationCard, StackTab, WorkCard } from "./components";
import { EDUCATION, WORK_EXPERIENCE } from "./data";

type ExperienceTab = "work" | "education" | "stack";

const TABS: { id: ExperienceTab; icon: string; selectedBg: string }[] = [
  { id: "work", icon: "briefcase", selectedBg: "bg-sky-200" },
  { id: "education", icon: "school", selectedBg: "bg-violet-200" },
  { id: "stack", icon: "code", selectedBg: "bg-amber-200" },
];

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ExperienceTab>("work");

  return (
    <section
      id="experience"
      className="w-full px-4 py-12 bg-neutral-300 border-t-3 border-neutral-900 md:px-16"
    >
      <div className="flex flex-col gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          {t("experience.title")}
        </h2>

        <div className="flex gap-3" role="tablist">
          {TABS.map(({ id, icon, selectedBg }) => (
            <BrutalButton
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
              iconName={icon}
              iconOnlyMobile
              selected={activeTab === id}
              selectedBg={selectedBg}
              className="justify-center flex-1"
            >
              {t(`experience.tabs.${id}`)}
            </BrutalButton>
          ))}
        </div>

        <div role="tabpanel">
          {activeTab === "work" && (
            <div className="flex flex-col gap-4">
              {WORK_EXPERIENCE.map((job) => (
                <WorkCard key={job.id} {...job} />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {EDUCATION.map((edu) => (
                <EducationCard key={edu.id} {...edu} />
              ))}
            </div>
          )}

          {activeTab === "stack" && <StackTab />}
        </div>
      </div>
    </section>
  );
};
