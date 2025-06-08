import { useInView } from "react-intersection-observer";
import type Tech from "../../../types/tech";

const TechIcon = ({ name, imgURL }: Tech) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`p-3 border border-indigo-900 bg-indigo-800/10 rounded-2xl hover:border-indigo-500 hover:shadow-[0_0_5px_#6366f1] hover:scale-105 transition-transform ${
        inView ? "animate-pop-up" : "opacity-0"
      }`}
    >
      <img
        src={imgURL}
        alt={`${name} icon`}
        className="object-contain w-10 h-10"
        title={name}
      />
    </div>
  );
};

export default TechIcon;
