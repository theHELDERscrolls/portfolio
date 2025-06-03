import { PrincipalTitle } from "./ui";
import ButtonIcon from "./ui/ButtonIcon";
import QuoteCard from "./ui/QuoteCard";
import SocialNav from "./ui/SocialNav";

const Hero = () => {
  return (
    <>
      <header className="relative h-dvh w-full flex flex-col justify-around items-center">
        <PrincipalTitle
          name="HELDER"
          lastName="RUIZ"
          roleLine1="FullStack"
          roleLine2="Developer"
        />

        <QuoteCard />

        <SocialNav />

        <ButtonIcon idName="icon-chevrons-down" className="text-neutral-400/20 animate-bounce" />
      </header>
    </>
  );
};

export default Hero;
