import { Divider, SectionTitle } from "@/components";
import { Experience } from "@/data";
import { sortExperienceByDate } from "@/utils";
import gsap from "gsap";
import { useEffect } from "react";
import { AcademicExperienceCard, WorkExperienceCard } from "./components";

const ExperiencePage = () => {
  const sortedExperience = sortExperienceByDate(Experience);

  useEffect(() => {
    const hasSeenLoaderScreen =
      sessionStorage.getItem("hasSeenLoaderScreen") === "true";

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (!hasSeenLoaderScreen) {
      tl.fromTo(
        "#home-page",
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "+=6.5"
      );
    }
  }, []);

  return (
    <section
      id="experience-page"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
    >
      <SectionTitle title="Experience" />

      <div className="relative flex flex-col items-center justify-center py-20">
        {/* Timeline lateral */}
        <div
          className="absolute top-0 left-6 w-0.5 h-full rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #7C86FF 10%, #7C86FF 90%, transparent 100%)",
          }}
        />

        {sortedExperience.map((exp, i) => {
          const prevExp = sortedExperience[i - 1];
          const showDivider = prevExp && prevExp.field !== exp.field;

          return (
            <div key={`${exp.title}-${exp.startDate}`} className="w-full">
              {showDivider && <Divider />}

              <div className="relative flex w-full p-2 pl-12">
                {/* Punto */}
                <span className="absolute w-3 h-3 -translate-y-1/2 bg-indigo-400 rounded-full left-[19px] top-1/2" />

                {/* Card */}
                {exp.type === "work" ? (
                  <WorkExperienceCard workExperience={exp} />
                ) : (
                  <AcademicExperienceCard academicExperience={exp} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencePage;
