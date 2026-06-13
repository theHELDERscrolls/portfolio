import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icon";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
] as const;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language)?.code ?? "en";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="p-2 border-2 border-neutral-900 bg-neutral-100 text-neutral-900 shadow-[3px_3px_0_0_#171717] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#171717] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none cursor-pointer"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Icon name="globe" className="size-5" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-[7rem] border-2 border-neutral-900 bg-neutral-100 shadow-[4px_4px_0_0_#171717] z-50"
        >
          {LANGUAGES.map(({ code, label }) => {
            const isActive = current === code;
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full gap-3 px-4 py-2 text-sm font-bold font-bricolage-grotesque text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="w-2 h-2 shrink-0 bg-lime-300 border border-neutral-900" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
