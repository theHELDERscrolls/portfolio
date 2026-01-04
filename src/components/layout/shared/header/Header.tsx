import { LogoHeader } from "./LogoHeader";
import { useEffect } from "react";
import { useMediaQuery } from "@/hooks";
import { WeatherWidget } from "./WeatherWidget";
import gsap from "gsap";
import { MobileNavbar } from "../../mobile";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const hasSeenLoaderScreen =
      sessionStorage.getItem("hasSeenLoaderScreen") === "true";

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (!hasSeenLoaderScreen) {
      tl.fromTo(
        "header",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
        "+=6.5"
      );
    }
  }, []);

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2 backdrop-blur-xs">
      <LogoHeader />
      {isDesktop ? <WeatherWidget /> : <MobileNavbar />}
    </header>
  );
};
