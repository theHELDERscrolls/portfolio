import type { IconTagProps } from "../../../types/iconTag";

const IconTag = ({
  svgId,
  text,
  className = "",
  width = "w-fit",
}: IconTagProps) => (
  <div
    className={`flex justify-center items-center gap-1 px-2 py-1 rounded text-xs h-7 ${width} ${className}`}
  >
    <svg width={16} height={16} role="img" aria-hidden="true">
      <use href={`/spriteSheet.svg#${svgId}`} />
    </svg>
    <span>{text}</span>
  </div>
);

export default IconTag;
