interface ButtonRefIconProps {
  href: string; 
  idName: string;
  className?: string;
}

const ButtonRefIcon = ({
  href,
  idName,
  className,
}: ButtonRefIconProps) => {
  const isMailLink = href?.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(!isMailLink && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    > 
      <svg
        width={50}
        height={50}
        className={className}
        role="img"
        aria-hidden="true"
      >
        <use href={`/spriteSheet.svg#${idName}`}/>
      </svg>
    </a>
  );
};

export default ButtonRefIcon;
