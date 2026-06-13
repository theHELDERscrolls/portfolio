import { type HTMLAttributes } from "react";
import { Icon } from "./Icon";

interface BrutalButtonProps extends HTMLAttributes<HTMLElement> {
  iconName?: string;
  iconOnly?: boolean;
  iconOnlyMobile?: boolean;
  size?: "sm" | "md";
  selected?: boolean;
  selectedBg?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const buildBase = (selected: boolean, selectedBg: string) =>
  `inline-flex items-center font-space-grotesk font-bold border-3 border-neutral-900 ${selected ? selectedBg : "bg-neutral-100"} text-neutral-900 transition-all hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]`;

const sizeStyles = {
  sm: {
    base: "text-xs shadow-[4px_4px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] active:shadow-none",
    iconOnly: "justify-center p-1",
    iconOnlyMobile: "justify-center p-1 sm:gap-1.5 sm:px-3 sm:py-1.5",
    withText: "gap-1.5 px-3 py-1.5",
    icon: "size-3.5",
  },
  md: {
    base: "text-sm shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] active:shadow-none",
    iconOnly: "justify-center p-3",
    iconOnlyMobile: "justify-center p-3 sm:gap-2 sm:px-5 sm:py-3",
    withText: "gap-2 px-5 py-3",
    icon: "size-6",
  },
};

export const BrutalButton = ({
  iconName,
  iconOnly = false,
  iconOnlyMobile = false,
  size = "md",
  children,
  className,
  href,
  target,
  rel,
  type,
  disabled,
  selected = false,
  selectedBg = "bg-lime-200",
  ...props
}: BrutalButtonProps) => {
  const s = sizeStyles[size];
  const layoutClass = iconOnly
    ? s.iconOnly
    : iconOnlyMobile
      ? s.iconOnlyMobile
      : s.withText;
  const disabledClass = disabled ? "opacity-60 pointer-events-none" : "";
  const fullClass = `${buildBase(selected, selectedBg)} ${s.base} ${layoutClass} ${disabledClass} ${className ?? ""}`;

  const content = (
    <>
      {iconName && <Icon name={iconName} className={s.icon} />}
      {iconOnlyMobile ? (
        <span className="hidden sm:inline">{children}</span>
      ) : (
        children
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={fullClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      className={fullClass}
      {...props}
    >
      {content}
    </button>
  );
};
