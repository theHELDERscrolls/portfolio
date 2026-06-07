import type { AnchorHTMLAttributes } from "react";
import { Icon } from "./Icon";

type BrutalButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  iconName?: string;
  iconOnly?: boolean;
};

const brutalBase =
  "inline-flex items-center font-space-grotesk font-bold text-sm border-2 border-neutral-900 bg-neutral-100 text-neutral-900 shadow-[4px_4px_0_0_#171717] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#171717] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

export const BrutalButton = ({
  iconName,
  iconOnly = false,
  children,
  className,
  ...props
}: BrutalButtonProps) => (
  <a
    className={`${brutalBase} ${iconOnly ? "justify-center p-3" : "gap-2 px-5 py-3"} ${className ?? ""}`}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    {children}
  </a>
);
