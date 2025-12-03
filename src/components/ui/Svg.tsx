interface SvgProps {
  className?: string;
  iconId: string;
}

export const Svg = ({ className = "w-6 h-6", iconId }: SvgProps) => {
  return (
    <svg aria-hidden className={className}>
      <use xlinkHref={`/spriteSheet.svg#${iconId}`} />
    </svg>
  );
};
