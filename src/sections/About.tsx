import { MyInspirationalCard } from "../components";

const About = () => {
  return (
    <section
      id="sect-about"
      className="border-2 border-red-500 min-h-dvh text-neutral-400"
    >
      <h2 className=" text-cyan-500 font-orbitron">About me</h2>
      <article className="font-mono">
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
        {/* personal inspiration card -> create local "data base". 
            people|books|podcast|music. */}
        <MyInspirationalCard />
        {/* Some stats: years working, projects, coffee consumption */}
        {/* Skills & tech */}
      </article>
      <article></article>
      <article></article>
      <article></article>
    </section>
  );
};

export default About;
