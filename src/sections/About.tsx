import {
  SectionTitle,
  MyInspirationCard,
  CoffeConsumptionCard,
  YearsExpCard,
  ProjectsCompletedCard,
} from "../components";
const About = () => {
  return (
    <section
      id="sect-about"
      className="px-4 mx-auto border border-red-500 max-w-7xl min-h-dvh text-neutral-400"
    >
      <SectionTitle text="About me" />

      <div
        id="aboutme-content"
        className="gap-8 mt-4 space-y-4 columns-1 md:columns-2"
      >
        <div
          id="left-col"
          className="flex flex-col max-h-full gap-8 break-inside-avoid"
        >
          <article className="flex flex-col gap-3 font-mono text-white text-balance">
            <h3 className="text-2xl font-bold sm:text-3xl font-orbitron">
              Beyond the <span className="text-indigo-500">code...</span>
            </h3>
            <p>
              I'm a{" "}
              <span className="text-amber-400">Full Stack Web Developer</span>,
              focused on building functional and visually refined solutions—from{" "}
              <span className="text-amber-400">backend</span> logic to{" "}
              <span className="text-amber-400">frontend</span> experiences. I
              genuinely enjoy coding, solving problems, and learning
              continuously in a fast-evolving tech landscape.
            </p>
            <p>
              <span className="text-amber-400">Sports</span> are a core part of
              my life. They’ve shaped my discipline, perseverance, and mental
              clarity—qualities I bring into my work as a developer.
            </p>
            <p>
              I also find peace in{" "}
              <span className="text-amber-400">reading</span> and{" "}
              <span className="text-amber-400">playing the piano</span>, small
              rituals that help me recharge and keep my creativity flowing.
            </p>
          </article>
          <article className="flex items-center justify-center">
            <MyInspirationCard infoPassTime={10000} />
          </article>
        </div>

        <div
          id="right-col"
          className="flex flex-col justify-between max-h-full gap-4 break-inside-avoid"
        >
          <article className="flex flex-wrap gap-4 border border-green-600 justify-evenly">
            <ProjectsCompletedCard />
            <YearsExpCard />
            <CoffeConsumptionCard />
          </article>
          <article className="w-full bg-green-400 border h-50"></article>
        </div>
      </div>
    </section>
  );
};

export default About;
