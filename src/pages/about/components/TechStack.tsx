import { techStack } from "@/data";

export const TechStack = () => {
  const knownTech = techStack.filter((tech) => tech.type === "KNOWN");
  const learningTech = techStack.filter((tech) => tech.type === "LEARNING");

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold md:text-3xl font-orbitron">
        My <span className="text-indigo-400">Tech Stack</span>
      </h2>

      <section className="flex flex-col items-center justify-center w-full gap-4 p-4">
        <h3 className="w-full py-2 font-mono border-b text-neutral-300 border-b-neutral-300/25">
          Technologies I know
        </h3>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:justify-start">
          {knownTech.map((tech) => (
            <img
              key={tech.name}
              src={tech.iconUrl}
              alt={tech.name}
              title={tech.name}
              loading="lazy"
              className="w-12 h-12 p-2 border bg-indigo-800/10 border-indigo-500/10 rounded-xl shadow-[0_0_5px_#7C86FF]"
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full gap-4 p-4">
        <h3 className="w-full py-2 font-mono border-b text-neutral-300 border-b-neutral-300/25">
          Technologies I'm learning
        </h3>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 sm:justify-start">
          {learningTech.map((tech) => (
            <img
              key={tech.name}
              src={tech.iconUrl}
              alt={tech.name}
              title={tech.name}
              loading="lazy"
              className="w-12 h-12 p-2 border bg-indigo-800/10 border-indigo-500/10 rounded-xl shadow-[0_0_5px_#7C86FF]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
