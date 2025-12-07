import { SectionTitle } from "@/components";
import { useEffect } from "react";
import gsap from "gsap";
import { AboutMeDesktopLayout } from "./components";

const AboutPage = () => {
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
      id="about-me-page"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
    >
      <SectionTitle title="Aboute me" />

      <AboutMeDesktopLayout />
    </section>
  );
};

export default AboutPage;
