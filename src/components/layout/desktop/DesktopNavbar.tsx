import { NavLink } from "react-router-dom";
import { navLinks } from "../shared";
import { useEffect } from "react";
import gsap from "gsap";

export const DesktopNavbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      "nav",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 },
      "+=6",
    );
  }, []);

  return (
    <nav className="flex h-full w-full items-center justify-center">
      <ul className="ml-5 flex h-fit w-fit flex-col items-center justify-center hover:bg-indigo-300/10 hover:backdrop-blur-md hover:shadow-lg hover:shadow-indigo-950 gap-10 rounded-full p-2 transition-all duration-300 ease-in-out">
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
                      className={`absolute left-full top-1/2 ml-4 -translate-y-1/2 -translate-x-1 whitespace-nowrap px-2 py-1 text-xs font-bold opacity-0 transition-all ease-in-out duration-300 pointer-events-none rounded-full group-hover:opacity-100 group-hover:translate-x-0 
                      ${
                        isActive
                          ? `bg-gradient-to-r from-indigo-700 to-transparent text-indigo-100`
                          : `bg-gradient-to-r from-neutral-700 to-transparent text-neutral-100`
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
  );
};
