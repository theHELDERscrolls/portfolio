import { MyInspirationalCard, SectionTitle } from "../components";

const About = () => {
  return (
    <section
      id="sect-about"
      className="border-2 border-red-500 min-h-dvh text-neutral-400"
    >
      <SectionTitle text="About me" />
      <article className="">
        {/* About */}
        {/* <h3>
          Beyond the <span className="text-cyan-500">code...</span>
        </h3>
        <p>
          I'm a <span className="text-rose-400">Full Stack Web Developer</span>,
          focused on building functional and visually refined solutions—from{" "}
          <span className="text-rose-400">backend</span> logic to{" "}
          <span className="text-rose-400">frontend</span> experiences. I
          genuinely enjoy coding, solving problems, and learning continuously in
          a fast-evolving tech landscape.
        </p>
        <p>
          <span className="text-rose-400">Sports</span> are a core part of my
          life. They’ve shaped my discipline, perseverance, and mental
          clarity—qualities I bring into my work as a developer.
        </p>
        <p>
          I also find peace in <span className="text-rose-400">reading</span>{" "}
          and <span className="text-rose-400">playing the piano</span>, small
          rituals that help me recharge and keep my creativity flowing.
        </p> */}
      </article>
      <MyInspirationalCard />
      <article>
        {/* Some stats: years working, projects, coffee consumption */}
      </article>
      <article>{/* Skills & tech */}</article>
    </section>
  );
};

export default About;
