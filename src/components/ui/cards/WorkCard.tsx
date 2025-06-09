import { IconTag } from "../buttons";
import type { workExperienceProps } from "../../../types";
import { useInView } from "react-intersection-observer";

interface WorkCardProps {
  work: workExperienceProps;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div
      ref={ref}
      id="work-card"
      className={`group flex flex-col w-full gap-2 p-4 text-white border border-indigo-900 bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:scale-101 transition-all duration-300 ${
        inView ? "animate-pop-up" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-between">
        {work.isCurrent ? (
          <IconTag
            svgId="icon-current"
            text="current"
            className="border rounded-full bg-emerald-800/10 border-emerald-400 text-emerald-400"
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
      </div>
      <h3 className="text-2xl transition-transform font-orbitron">
        {work.role}
      </h3>
      <h4 className="font-mono text-lg transition-transform text-amber-400">
        {work.company}
      </h4>
      <p className="transition-transform text-balance">{work.description}</p>
    </div>
  );
};

export default WorkCard;
