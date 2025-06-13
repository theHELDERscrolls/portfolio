import { IconTag, Tag } from "../icons";
import type { workExperienceProps } from "../../../types";
import { useInView } from "react-intersection-observer";

interface WorkCardProps {
  work: workExperienceProps;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="work-card"
      className={`group flex flex-col w-full gap-2 p-4 text-white border border-indigo-900 bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:scale-101 transition-all duration-300 ${
        inView ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <header className="flex items-start justify-between">
        {work.isCurrent ? (
          <IconTag
            svgId="icon-current"
            text="current"
            className="border rounded-full bg-gradient-to-r from-emerald-800/35 to-emerald-800/10 border-emerald-400 text-emerald-400"
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col items-end">
          <IconTag
            svgId="icon-calendar"
            text={`${work.startDate} - ${work.endDate}`}
            className="text-neutral-400"
          />
          <IconTag
            svgId="icon-location"
            text={`${work.location}`}
            className="text-neutral-400"
          />
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold transition-transform font-orbitron">
            {work.role}
          </h3>
          <h4 className="font-mono text-lg transition-transform text-amber-400">
            {work.company}
          </h4>
          <p className="transition-transform text-balance">
            {work.description}
          </p>
        </div>
        <footer className="flex flex-wrap items-center justify-end gap-2 mt-4">
          {work.tech?.slice(0, 3).map((t) => (
            <Tag key={t} text={t} />
          ))}
          {work.tech && work.tech.length > 3 && (
            <Tag text={`+${work.tech.length - 3}`} />
          )}
        </footer>
      </div>
    </section>
  );
};

export default WorkCard;
