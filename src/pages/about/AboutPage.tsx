import { SectionTitle } from "@/components";
import { useEffect } from "react";
import gsap from "gsap";
import {
  AboutMeText,
  GitHubLanguages,
  GitHubStats,
  InspirationCard,
  SocialProfile,
} from "./components";
import { useGitHubUserStats } from "@/hooks";

const AboutPage = () => {
  const { stats } = useGitHubUserStats("theHELDERscrolls");

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

      <div className="w-full h-full gap-4 p-2 space-y-4 sm:p-5 columns-1 lg:columns-2">
        <div className="flex flex-col items-start justify-between gap-2 p-2 sm:gap-5 sm:p-5">
          <AboutMeText />
        </div>

        <div className="flex items-center justify-center break-inside-avoid rounded-xl">
          <InspirationCard />
        </div>

        {stats && (
          <div className="flex flex-wrap items-center justify-center gap-4 break-inside-avoid rounded-xl">
            <GitHubStats gitHubUserStats={stats} />
            <GitHubLanguages topLanguages={stats.topLanguages} />
          </div>
        )}

        <div className="flex items-center justify-center break-inside-avoid bg-emerald-500/10 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nulla voluptatem deserunt ipsam iste unde vel eius cum dicta, nihil
          eveniet minima perspiciatis. Impedit corporis neque error deleniti
          quas officia?
        </div>

        <div className="flex items-center justify-center gap-4 break-inside-avoid rounded-xl">
          <SocialProfile
            color="cyan"
            href="www.linkedin.com/in/heldermvr"
            iconId="icon-linkedin"
            social="linkedin"
          />

          <SocialProfile
            color="lime"
            href="https://open.spotify.com/user/3lvr"
            iconId="icon-spotify"
            social="spotify"
          />

          <SocialProfile
            color="neutral"
            href={stats ? stats.profileUrl : ""}
            iconId="icon-github"
            social="github"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
