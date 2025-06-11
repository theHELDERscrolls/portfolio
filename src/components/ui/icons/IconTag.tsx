import type { IconTagProps } from "../../../types/iconTag";

const IconTag = ({
  svgId,
  text,
  className = "",
  width = "w-fit",
  size = 16,
}: IconTagProps) => (
  <div
    className={`flex justify-center items-center gap-1 px-2 py-1 rounded text-xs h-7 ${width} ${className}`}
  >
    <svg width={size} height={size} role="img" aria-hidden="true">
      <use href={`/spriteSheet.svg#${svgId}`} />
    </svg>
    {text && <span>{text}</span>}
  </div>
);

export default IconTag;
