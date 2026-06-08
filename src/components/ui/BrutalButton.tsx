import type { AnchorHTMLAttributes } from "react";
import { Icon } from "./Icon";

interface BrutalButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  iconName?: string;
  iconOnly?: boolean;
  iconOnlyMobile?: boolean;
  size?: "sm" | "md";
}

const brutalBase =
  "inline-flex items-center font-space-grotesk font-bold border-2 border-neutral-900 bg-neutral-100 text-neutral-900 transition-all hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]";

const sizeStyles = {
  sm: {
    base: "text-xs shadow-[2px_2px_0_0_#171717] hover:shadow-[1px_1px_0_0_#171717] active:shadow-none",
    iconOnly: "justify-center p-1",
    iconOnlyMobile: "justify-center p-1 sm:gap-1.5 sm:px-3 sm:py-1.5",
    withText: "gap-1.5 px-3 py-1.5",
    icon: "size-3.5",
  },
  md: {
    base: "text-sm shadow-[4px_4px_0_0_#171717] hover:shadow-[2px_2px_0_0_#171717] active:shadow-none",
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
  ...props
}: BrutalButtonProps) => {
  const s = sizeStyles[size];
  const isIconMobile = iconOnlyMobile ? s.iconOnlyMobile : s.withText;
  const layoutClass = iconOnly ? s.iconOnly : isIconMobile;

  return (
    <a
      className={`${brutalBase} ${s.base} ${layoutClass} ${className ?? ""}`}
      {...props}
    >
      {iconName && <Icon name={iconName} className={s.icon} />}
      {iconOnlyMobile ? (
        <span className="hidden sm:inline">{children}</span>
      ) : (
        children
      )}
    </a>
  );
};
