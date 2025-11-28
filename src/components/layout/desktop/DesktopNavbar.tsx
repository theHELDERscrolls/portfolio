import { NavLink } from "react-router-dom";
import { navLinks } from "../shared";
import { useEffect } from "react";
import gsap from "gsap";

export const DesktopNavbar = () => {
  useEffect(() => {
    const hasSeenLoaderScreen =
      sessionStorage.getItem("hasSeenLoaderScreen") === "true";

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (!hasSeenLoaderScreen) {
      tl.fromTo(
        "nav",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 },
        "+=6.5"
      );
    }
  }, []);

  return (
    <aside className="fixed top-0 left-0 z-50 h-dvh">
      <nav className="flex items-center justify-center w-full h-full">
        <ul className="flex flex-col items-center justify-center gap-10 p-2 ml-5 transition-all duration-300 ease-in-out h-fit w-fit">
          {navLinks.map(({ key, iconId, title }) => {
            const to = key === "home" ? "/" : key;
            return (
              <div
                key={key}
                className="relative flex items-center justify-center"
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `group relative flex cursor-pointer items-center transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-indigo-400"
                        : "text-neutral-400 hover:text-neutral-100"
                    }`
                  }
                  replace
                >
                  {({ isActive }) => (
                    <>
                      <svg aria-hidden="true" width={25} height={25}>
                        <use xlinkHref={`spriteSheet.svg#${iconId}`} />
                      </svg>

                      <span
                        className={`absolute left-full top-1/2 ml-2 -translate-y-1/2 -translate-x-1 whitespace-nowrap px-2 py-1 text-xs font-bold opacity-0 transition-all ease-in-out duration-300 pointer-events-none rounded-xl group-hover:opacity-100 group-hover:translate-x-0 
                      ${
                        isActive
                          ? `border border-indigo-400/25 bg-indigo-800/50 text-indigo-100`
                          : `border border-neutral-400/25 bg-neutral-700/50 text-neutral-100`
                      }`}
                      >
                        {title.toUpperCase()}
                      </span>
                    </>
                  )}
                </NavLink>
              </div>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
