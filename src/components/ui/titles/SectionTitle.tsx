import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  return (
    <h2
      ref={ref}
      className={`relative w-full text-3xl sm:text-6xl p-4 font-bold text-center text-indigo-500 font-orbitron text-shadow-[0_0_10px_#6366f1] ${
        inView ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <span
        id="neon-line"
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-full h-0.5 -translate-x-1/2 -translate-y-1/2 -z-10 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"
      ></span>
      {text}
    </h2>
  );
};

export default SectionTitle;
