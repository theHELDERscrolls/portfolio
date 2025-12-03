import { useMediaQuery } from "@/hooks";

export const SocialNav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex items-center justify-center gap-5 mt-5 sm:mt-0">
      {/* <div className="relative flex items-center justify-center p-2 transition-all ease-in-out border cursor-pointer text-neutral-400 hover:text-neutral-200 bg-amber-300/10 hover:bg-amber-300/20 border-amber-50/10 hover:border-amber-50/20 hover:shadow-[0_0_5px_#F0B100] backdrop-blur-xs rounded-xl group">
        <svg aria-hidden className="w-8 h-8">
          <use xlinkHref="/spriteSheet.svg#icon-download" />
        </svg>

        {isDesktop && (
          <p className="w-0 ml-0 overflow-hidden font-semibold transition-all duration-300 ease-in-out opacity-0 group-hover:ml-2 whitespace-nowrap group-hover:opacity-100 group-hover:w-27">
            Download CV
          </p>
        )}
      </div> */}

      <a
        href="https://github.com/theHELDERscrolls"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 transition-all ease-in-out border cursor-pointer text-neutral-400 hover:text-neutral-200 bg-indigo-300/10 hover:bg-indigo-300/20 border-indigo-50/10 hover:border-indigo-50/20 hover:shadow-[0_0_5px_#A3B3FF] rounded-xl backdrop-blur-xs group"
      >
        <svg aria-hidden className="w-8 h-8">
          <use xlinkHref="/spriteSheet.svg#icon-github" />
        </svg>

        {isDesktop && (
          <p className="w-0 ml-0 overflow-hidden font-semibold transition-all duration-300 ease-in-out opacity-0 group-hover:ml-2 whitespace-nowrap group-hover:opacity-100 group-hover:w-14">
            GitHub
          </p>
        )}
      </a>

      <a
        href="https://www.linkedin.com/in/heldermvr/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 transition-all ease-in-out border cursor-pointer text-neutral-400 hover:text-neutral-200 bg-indigo-300/10 hover:bg-indigo-300/20 border-indigo-50/10 hover:border-indigo-50/20 hover:shadow-[0_0_5px_#A3B3FF] rounded-xl backdrop-blur-xs group"
      >
        <svg aria-hidden className="w-8 h-8">
          <use xlinkHref="/spriteSheet.svg#icon-linkedin" />
        </svg>
        {isDesktop && (
          <p className="w-0 ml-0 overflow-hidden font-semibold transition-all duration-300 ease-in-out opacity-0 group-hover:ml-2 whitespace-nowrap group-hover:opacity-100 group-hover:w-17">
            LinkedIn
          </p>
        )}
      </a>

      <a
        href="#contact"
        className="flex items-center justify-center p-2 transition-all ease-in-out border cursor-pointer text-neutral-400 hover:text-neutral-200 bg-indigo-300/10 hover:bg-indigo-300/20 border-indigo-50/10 hover:border-indigo-50/20 hover:shadow-[0_0_5px_#A3B3FF] rounded-xl backdrop-blur-xs group"
      >
        <svg aria-hidden className="w-8 h-8">
          <use xlinkHref="/spriteSheet.svg#icon-email" />
        </svg>
        {isDesktop && (
          <p className="w-0 ml-0 overflow-hidden font-semibold transition-all duration-300 ease-in-out opacity-0 group-hover:ml-2 whitespace-nowrap group-hover:opacity-100 group-hover:w-22">
            Contact me
          </p>
        )}
      </a>
    </div>
  );
};
