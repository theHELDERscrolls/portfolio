interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className="w-full text-3xl sm:text-6xl font-bold text-center text-indigo-500 font-orbitron text-shadow-[0_0_10px_#6366f1]">{text}</h2>;
};

export default SectionTitle;
