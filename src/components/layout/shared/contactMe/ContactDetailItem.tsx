import { Svg } from "@/components/ui";

type ContactDetailItemColor = "amber" | "lime" | "sky" | "rose";

const colorClasses: Record<ContactDetailItemColor, string> = {
  amber: "text-amber-400",
  lime: "text-lime-400",
  sky: "text-sky-400",
  rose: "text-rose-400",
};

interface ContactDetailItemProps {
  color: ContactDetailItemColor;
  iconId: string;
  title: string;
  value: string;
}

export const ContactDetailItem = ({
  color,
  iconId,
  title,
  value,
}: ContactDetailItemProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl">
      <Svg className={`w-5 h-5 ${colorClasses[color]}`} iconId={iconId} />
      <div className="text-xs flex flex-col items-start justify-center gap-1">
        <p className="font-bold">{title}</p>
        <p className="font-semibold text-neutral-400">{value}</p>
      </div>
    </div>
  );
};
