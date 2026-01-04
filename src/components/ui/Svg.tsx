interface SvgProps {
  className?: string;
  sprite?: string;
  iconId: string;
}

export const Svg = ({
  className = "w-6 h-6",
  sprite = "/spriteSheet.svg",
  iconId,
}: SvgProps) => {
  return (
    <svg aria-hidden className={className}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};
