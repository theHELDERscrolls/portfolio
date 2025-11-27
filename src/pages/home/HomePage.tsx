import {} from "react";
import { MorphLogo, QuoteCard, SocialNav } from "@/components";

export const HomePage = () => {
  const isHeightSmall = window.innerHeight < 550;

  return (
    <section
      className={`flex flex-col items-center w-full gap-10 bg-transparent h-dvh ${
        isHeightSmall ? "justify-center" : "justify-evenly"
      }`}
    >
      <MorphLogo />
      <QuoteCard />
      <SocialNav />
    </section>
  );
};
