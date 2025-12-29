import { useGitHubUser } from "@/hooks";
import { InspirationCard, SocialProfile } from "../shared";
import { AboutMeText } from "../shared/AboutMeText";

export const AboutMeDesktopLayout = () => {
  const { gitHubUser } = useGitHubUser("theHELDERscrolls");

  return (
    <div className="w-full h-full gap-4 p-2 space-y-4 sm:p-5 columns-1 md:columns-2">
      <div className="flex flex-col items-start justify-between gap-2 p-2 sm:gap-5 sm:p-5">
        <AboutMeText />
      </div>

      <div className="flex items-center justify-center break-inside-avoid rounded-xl">
        <InspirationCard />
      </div>

      <div className="flex items-center justify-center break-inside-avoid bg-slate-500/10 rounded-xl">
        Github stats
      </div>

      <div className="flex items-center justify-center break-inside-avoid bg-emerald-500/10 rounded-xl">
        Stack tecnológico
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
          href={gitHubUser?.url ?? ""}
          iconId="icon-github"
          social="github"
        />
      </div>
    </div>
  );
};
