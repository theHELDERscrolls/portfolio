interface SectionTitleProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className="w-full text-2xl font-bold text-center text-indigo-500 font-orbitron">{text}</h2>;
};

export default SectionTitle;
