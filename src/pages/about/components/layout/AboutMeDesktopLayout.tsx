import { useGitHubUser } from "@/hooks";
import { SocialProfile } from "../shared";
import { AboutMeText } from "../shared/AboutMeText";

export const AboutMeDesktopLayout = () => {
  const { gitHubUser } = useGitHubUser("theHELDERscrolls");

  return (
    <div className="grid w-full h-full grid-cols-6 grid-rows-4 gap-4 p-5">
      <div className="flex flex-col items-start justify-between col-span-3 row-span-2 gap-5 p-5">
        <AboutMeText />
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1 bg-amber-500/10 rounded-xl">
        Estadística de GITHUB
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1 bg-amber-500/10 rounded-xl">
        Estadística de GITHUB
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1 bg-amber-500/10 rounded-xl">
        Estadística de GITHUB
      </div>

      <div className="flex items-center justify-center col-span-3 row-span-2 bg-emerald-500/10 rounded-xl">
        Stack tecnológico
      </div>

      <div className="flex items-center justify-center col-span-2 row-span-2 bg-red-500/10 rounded-xl">
        Inspiraciones
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1 bg-cyan-500/10 rounded-xl">
        <SocialProfile
          color="cyan"
          href="www.linkedin.com/in/heldermvr"
          iconId="icon-linkedin"
          social="linkedin"
        />
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1 bg-lime-500/10 rounded-xl">
        <SocialProfile
          color="lime"
          href="https://open.spotify.com/user/3lvr"
          iconId="icon-spotify"
          social="spotify"
        />
      </div>

      <div className="flex items-center justify-center col-span-2 row-span-1 bg-slate-500/10 rounded-xl">
        Github last cosas
      </div>

      <div className="flex items-center justify-center col-span-1 row-span-1">
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
