import { Logo } from "../ui";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center w-full gap-8 px-4 py-2 font-bold border-b-3 bg-neutral-400 border-b-neutral-900 text-neutral-900 font-bricolage-grotesque">
      <Logo />

      <ul className="flex items-center justify-center gap-8">
        <li>
          <a
            href="#hero"
            className="relative flex flex-col overflow-hidden group"
          >
            <span className="transition-all ease-in-out group-hover:-translate-y-full">
              Home
            </span>
            <span className="absolute transition-all ease-in-out translate-y-full group-hover:translate-0">
              Home
            </span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="relative flex flex-col overflow-hidden group"
          >
            <span className="transition-all ease-in-out group-hover:-translate-y-full">
              Experience
            </span>
            <span className="absolute transition-all ease-in-out translate-y-full group-hover:translate-0">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative flex flex-col overflow-hidden group"
          >
            <span className="transition-all ease-in-out group-hover:-translate-y-full">
              Projects
            </span>
            <span className="absolute transition-all ease-in-out translate-y-full group-hover:translate-0">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative flex flex-col overflow-hidden group"
          >
            <span className="transition-all ease-in-out group-hover:-translate-y-full">
              Contact
            </span>
            <span className="absolute transition-all ease-in-out translate-y-full group-hover:translate-0">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </header>
  );
};
