import { useInView } from "react-intersection-observer";
import { techList } from "../../../data";
import TechIcon from "../templates/TechIcon";

const TechCard = () => {
  const { ref: ref, inView: inViewTech } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="flex flex-col w-full gap-8 mt-8">
      <h3
        ref={ref}
        className={`text-2xl font-bold text-center text-white sm:text-3xl font-orbitron ${
          inViewTech ? "animate-fade-in sm:animate-right-slide-in" : "opacity-0"
        }`}
      >
        <span className="text-indigo-500">Tech</span> Stack
      </h3>

      <div
        id="tech-grid"
        className="grid grid-cols-3 gap-4 sm:grid-cols-4 justify-items-center"
      >
        {techList.map((tech) => (
          <TechIcon key={tech.name} name={tech.name} imgURL={tech.imgURL} />
        ))}
      </div>
    </section>
  );
};

export default TechCard;
