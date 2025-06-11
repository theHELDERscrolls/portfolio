import { IconTag } from "../icons";

interface ContactBlockProps {
  className?: string;
  textColor: string;
  size?: number;
  subTitle: string;
  svgId: string;
  title: string;
}

const ContactBlock = ({
  className,
  textColor,
  size,
  subTitle,
  svgId,
  title,
}: ContactBlockProps) => {
  return (
    <div className={`flex items-center  ${className}`}>
      <IconTag svgId={svgId} className={`${textColor}`} size={size} />
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-neutral-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default ContactBlock;
