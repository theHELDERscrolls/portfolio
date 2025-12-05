import { useEffect, useState } from "react";
import { navLinks, WeatherWidget } from "../shared";
import { NavLink } from "react-router-dom";

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <button onClick={toggleMenu} className="relative z-50">
        <svg aria-hidden className="w-8 h-8">
          <use
            xlinkHref={`/spriteSheet.svg#${open ? "icon-cross" : "icon-menu"}`}
          />
        </svg>
      </button>

      <nav
        className={`z-49 fixed top-0 right-0 h-screen w-full bg-neutral-950/95 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="relative flex flex-col items-start justify-center h-full gap-6 p-10 text-xl">
          {navLinks.map(({ key, iconId, title }) => {
            const to = key === "home" ? "/" : key;

            return (
              <NavLink
                key={key}
                to={to}
                replace
                className={({ isActive }) =>
                  `flex cursor-pointer items-center gap-6 text-2xl font-orbitron font-bold transition-all duration-300 ease-in-out ${
                    isActive ? "text-indigo-400" : "text-neutral-200"
                  }`
                }
                onClick={toggleMenu}
              >
                <svg aria-hidden="true" className="w-6 h-6 ">
                  <use xlinkHref={`spriteSheet.svg#${iconId}`} />
                </svg>
                <span>{title.toUpperCase()}</span>
              </NavLink>
            );
          })}
        </ul>
        
        <div className="absolute z-50 pb-10 -translate-x-1/2 border-b border-indigo-400/50 max-w-2xs top-20 left-1/2">
          <WeatherWidget />
        </div>

        <footer className="absolute z-50 -translate-x-1/2 border-t pt-25 border-indigo-400/50 max-w-2xs bottom-5 left-1/2">
          <p className="font-mono text-xs font-semibold text-center text-neutral-400">Copyright © 2025 HELDER RUIZ</p>
        </footer>
      </nav>
    </>
  );
};
