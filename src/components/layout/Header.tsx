import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon, LanguageSwitcher, Logo } from "../ui";

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const NAV_LINKS = [
    { href: "#hero", label: t("nav.home") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const CLOSE_DURATION = 200;

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, CLOSE_DURATION);
  };

  return (
    <div className="sticky top-0 z-50 w-full font-bold font-bricolage-grotesque text-neutral-900">
      <header className="relative z-10 flex items-center justify-between gap-8 px-4 py-2 md:justify-start bg-neutral-400 border-b-3 border-b-neutral-900">
        <Logo />

        <ul className="items-center hidden gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative flex flex-col overflow-hidden group"
              >
                <span className="transition-all ease-in-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute transition-all ease-in-out translate-y-full group-hover:translate-0">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="items-center hidden gap-3 ml-auto md:flex">
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 border-3 border-neutral-900 bg-neutral-100 text-neutral-900 shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
            onClick={isOpen ? closeMenu : openMenu}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
          >
            <Icon name={isOpen ? "x" : "menu"} className="size-5" />
          </button>
        </div>
      </header>

      {isOpen && (
        <ul
          className={`${isClosing ? "animate-menu-slide-out" : "animate-menu-slide"} absolute z-0 top-full left-0 w-full flex flex-col gap-2 p-4 md:hidden bg-neutral-400 border-b-3 border-neutral-900`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="flex w-full px-5 py-3 font-bold text-sm border-3 border-neutral-900 bg-neutral-100 text-neutral-900 shadow-[6px_6px_0_0_#000] transition-all hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[3px_3px_0_0_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
