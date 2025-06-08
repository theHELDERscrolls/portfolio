import { ButtonRefIcon } from "../buttons";

const commonButtonClasses =
  "text-neutral-400 hover:text-indigo-500 border-2 border-neutral-400 hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:bg-indigo-800/10 hover:scale-110 rounded-full p-2 transition";

const SocialNav = () => {
  return (
    <nav className="flex justify-around w-2xs">
      <ButtonRefIcon
        href="mailto:manuhelderruiz@gmail.com"
        idName="icon-mail"
        className={`${commonButtonClasses} animate-[popUp_0.5s_ease-in-out_2s_both]`}
      />
      <ButtonRefIcon
        href="https://github.com/theHELDERscrolls"
        idName="icon-github"
        className={`${commonButtonClasses} animate-[popUp_0.5s_ease-in-out_2.25s_both]`}
      />
      <ButtonRefIcon
        href="https://www.linkedin.com/in/heldermvr/"
        idName="icon-linkedin"
        className={`${commonButtonClasses} animate-[popUp_0.5s_ease-in-out_2.50s_both]`}
      />
    </nav>
  );
};

export default SocialNav;
