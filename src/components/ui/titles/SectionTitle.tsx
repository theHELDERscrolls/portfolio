import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <h2
      ref={ref}
      className={`w-full text-3xl sm:text-6xl p-4 font-bold text-center text-indigo-500 font-orbitron text-shadow-[0_0_10px_#6366f1] ${
        inView ? "animate-fade-in" : "opacity-0"
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
