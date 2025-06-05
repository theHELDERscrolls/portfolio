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
      <header className="relative flex flex-col items-center justify-around w-full h-dvh">
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

{
  /* <ButtonRefIcon
          idName="icon-chevrons-down"
          className="text-neutral-400/20 animate-bounce"
        /> */
}
