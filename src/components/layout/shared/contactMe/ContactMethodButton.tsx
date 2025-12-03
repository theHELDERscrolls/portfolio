import { Svg } from "@/components/ui";
import { useMediaQuery } from "@/hooks";

interface ContactMethodButtonProps {
  groupHover?: string;
  href: string;
  iconClassName?: string;
  iconId: string;
  text: string;
}

export const ContactMethodButton = ({
  groupHover = "group-hover:w-15",
  href,
  iconClassName = "w-12.5 h-12.5",
  iconId,
  text,
}: ContactMethodButtonProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 transition-all ease-in-out border cursor-pointer text-neutral-400 hover:text-neutral-200 bg-indigo-300/10 hover:bg-indigo-300/20 border-indigo-50/10 hover:border-indigo-50/20 hover:shadow-[0_0_5px_#A3B3FF] rounded-xl backdrop-blur-xs group"
    >
      <Svg className={iconClassName} iconId={iconId} />
      {isDesktop && (
        <p
          className={`w-0 ml-0 overflow-hidden font-semibold transition-all duration-300 ease-in-out opacity-0 group-hover:ml-2 whitespace-nowrap group-hover:opacity-100 ${groupHover}`}
        >
          {text.toUpperCase()}
        </p>
      )}
    </a>
  );
};
