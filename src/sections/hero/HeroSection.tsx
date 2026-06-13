import { useTranslation } from "react-i18next";
import { BrutalButton } from "@/components";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="flex items-center justify-center w-full min-h-(--section-min-height) bg-neutral-100 px-4 md:px-16 py-12"
    >
      <div className="grid w-full grid-cols-1 gap-12 max-w-7xl md:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-widest uppercase font-space-grotesk text-neutral-500">
              {t("hero.role")}
            </span>
            <h1 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(3.5rem,8vw,7rem)]">
              {t("hero.greeting")}
              <br />
              <span>Helder</span>
            </h1>
          </div>

          <p className="max-w-md text-base leading-relaxed font-space-grotesk text-neutral-700">
            {t("hero.description")}
          </p>

          <div className="flex items-center gap-3">
            <div className="sm:hidden">
              <BrutalButton
                href="/Helder_Ruiz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                iconName="file-cv"
                iconOnly
              />
            </div>
            <div className="hidden sm:block">
              <BrutalButton
                href="/Helder_Ruiz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                iconName="file-cv"
              >
                {t("hero.downloadCv")}
              </BrutalButton>
            </div>

            <BrutalButton
              href="https://github.com/theHELDERscrolls"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              iconName="brand-github"
              iconOnly
              className="hover:bg-slate-200"
            />

            <BrutalButton
              href="https://www.linkedin.com/in/heldermvr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              iconName="brand-linkedin"
              iconOnly
              className="hover:bg-blue-200"
            />
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-md">
            <img
              src="/images/HR_owl.jpg"
              alt="Helder Ruiz"
              className="w-full object-cover border-3 border-neutral-900 shadow-[8px_8px_0_0_#000]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
