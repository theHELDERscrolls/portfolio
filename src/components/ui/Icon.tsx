interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className = "size-6" }: IconProps) => (
  <svg className={className} aria-hidden="true">
    <use href={`/icons.svg#${name}`} />
  </svg>
);
