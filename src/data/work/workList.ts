import type { workExperienceProps } from "../../types";

export const workList: workExperienceProps[] = [
  {
    role: "Fullstack Developer & Product Manager",
    company: "SatoriWare",
    description:
      "Driving the design and implementation of fullstack web solutions. Actively contributing to both frontend and backend architecture while also leading product planning, prioritization, and cross-functional coordination to ensure timely delivery. Balancing technical development with product vision to build impactful, user-centered platforms.",
    isCurrent: true,
    startDate: "June, 2025",
    endDate: "Present",
    location: "Remote",
    tech: [
      "REST API",
      "TypeScript",
      "React",
      "Flask",
      "JavaScript",
      "PostgreSQL",
      "Python",
      "Tailwind",
      "Vite",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Developed responsive and scalable web interfaces for clients, delivering modern, high-performance solutions with React, TypeScript, and Tailwind. Focused on usability, accessibility, and clean code through close client collaboration.",
    isCurrent: false,
    startDate: "May, 2024",
    endDate: "May, 2025",
    location: "Remote",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "JavaScript",
      "Vite",
      "Vercel",
      "MySQL",
    ],
  },
];
