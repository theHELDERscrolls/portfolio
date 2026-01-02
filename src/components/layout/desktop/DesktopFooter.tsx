import { SocialButton, Svg } from "@/components/ui";

const USED_APIS = [
  { name: "Ip API", url: "https://ipapi.co/", iconId: "icon-location" },
  {
    name: "Open Weather",
    url: "https://openweathermap.org/",
    iconId: "icon-cloud",
  },
  {
    name: "Quotes API",
    url: "https://api-ninjas.com/api/quotes",
    iconId: "icon-quote",
  },
];

export const DesktopFooter = () => {
  const date = new Date;

  return (
    <footer className="flex items-center justify-between w-full p-5 mt-5 border-t border-indigo-400/50">
      <div className="flex flex-col items-start self-start justify-center gap-3">
        <div className="flex items-center justify-center gap-1">
          <Svg iconId="icon-hr" className="w-6 h-6" />
          <span className="h-6 w-0.5 bg-indigo-400 rounded-xl shadow-md shadow-indigo-100 animate-pulse"></span>
          <p className="font-bold font-orbitron">HELDER RUIZ</p>
        </div>

        <p className="font-mono text-xs text-center text-neutral-400">
          Copyright © {date.getFullYear()} HELDER RUIZ
        </p>

        <div className="flex gap-3">
          <SocialButton
            groupHover="group-hover:w-14"
            href="https://github.com/theHELDERscrolls"
            iconClassName="w-6 h-6"
            iconId="icon-github"
            text="GitHub"
          />

          <SocialButton
            groupHover="group-hover:w-17"
            href="https://www.linkedin.com/in/heldermvr/"
            iconClassName="w-6 h-6"
            iconId="icon-linkedin"
            text="LinkedIn"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="font-semibold font-orbitron text-amber-400">
          More info about APIs:
        </h3>
        <ul className="flex flex-col gap-3">
          {USED_APIS.map((api, i) => (
            <li key={i}>
              <a
                href={api.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 px-2 py-1 text-indigo-200 hover:text-indigo-400 border border-indigo-50/10 bg-indigo-500/10 hover:shadow-[0_0_5px_#7C86FF] hover:-translate-y-0.5 rounded-xl transition-all ease-in-out duration-300"
              >
                <Svg iconId={api.iconId} />
                {api.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
