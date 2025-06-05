import {
  SectionTitle,
  MyInspirationCard,
  CoffeConsumptionCard,
  YearsExpCard,
} from "../components";
const About = () => {
  return (
    <section
      id="sect-about"
      className="border-2 border-red-500 min-h-dvh text-neutral-400"
    >
      <SectionTitle text="About me" />
      {/* <article className="font-mono text-white">
        <h3 className="font-bold font-orbitron">
          Beyond the <span className="text-indigo-500">code...</span>
        </h3>
        <p className="text-xs">
          I'm a <span className="text-amber-400">Full Stack Web Developer</span>
          , focused on building functional and visually refined solutions—from{" "}
          <span className="text-amber-400">backend</span> logic to{" "}
          <span className="text-amber-400">frontend</span> experiences. I
          genuinely enjoy coding, solving problems, and learning continuously in
          a fast-evolving tech landscape.
        </p>
        <p className="text-xs">
          <span className="text-amber-400">Sports</span> are a core part of my
          life. They’ve shaped my discipline, perseverance, and mental
          clarity—qualities I bring into my work as a developer.
        </p>
        <p className="text-xs">
          I also find peace in <span className="text-amber-400">reading</span>{" "}
          and <span className="text-amber-400">playing the piano</span>, small
          rituals that help me recharge and keep my creativity flowing.
        </p>
      </article> */}
      {/* <MyInspirationCard /> */}
      <article className="flex items-center justify-around border border-green-500">
        {/* Some stats: years working, projects, coffee consumption */}
        <CoffeConsumptionCard />
        <YearsExpCard />
        <CoffeConsumptionCard />
      </article>
      <article>{/* Skills & tech */}</article>
    </section>
  );
};

export default About;
