import {
  ButtonIcon,
  PrincipalLogo,
  PrincipalTitle,
  QuoteCard,
  SocialNav,
} from "../ui";
import useMediaQuery from "../../hooks/useMediaQuery";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width: 550px)");

  return (
    <>
      <header className="relative h-dvh w-full flex flex-col justify-around items-center">
        {isSmallScreen ? (
          <PrincipalLogo />
        ) : (
          <PrincipalTitle
            name="HELDER"
            lastName="RUIZ"
            roleLine1="FullStack"
            roleLine2="Developer"
          />
        )}

        <QuoteCard />

        <SocialNav />

        <ButtonIcon
          idName="icon-chevrons-down"
          className="text-neutral-400/20 animate-bounce"
        />
      </header>
    </>
  );
};

export default Hero;
