import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks";
import { CurrentMarker } from "./CurrentMarker";

interface EducationCardProps {
  id: string;
  institution: string;
  period?: string;
  logoBg?: string;
  current?: boolean;
  animationDelay?: number;
}

export const EducationCard = ({
  id,
  institution,
  period,
  logoBg,
  current = false,
  animationDelay = 0,
}: EducationCardProps) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-2 p-6 border-3 overflow-hidden bg-neutral-100 border-neutral-900 shadow-[6px_6px_0_0_#000] ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {current && <CurrentMarker />}
      {logoBg && (
        <img
          src={logoBg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 object-contain w-40 h-40 pointer-events-none select-none right-3 sm:top-1/2 sm:-translate-y-1/2 opacity-20"
        />
      )}
      <p className="font-extrabold leading-snug font-bricolage-grotesque text-neutral-900">
        {t(`experience.education_items.${id}.degree`)}
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
};
