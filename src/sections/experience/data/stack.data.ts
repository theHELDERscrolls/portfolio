export interface TechItem {
  name: string;
  url: string;
}

export interface TechCategory {
  id: string;
  items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
  {
    id: "frontend",
    items: [
      { name: "HTML5", url: "/tech/html5.svg" },
      { name: "CSS", url: "/tech/css.svg" },
      { name: "Sass", url: "/tech/sass.svg" },
      { name: "JavaScript", url: "/tech/javascript.svg" },
      { name: "TypeScript", url: "/tech/typescript.svg" },
      { name: "React", url: "/tech/react.svg" },
      { name: "Angular", url: "/tech/angular.svg" },
      { name: "Tailwind CSS", url: "/tech/tailwindcss.svg" },
    ],
  },
  {
    id: "backend",
    items: [
      { name: "Java", url: "/tech/java.svg" },
      { name: "Node.js", url: "/tech/nodejs.svg" },
      { name: "Spring Boot", url: "/tech/spring.svg" },
    ],
  },
  {
    id: "database",
    items: [
      { name: "MongoDB", url: "/tech/mongodb.svg" },
      { name: "MySQL", url: "/tech/mysql.svg" },
      { name: "PostgreSQL", url: "/tech/postgresql.svg" },
    ],
  },
  {
    id: "devops",
    items: [
      { name: "Git", url: "/tech/git.svg" },
      { name: "GitHub", url: "/tech/github.svg" },
      { name: "GitLab", url: "/tech/gitlab.svg" },
      { name: "Kubernetes", url: "/tech/kubernetes.svg" },
      { name: "Linux", url: "/tech/linux.svg" },
    ],
  },
  {
    id: "tools",
    items: [
      { name: "GitHub Copilot", url: "/tech/copilot.svg" },
      { name: "Claude AI", url: "/tech/claude.svg" },
      { name: "Postman", url: "/tech/postman.svg" },
      { name: "Swagger", url: "/tech/swagger.svg" },
    ],
  },
];
