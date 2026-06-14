import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icon";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
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
        className="p-2 border-3 border-neutral-900 bg-neutral-100 text-neutral-900 shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Icon name="globe" className="size-5" />
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-1 min-w-28 border-3 border-neutral-900 bg-neutral-100 shadow-[6px_6px_0_0_#000] z-50">
          {LANGUAGES.map(({ code, label }) => {
            const isActive = current === code;
            return (
              <li key={code} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full gap-3 px-4 py-2 text-sm font-bold transition-colors cursor-pointer font-bricolage-grotesque text-neutral-900 hover:bg-neutral-200"
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="w-2 h-2 border shrink-0 bg-lime-300 border-neutral-900" />
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
