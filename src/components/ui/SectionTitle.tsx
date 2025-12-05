interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="relative w-full text-3xl mt-12.5 sm:text-6xl p-4 font-bold text-center text-indigo-400 font-orbitron text-shadow-[0_0_10px_#6366f1]">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-full h-0.5 -translate-x-1/2 -translate-y-1/2 -z-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-xs"
      ></span>
      {title.toUpperCase()}
    </h2>
  );
};
