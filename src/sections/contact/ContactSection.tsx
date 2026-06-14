import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks";
import { ContactForm } from "./components";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="w-full min-h-(--section-min-height) px-4 py-12 bg-stone-200 border-t-3 border-neutral-900 md:px-16 flex flex-col"
    >
      <div className="flex flex-col flex-1 w-full gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          {t("contact.title")}
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-10 flex-1 lg:grid-cols-[2fr_3fr] lg:items-stretch"
        >
          <div
            className={`flex flex-col justify-between gap-8 ${inView ? "animate-slide-left" : "opacity-0"}`}
          >
            <div className="flex flex-col gap-4">
              <p className="font-bricolage-grotesque font-extrabold text-neutral-900 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">
                {t("contact.heading")}
              </p>
              <p className="max-w-sm text-sm leading-relaxed font-space-grotesk text-neutral-700">
                {t("contact.subheading")}
              </p>
            </div>
          </div>

          <div
            className={inView ? "animate-fade-up" : "opacity-0"}
            style={{ animationDelay: "150ms" }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
