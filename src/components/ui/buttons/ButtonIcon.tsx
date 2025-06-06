interface ButtonIconProps {
  idName: string;
  className: string;
}

const ButtonIcon = ({ idName, className }: ButtonIconProps) => {
  return (
    <svg
      width={50}
      height={50}
      className={className}
      role="img"
      aria-hidden="true"
    >
      <use href={`/spriteSheet.svg#${idName}`} />
    </svg>
  );
};

export default ButtonIcon;
