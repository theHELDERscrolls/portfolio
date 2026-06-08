import { useState } from "react";
import { CurrentMarker } from "./CurrentMarker";

const BADGE_THRESHOLD = 4;

interface WorkCardProps {
  title: string;
  company: string;
  period?: string;
  description: string;
  tags: readonly string[];
  logoBg?: string;
  current?: boolean;
}

export const WorkCard = ({
  title,
  company,
  period,
  description,
  tags,
  logoBg,
  current = false,
}: WorkCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex flex-col gap-4 p-6 border-2 bg-neutral-100 border-neutral-900 shadow-[4px_4px_0_0_#171717]">
      {current && <CurrentMarker />}

      {logoBg && (
        <img
          src={logoBg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 object-contain w-56 h-56 pointer-events-none select-none right-3 sm:top-1/2 sm:-translate-y-1/2 opacity-20"
        />
      )}

      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xl font-extrabold font-bricolage-grotesque text-neutral-900">
            {title}
          </p>
          <p className="text-sm font-extrabold font-space-grotesk text-neutral-600">
            {company}
          </p>
        </div>
        {!current && period && (
          <span className="text-sm font-space-grotesk text-neutral-500 shrink-0 sm:pt-1">
            {period}
          </span>
        )}
      </div>

      <p className="text-sm font-medium leading-relaxed text-balance font-space-grotesk text-neutral-700">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={tag}
            className={`px-2 py-1 text-xs font-semibold border-2 font-space-grotesk bg-stone-900 text-stone-100 border-stone-900 shadow-[2px_2px_0_0_#f5f5f4] ${index >= BADGE_THRESHOLD && !expanded ? "hidden sm:inline-flex" : ""}`}
          >
            {tag}
          </span>
        ))}
        {tags.length > BADGE_THRESHOLD && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="px-2 py-1 text-xs font-semibold transition-colors border-2 sm:hidden font-space-grotesk text-neutral-700 border-neutral-600 hover:bg-neutral-200"
          >
            +{tags.length - BADGE_THRESHOLD} more
          </button>
        )}
        {tags.length > BADGE_THRESHOLD && expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="px-2 py-1 text-xs font-semibold transition-colors border-2 sm:hidden font-space-grotesk text-neutral-700 border-neutral-600 hover:bg-neutral-200"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};
