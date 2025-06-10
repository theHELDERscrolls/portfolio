interface ButtonRefIconProps {
  href: string;
  idName: string;
  size?: number;
  className?: string;
  text?: string; // Added optional text prop
}

const ButtonRefIcon = ({
  href,
  idName,
  size = 32,
  className,
  text,
}: ButtonRefIconProps) => {
  const isMailLink = href?.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(!isMailLink && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`flex justify-center items-center gap-2 ${className}`}
    >
      <svg width={size} height={size} role="img" aria-hidden="true">
        <use href={`/spriteSheet.svg#${idName}`} />
      </svg>
      {text && <span>{text}</span>}
    </a>
  );
};

export default ButtonRefIcon;
