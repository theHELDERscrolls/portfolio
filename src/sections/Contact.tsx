import { useInView } from "react-intersection-observer";
import { SectionTitle, IconTag, ContactBlock } from "../components";

const ContactMe = () => {
  const { ref: refSubtitleSection, inView: inViewSubtitleSection } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: refContactCard, inView: inViewContactCard } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section
      id="sect-contact"
      className="flex flex-col items-center p-4 mx-auto max-w-7xl min-h-dvh"
    >
      <SectionTitle text="LET'S CONECT!" />
      <p
        ref={refSubtitleSection}
        className={`${
          inViewSubtitleSection ? "animate-left-slide-in" : "opacity-0"
        } w-full p-4 font-mono text-xl text-center text-neutral-400`}
      >
        Let's turn your ideas into reality!
      </p>
      <article
        ref={refContactCard}
        id="contact-email"
        className={`${
          inViewContactCard ? "animate-fade-in sm:animate-right-slide-in" : "opacity-0"
        } flex flex-col h-auto max-w-3xl gap-4 p-4 text-white border border-indigo-900 bg-indigo-800/10 rounded-2xl`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold sm:text-3xl font-orbitron">
            Get In Touch
          </h3>
          <IconTag
            svgId="icon-completed"
            text="avaible"
            className="border rounded-full bg-gradient-to-r from-emerald-800/35 to-emerald-800/10 border-emerald-400 text-emerald-400 animate-pulse"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <ContactBlock
            svgId="icon-camera"
            textColor="text-indigo-500"
            title="Schedule a Call"
            subTitle="Choose your preferred meeting type"
            className="mb-4"
            size={48}
          />
          <div className="flex flex-col w-full gap-4 p-4 border-t border-b border-indigo-500">
            <a
              href="mailto:manuhelderruiz@gmail.com?subject=Coffee%20Chat"
              className="flex p-2 flex-col w-full sm:items-center sm:flex-row border border-amber-500 bg-gradient-to-r from-amber-800/25 to-transparent hover:scale-101 rounded-2xl hover:border-amber-500 hover:shadow-[0_0_5px_#F0B250] transition-all duration-300"
            >
              <ContactBlock
                svgId="icon-coffee"
                textColor="text-amber-500"
                title="Coffee Chat"
                subTitle="15 min"
                className="w-48 sm:border-r sm:border-amber-500"
                size={48}
              />
              <p className="pl-2 mt-4 font-mono sm:mt-0 text-balance w-fit">
                Perfect for a quick introduction, getting to know each other,
                and discussing initial ideas over a virtual coffee.
              </p>
            </a>
            <a
              href="mailto:manuhelderruiz@gmail.com?subject=Project%20Discussion"
              className="flex p-2 flex-col w-full sm:items-center sm:flex-row border border-lime-500 hover:scale-101 bg-gradient-to-r from-lime-800/25 to-transparent rounded-2xl hover:shadow-[0_0_5px_#7CCF00] transition-all duration-300"
            >
              <ContactBlock
                svgId="icon-discuss"
                textColor="text-lime-500"
                title="Project Discussion"
                subTitle="30 min"
                className="w-48 sm:border-r border-lime-500"
                size={48}
              />
              <p className="pl-2 mt-4 font-mono sm:mt-0 text-balance w-fit">
                Dive deep into your project requirements, timeline, and
                technical specifications. Perfect for detailed planning.
              </p>
            </a>
            <a
              href="mailto:manuhelderruiz@gmail.com?subject=Strategy%20Session"
              className="flex p-2 flex-col w-full sm:items-center sm:flex-row border hover:scale-101 border-sky-500 bg-gradient-to-r  from-sky-800/25 to-transparent rounded-2xl hover:border-sky-500 hover:shadow-[0_0_5px_#00A6F4] transition-all duration-300"
            >
              <ContactBlock
                svgId="icon-bolt"
                textColor="text-sky-500"
                title="Strategy Session"
                subTitle="60 min"
                className="w-48 sm:border-r border-sky-500"
                size={48}
              />
              <p className="pl-2 mt-4 font-mono sm:mt-0 text-balance w-fit">
                Comprehensive consultation covering architecture, technology
                stack, scalability, and long-term strategy.
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-4">
          <ContactBlock
            svgId="icon-process"
            textColor="text-amber-500"
            title="Response Time"
            subTitle="within 24 hours"
          />

          <ContactBlock
            svgId="icon-planet"
            textColor="text-lime-500"
            title="Timezone"
            subTitle="CET (UTC +1)"
          />

          <ContactBlock
            svgId="icon-language"
            textColor="text-sky-500"
            title="Language"
            subTitle="Spanish, English"
          />
        </div>
      </article>
    </section>
  );
};

export default ContactMe;
