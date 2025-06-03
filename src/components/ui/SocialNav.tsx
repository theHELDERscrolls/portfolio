import ButtonIcon from "./ButtonIcon";

const commonButtonClasses =
  "text-neutral-400 hover:text-indigo-500 border border-neutral-400 hover:border-indigo-500 hover:bg-indigo-800/10 hover:scale-110 rounded-full p-2 transition";

const SocialNav = () => {
  return (
    <nav className="flex justify-around w-44">
      <ButtonIcon
        href="mailto:manuhelderruiz@gmail.com"
        idName="icon-mail"
        className={commonButtonClasses}
      />
      <ButtonIcon
        href="https://github.com/theHELDERscrolls"
        idName="icon-github"
        className={commonButtonClasses}
      />
      <ButtonIcon
        href="https://www.linkedin.com/in/heldermvr/"
        idName="icon-linkedin"
        className={commonButtonClasses}
      />
    </nav>
  );
};

export default SocialNav;
