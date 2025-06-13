import { useInView } from "react-intersection-observer";
import { ButtonRefIcon, IconTag } from "../ui";

const buttonRefIconClassName =
  "p-2 transition-all duration-300 border rounded-xl text-neutral-500 border-neutral-500 bg-neutral-800/10 hover:bg-indigo-800/25 hover:border-indigo-500 hover:text-white hover:scale-105";

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <footer
      ref={ref}
      className={`${
        inView ? "animate-up-slide-in" : "opacity-0"
      } flex flex-col sm:flex-row gap-4 items-center justify-between p-4 mx-auto border-t mt-10 border-indigo-500 max-w-7xl`}
    >
      <div id="footer-left-up" className="flex flex-col gap-2">
        <article
          id="footer-logo"
          className="flex items-center justify-center sm:justify-start "
        >
          <img
            src="/assets/HR_logo_light.svg"
            alt="Helder Ruiz logo"
            className="w-10 drop-shadow-[0_1px_2px_rgba(99,102,241,0.7)]"
          />
          <span className="inline-block w-px h-6 mx-2 bg-indigo-500 shadow-[0_0_10px_1px_#6366f1] animate-pulse"></span>
          <p className="text-white font-orbitron">Helder Ruiz</p>
        </article>
        <article
          id="footer-social"
          className="flex items-center gap-2 text-white justify-start"
        >
          <p>Follow me:</p>
          <div className="flex items-center justify-center gap-4">
            <ButtonRefIcon
              href="https://github.com/theHELDERscrolls"
              idName="icon-github"
              size={25}
              className={buttonRefIconClassName}
            />
            <ButtonRefIcon
              href="www.linkedin.com/in/heldermvr"
              idName="icon-linkedin"
              size={25}
              className={buttonRefIconClassName}
            />
            <ButtonRefIcon
              href="https://www.instagram.com/heldermvr/?igsh=MW56ejgwOWl0aWNhcQ%3D%3D#"
              idName="icon-instagram"
              size={25}
              className={buttonRefIconClassName}
            />
          </div>
        </article>
      </div>
      <div
        id="footer-thanks"
        className="font-mono text-neutral-400 flex flex-col justify-center items-center"
      >
        <p className="text-center sm:text-end">
          © 2025 Helder Ruiz. All rights reserved.
        </p>
        <p className="flex justify-center items-center gap-1">
          <IconTag svgId="icon-new" className="text-rose-500 animate-pulse" />
          <span>quotes from</span>
          <a href="https://zenquotes.io/" className="ml-1 text-amber-400">
            ZenQuotes.io
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
