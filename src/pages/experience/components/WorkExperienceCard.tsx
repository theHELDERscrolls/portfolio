import { Svg } from "@/components";
import { IconLabel } from "@/components/ui/IconLabel";
import type { ExperienceItem } from "@/types";
import { formatExperienceDates } from "@/utils";

interface WorkExperienceCardProps {
  workExperience: ExperienceItem;
}

export const WorkExperienceCard = ({
  workExperience,
}: WorkExperienceCardProps) => {
  const { range, isCurrent } = formatExperienceDates(
    workExperience.startDate,
    workExperience.endDate
  );

  return (
    <article className="flex flex-col w-full max-w-2xl gap-4 p-4 transition-all duration-300 ease-in-out ring-2 shadow ring-indigo-500/10 bg-indigo-800/10 rounded-xl hover:translate-x-2 hover:shadow-[0_0_5px_#7C86FF]">
      {/* Fecha y localización */}
      <header className="flex items-start justify-between gap-2 text-xs text-neutral-400">
        <Svg
          iconId="icon-suitcase"
          className="h-8 text-indigo-400 q-full max-w-8 "
        />

        <div className="flex flex-col items-end justify-center gap-1">
          {isCurrent ? (
            <IconLabel
              iconId="icon-sparkles"
              className="flex items-center gap-2 px-2 py-0.5 border border-emerald-400/10 bg-emerald-800/10 rounded-xl text-emerald-300 "
              iconClassName="w-4 h-4 text-emerald-300"
            >
              Current
            </IconLabel>
          ) : (
            <IconLabel iconId="icon-calendar">
              {range}
            </IconLabel>
          )}

          <IconLabel iconId="icon-location">
            {workExperience.location}
          </IconLabel>
        </div>
      </header>

      {/* Título y organización */}
      <section>
        <h3 className="font-bold sm:text-xl text-neutral-100 font-orbitron">
          {workExperience.title}
        </h3>

        <p className="font-mono font-semibold text-amber-400">
          {workExperience.organization}
        </p>
      </section>

      {/* Descripción */}
      {workExperience.description && (
        <p className="text-balance">{workExperience.description}</p>
      )}
    </article>
  );
};
