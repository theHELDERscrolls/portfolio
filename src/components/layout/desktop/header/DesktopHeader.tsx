import { useEffect } from "react";
import { LogoDesktopHeader } from "./LogoDesktopHeader";
import gsap from "gsap";

export const DesktopHeader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      "header",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 },
      "+=6.5"
    );
  }, []);

  return (
    <header className="fixed top-0 flex items-center justify-between w-full px-5 py-2 bg-indigo-300/10 backdrop-blur-xs">
      <LogoDesktopHeader />
      <div className="flex items-center justify-center border">
        <svg aria-hidden width={25} height={25}>
          <use xlinkHref="/spriteSheet.svg#icon-about" />
        </svg>
        <p>12:43, Jaén</p>
      </div>
    </header>
  );
};
