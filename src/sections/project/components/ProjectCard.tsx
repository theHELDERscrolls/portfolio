import { BrutalButton } from "@/components";

interface ProjectCardProps {
  filename: string;
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  filename,
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-full min-h-96 border-2 overflow-hidden border-neutral-900 transition-all ease-in-out duration-300 hover:-translate-1 hover:shadow-[10px_10px_0_0_#171717] group">
      <header className="relative flex items-center justify-center w-full gap-4 p-1 bg-neutral-400 min-h-12">
        <span className="font-mono font-bold">{filename}</span>
        <div className="absolute flex items-center justify-center gap-2 sm:gap-4 top-1 right-2">
          <BrutalButton iconName="compact-down" iconOnly size="sm" />
          <BrutalButton iconName="x" iconOnly size="sm" />
        </div>
      </header>

      <img
        src={image}
        alt={title}
        className="object-cover object-top transition-all duration-300 ease-in-out border-y-2 border-neutral-900 max-h-50 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />

      <div className="flex flex-col items-start justify-center flex-1 gap-4 p-4">
        <div className="flex flex-col items-start justify-start flex-1 gap-4">
          <h3 className="text-xl font-extrabold font-bricolage-grotesque">
            {title}
          </h3>
          <p className="text-balance font-space-grotesk">{description}</p>

          <div className="flex flex-wrap items-end flex-1 gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-semibold border-2 font-space-grotesk bg-stone-900 text-stone-100 border-stone-900 shadow-[2px_2px_0_0_#f5f5f4]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <BrutalButton
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            iconName="brand-github"
            iconOnlyMobile
            className="transition-all ease-in-out cursor-pointer hover:bg-slate-200"
          >
            Repository
          </BrutalButton>
          {liveUrl && (
            <BrutalButton
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              iconName="web"
              iconOnlyMobile
              className="transition-all ease-in-out cursor-pointer hover:bg-cyan-200"
            >
              Deploy
            </BrutalButton>
          )}
        </div>
      </div>
    </div>
  );
};
