import { techList } from "../../../data";

const TechCard = () => {
  return (
    <section className="flex flex-col w-full gap-8 mt-8">
      <h3 className="text-2xl font-bold text-center text-white sm:text-3xl font-orbitron">
        <span className="text-indigo-500">Tech</span> Stack
      </h3>

      <div
        id="tech-grid"
        className="grid grid-cols-3 gap-4 sm:grid-cols-4 justify-items-center"
      >
        {techList.map((tech) => (
          <div
            key={tech.name}
            className="p-3 border border-indigo-900 bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:scale-105 transition-transform"
          >
            <img
              src={tech.imgURL}
              alt={`${tech.name} icon`}
              className="object-contain w-10 h-10"
              title={tech.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechCard;
