import { Svg } from "@/components/ui";

type ContactInfoColor = "amber" | "lime" | "sky" | "rose";

const colorClasses: Record<ContactInfoColor, string> = {
  amber:
    "border-amber-400/10 bg-gradient-to-r from-amber-800/10 to-transparent",
  lime: "border-lime-400/10 bg-gradient-to-r from-lime-800/10 to-transparent",
  sky: "border-sky-400/10 bg-gradient-to-r from-sky-800/10 to-transparent",
  rose: "border-rose-400/10 bg-gradient-to-r from-rose-800/10 to-transparent",
};

const iconColorClasses: Record<ContactInfoColor, string> = {
  amber: "text-amber-400",
  lime: "text-lime-400",
  sky: "text-sky-400",
  rose: "text-rose-400",
};

const barColorClasses: Record<ContactInfoColor, string> = {
  amber: "bg-amber-400",
  lime: "bg-lime-400",
  sky: "bg-sky-400",
  rose: "bg-rose-400",
};

interface ContactInfoCardProps {
  children: React.ReactNode;
  color: ContactInfoColor;
  iconId: string;
  title: string;
}

export const ContactInfoCard = ({
  children,
  color,
  iconId,
  title,
}: ContactInfoCardProps) => {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-5 w-full px-4 py-2 rounded-xl border ${colorClasses[color]}`}
    >
      <div className="flex items-center justify-start gap-2">
        <Svg
          className={`w-10 h-10 ${iconColorClasses[color]}`}
          iconId={iconId}
        />

        <span className={`${barColorClasses[color]} h-8 w-0.5`}></span>

        <h3 className="font-orbitron font-bold">{title}</h3>
      </div>

      <p className="text-neutral-300 font-mono text-balance text-sm sm:text-base">
        {children}
      </p>
    </div>
  );
};
