interface ButtonIconProps {
  idName: string;
  className: string;
}

const ButtonIcon = ({ idName, className }: ButtonIconProps) => {
  return (
    <svg
      width={32}
      height={32}
      className={className}
      role="img"
      aria-hidden="true"
    >
      <use href={`/spriteSheet.svg#${idName}`} />
    </svg>
  );
};

export default ButtonIcon;
