import {
  ButtonIcon,
  PrincipalLogo,
  PrincipalTitle,
  QuoteCard,
  SocialNav,
} from "../components/ui";

import useMediaQuery from "../hooks/useMediaQuery";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width: 755px)");

  return (
    <>
      <header id="hero" className="relative flex flex-col items-center justify-around w-full gap-4 min-h-dvh">
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
