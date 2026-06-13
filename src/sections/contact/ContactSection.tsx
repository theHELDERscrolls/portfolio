import { ContactForm } from "./components";

export const ContactSection = () => (
  <section
    id="contact"
    className="w-full min-h-(--section-min-height) px-4 py-12 bg-stone-200 border-t-3 border-neutral-900 md:px-16 flex flex-col"
  >
    <div className="flex flex-col flex-1 w-full gap-10 mx-auto max-w-7xl">
      <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
        Contact
      </h2>

      <div className="grid grid-cols-1 gap-10 flex-1 lg:grid-cols-[2fr_3fr] lg:items-stretch">
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-bricolage-grotesque font-extrabold text-neutral-900 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">
              Let's work together.
            </p>
            <p className="max-w-sm text-sm leading-relaxed font-space-grotesk text-neutral-700">
              Have a project in mind or just want to reach out? Fill out the
              form and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  </section>
);
