import { EducationCard, WorkCard } from "./components";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full px-6 py-12 bg-neutral-300 border-t-3 border-neutral-900 md:px-16"
    >
      <div className="flex flex-col gap-10 mx-auto max-w-7xl">
        <h2 className="font-bricolage-grotesque font-extrabold leading-none text-neutral-900 text-[clamp(2.5rem,5vw,4rem)]">
          Experience
        </h2>

        {/* Work */}
        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            Work
          </h3>
          <div className="flex flex-col gap-4">
            <WorkCard
              title="Software Developer Intern"
              company="Optare Solutions"
              period="01/2026 – 04/2026"
              description="Developed and maintained the BSS and OSS portal frontends (Angular) for a leading national fiber operator, within an 8-developer team. Delivered a dynamic graph for fiber service lifecycle visualization — a long-standing unresolved feature — and a network resource inventory panel. Set up CI/CD pipelines with Jenkins, Docker, and Kubernetes across multi-stage environments."
              tags={[
                "Angular",
                "AWS",
                "Docker",
                "Jenkins",
                "Kubernetes",
                "PostgreSQL",
                "Spring Boot",
                "TypeScript",
              ]}
              logoBg="/logos/optare.webp"
              current
            />
            <WorkCard
              title="Frontend Developer"
              company="Freelance"
              period="06/2024 – 05/2025"
              description="Built responsive and scalable web interfaces using React, TypeScript, Tailwind CSS, and GSAP across personal and collaborative projects. Emphasis on reusable component architecture, accessibility, and clean code, with full ownership of the development lifecycle from planning through code review."
              tags={[
                "NodeJs",
                "MongoDB",
                "GSAP",
                "Tailwind CSS",
                "TypeScript",
                "React",
              ]}
            />
            <WorkCard
              title="Researcher"
              company="Raquis: Locomotor System and Sport"
              period="01/2018 – 07/2020"
              description="Participated in the first study combining isometric force measurement with the ROM Sport battery in populations with reduced mobility, analysing data from over 1,000 participants. Conducted comparative statistical analysis to identify range of motion patterns and support preventive strategies, within a multidisciplinary team of physiotherapists, physicians, and researchers."
              tags={["Research", "Data Analysis", "Statistics", "SPSS"]}
              logoBg="/logos/umu.webp"
            />
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-2 font-space-grotesk text-neutral-900 border-neutral-900">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <EducationCard
              degree="Higher Technician in Web Application Development"
              institution="thePower"
              logoBg="/logos/thePower.webp"
            />
            <EducationCard
              degree="Postgraduate Program in Full-Stack Web Application Development"
              institution="thePower"
              logoBg="/logos/thePower.webp"
            />
            <EducationCard
              degree="Bachelor's Degree in Physical Activity and Sport Sciences"
              institution="Universidad de Murcia"
              period="2016 – 2020"
              logoBg="/logos/umu.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
