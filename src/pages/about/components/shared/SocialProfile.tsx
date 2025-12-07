import { Svg } from "@/components";

type SocialColor = "neutral" | "lime" | "cyan";

interface SocialProfileProps {
  href: string;
  iconId: string;
  social: string;
  color?: SocialColor;
}

const bgClasses: Record<SocialColor, string> = {
  neutral: "bg-neutral-500/10",
  lime: "bg-lime-500/10",
  cyan: "bg-cyan-500/10",
};

const iconBgClasses: Record<SocialColor, string> = {
  neutral: "text-neutral-600 group-hover:text-neutral-800",
  lime: "text-lime-600 group-hover:text-lime-800",
  cyan: "text-cyan-600 group-hover:text-cyan-800",
};

const textClasses: Record<SocialColor, string> = {
  neutral: "text-neutral-300",
  lime: "text-lime-300",
  cyan: "text-cyan-300",
};

export const SocialProfile = ({
  href,
  iconId,
  social,
  color = "neutral",
}: SocialProfileProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-between w-full h-full gap-3 p-3 overflow-hidden transition-all duration-300 ease-in-out rounded-xl group ${bgClasses[color]} hover:backdrop-blur-xs`}
    >
      {/* Icono superior derecha */}
      <Svg
        iconId="icon-share"
        className={`absolute w-8 h-8 transition-all duration-300 ease-in-out translate-x-50 right-3 top-3 ${textClasses[color]} group-hover:translate-0`}
      />

      {/* Icono grande de fondo */}
      <Svg
        iconId={iconId}
        className={`-z-10 absolute transition-all duration-300 ease-in-out h-50 w-50 -right-10 -bottom-10 ${iconBgClasses[color]}`}
      />

      <div
        className={`absolute flex flex-col items-start justify-center font-extrabold transition-all duration-300 ease-in-out font-orbitron bottom-3 left-3 ${textClasses[color]} -translate-x-100 group-hover:translate-0`}
      >
        <h3>Check out my</h3>
        <h3 className="text-3xl">{social.toUpperCase()}!</h3>
      </div>
    </a>
  );
};
