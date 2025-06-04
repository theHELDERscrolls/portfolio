interface ButtonRefIconProps {
  href?: string; // ❗ Cambiar a obligatoria si tenemos creado el ButtonIcon
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
        width={32}
        height={32}
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
