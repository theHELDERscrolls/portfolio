import { ContactDetailItem } from "./ContactDetailItem";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactMePresence } from "./ContactMePresence";
import { SectionTitle, SocialButton } from "@/components/ui";

export const ContactMe = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-between w-full min-h-screen"
    >
      <SectionTitle title="let's connect!" />

      <div className="flex items-center justify-center flex-1 w-full">
        <article className="flex flex-col items-center justify-center max-w-2xl gap-5 p-5 border border-indigo-400/10 bg-indigo-800/10 rounded-xl">
          <header className="flex items-center justify-between w-full gap-5">
            <h3 className="text-xl font-bold sm:text-3xl font-orbitron">
              Get In Touch
            </h3>

            <ContactMePresence />
          </header>

          <section className="flex flex-wrap items-center justify-center w-full gap-5 py-5 border-indigo-400/50 border-y">
            <SocialButton
              groupHover="group-hover:w-12"
              href="mailto:manuhelderruiz@gmail.com"
              iconClassName="w-12.5 h-12.5"
              iconId="icon-email"
              text="Gmail"
            />

            <SocialButton
              groupHover="group-hover:w-16"
              href={`https://discord.com/users/${
                import.meta.env.VITE_DISCORD_ID
              }`}
              iconClassName="w-12.5 h-12.5"
              iconId="icon-discord"
              text="Discord"
            />

            <div className="flex flex-wrap items-center justify-center w-full gap-5">
              <ContactInfoCard
                color="amber"
                title="Work together"
                iconId="icon-hands"
                children="Looking for a developer to bring your idea to life? Let’s collaborate and build something meaningful."
              />

              <ContactInfoCard
                color="lime"
                title="Join your team"
                iconId="icon-schema"
                children="Need someone reliable to strengthen your team? I’m open to long-term roles and ongoing collaborations."
              />

              <ContactInfoCard
                color="sky"
                title="Technical guidance"
                iconId="icon-guide"
                children="Have questions about stack, architecture, or project direction? I can help you clarify the next steps."
              />
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-around w-full gap-5">
            <ContactDetailItem
              color="amber"
              iconId="icon-clock"
              title="Response Time"
              value="within 24 hours"
            />

            <ContactDetailItem
              color="lime"
              iconId="icon-time"
              title="Time Zone"
              value="CET (UTC+1)"
            />

            <ContactDetailItem
              color="sky"
              iconId="icon-language"
              title="Language"
              value="Spanish, English"
            />
          </footer>
        </article>
      </div>
    </section>
  );
};
