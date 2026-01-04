import { Svg } from "@/components";
import type { ExperienceItem } from "@/types";
import { formatExperienceDates, getExperienceProgress } from "@/utils";

interface AcademicExperienceCardProps {
  academicExperience: ExperienceItem;
}

export const AcademicExperienceCard = ({
  academicExperience,
}: AcademicExperienceCardProps) => {
  const { isCurrent } = formatExperienceDates(
    academicExperience.startDate,
    academicExperience.endDate
  );

  const progress = isCurrent
    ? getExperienceProgress(
        academicExperience.startDate,
        academicExperience.endDate
      )
    : 100;

  const isCompleted = !isCurrent || progress === 100;

  const colorClasses = isCompleted
    ? {
        ring: "ring-lime-500/10",
        bg: "bg-lime-800/10 hover:shadow-[0_0_5px_#9AE600]",
        text: "text-lime-400",
        border: "border-lime-800",
        bar: "bg-lime-400",
      }
    : {
        ring: "ring-amber-500/10",
        bg: "bg-amber-800/10 hover:shadow-[0_0_5px_#FFB900]",
        text: "text-amber-400",
        loadingText: "text-amber-800",
        border: "border-amber-800",
        bar: "bg-amber-800",
      };

  return (
    <article
      className={`flex flex-col w-full max-w-2xl gap-2 p-4 ring-2 rounded-xl transition-all ease-in-out duration-300 hover:translate-x-2 ${colorClasses.ring} ${colorClasses.bg}`}
    >
      <div className="flex items-center gap-4">
        <Svg
          iconId="icon-academic-cap"
          className={`w-full h-8 max-w-8 ${colorClasses.text}`}
        />

        <h3
          className={`text-xs font-bold font-orbitron sm:text-base ${colorClasses.text}`}
        >
          {academicExperience.title}
        </h3>
      </div>

      {!isCompleted && (
        <>
          <p className={`font-mono text-xs font-semibold ${colorClasses.loadingText}`}>
            Studying... [{progress}%]
          </p>

          <div
            className={`w-full h-2 overflow-hidden border rounded-full ${colorClasses.border}`}
          >
            <div
              className={`h-full ${colorClasses.bar}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </article>
  );
};
