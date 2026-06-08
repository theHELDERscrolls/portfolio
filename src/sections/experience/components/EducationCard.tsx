import { CurrentMarker } from "./CurrentMarker";

interface EducationCardProps {
  degree: string;
  institution: string;
  period?: string;
  logoBg?: string;
  current?: boolean;
}

export const EducationCard = ({
  degree,
  institution,
  period,
  logoBg,
  current = false,
}: EducationCardProps) => (
  <div className="relative flex flex-col gap-2 p-6 border-2 bg-neutral-100 border-neutral-900 shadow-[4px_4px_0_0_#171717]">
    {current && <CurrentMarker />}
    {logoBg && (
      <img
        src={logoBg}
        alt=""
        aria-hidden="true"
        className="absolute top-0 object-contain w-40 h-40 pointer-events-none select-none right-5 sm:top-1/2 sm:-translate-y-1/2 opacity-20"
      />
    )}
    <p className="font-extrabold leading-snug font-bricolage-grotesque text-neutral-900">
      {degree}
    </p>
    <p className="text-sm font-semibold font-space-grotesk text-neutral-600">
      {institution}
    </p>
    {!current && period && (
      <span className="pt-2 mt-auto text-xs font-space-grotesk text-neutral-500">
        {period}
      </span>
    )}
  </div>
);
