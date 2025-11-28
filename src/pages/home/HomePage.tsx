import { MorphLogo, QuoteCard, SocialNav } from "@/components";
import gsap from "gsap";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    const hasSeenLoaderScreen =
      sessionStorage.getItem("hasSeenLoaderScreen") === "true";

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (!hasSeenLoaderScreen) {
      tl.fromTo("#home-page", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "+=6.5");
    }
  }, []);

  return (
    <section id="home-page" className="flex flex-col items-center justify-center w-full sm:gap-10 gap-5 bg-transparent h-dvh">
      <MorphLogo />
      <QuoteCard />
      <SocialNav />
    </section>
  );
};
