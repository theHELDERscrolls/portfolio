import { BrutalButton } from "@/components";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center w-full h-[var(--section-min-height)] bg-neutral-100 px-6 md:px-16 py-12"
    >
      <div className="grid w-full grid-cols-1 gap-12 max-w-7xl md:grid-cols-2 md:gap-8">
        {/* Left — texto y CTA */}
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-widest uppercase font-space-grotesk text-neutral-500">
              Full-Stack Developer
            </span>
            <h1 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(3.5rem,8vw,7rem)]">
              Hi, I'm
              <br />
              <span>Helder.</span>
            </h1>
          </div>

          <p className="max-w-md text-base leading-relaxed font-space-grotesk text-neutral-700">
            Developer based in Spain. I like building things that work well,
            look clean, and make sense to the people using them.
          </p>

          <div className="flex items-center gap-3">
            <BrutalButton href="/cv_mock.pdf" download iconName="file-cv">
              Download CV
            </BrutalButton>

            <BrutalButton
              href="https://github.com/theHELDERscrolls"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              iconName="brand-github"
              iconOnly
            />

            <BrutalButton
              href="https://www.linkedin.com/in/heldermvr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              iconName="brand-linkedin"
              iconOnly
            />
          </div>
        </div>

        {/* Right — imagen */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-md">
            <img
              src="/HR_owl.jpg"
              alt="Helder Ruiz"
              className="w-full object-cover border-3 border-neutral-900 shadow-[8px_8px_0_0_#171717]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
