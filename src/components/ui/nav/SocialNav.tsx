import { ButtonRefIcon } from "../buttons";

const commonButtonClasses =
  "text-neutral-400 hover:text-indigo-500 border border-neutral-400 hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:bg-indigo-800/10 hover:scale-110 rounded-full p-2 transition";

const SocialNav = () => {
  return (
    <nav className="flex justify-around w-44">
      <ButtonRefIcon
        href="mailto:manuhelderruiz@gmail.com"
        idName="icon-mail"
        className={`${commonButtonClasses} animate-popup-delay-200`}
      />
      <ButtonRefIcon
        href="https://github.com/theHELDERscrolls"
        idName="icon-github"
        className={`${commonButtonClasses} animate-popup-delay-250`}
      />
      <ButtonRefIcon
        href="https://www.linkedin.com/in/heldermvr/"
        idName="icon-linkedin"
        className={`${commonButtonClasses} animate-popup-delay-300`}
      />
    </nav>
  );
};

export default SocialNav;
