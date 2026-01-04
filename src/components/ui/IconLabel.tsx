import { Svg } from "@/components";

interface IconLabelProps {
  iconId: string;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export const IconLabel = ({
  iconId,
  children,
  className,
  iconClassName = "w-4 h-4 text-neutral-400",
}: IconLabelProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Svg iconId={iconId} className={iconClassName} />
      <span>{children}</span>
    </div>
  );
};
