interface TagProps {
  text: string;
  className?: string;
  width?: string;
}

const Tag = ({ text, className, width = "w-fit" }: TagProps) => {
  return (
    <p
      className={`flex justify-center items-center px-2 py-1 rounded-full text-xs h-7 border border-sky-500 text-sky-500 bg-gradient-to-r from-sky-800/35 to-sky-800/10 ${className} ${width}`}
    >
      {text}
    </p>
  );
};

export default Tag;
