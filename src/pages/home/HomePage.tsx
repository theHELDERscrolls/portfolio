import { MorphLogo, QuoteCard, SocialNav } from "./components";
import { useEffect } from "react";
import gsap from "gsap";

export const HomePage = () => {
  useEffect(() => {
    const hasSeenLoaderScreen =
      sessionStorage.getItem("hasSeenLoaderScreen") === "true";

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (!hasSeenLoaderScreen) {
      tl.fromTo(
        "#home-page",
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "+=6.5"
      );
    }
  }, []);

  return (
    <section
      id="home-page"
      className="flex flex-col items-center justify-center w-full h-screen gap-5 bg-transparent sm:gap-20"
    >
      <MorphLogo />
      <QuoteCard />
      <SocialNav />
    </section>
  );
};
