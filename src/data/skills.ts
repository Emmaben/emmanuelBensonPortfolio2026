
import { Code, Database, Layout, Terminal, Cpu, Container, Layers } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "Python", "C#", "HTML", "CSS"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "GSAP"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Flask", "NestJS", "REST APIs", "Entity Framework Core", "Dapper"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Firebase"],
  },
  {
    name: "DevOps & Deployment",
    icon: Cpu,
    skills: ["Git", "Docker", "Vercel Serverless Functions"],
  },
  {
    name: "Development Tools",
    icon: Container,
    skills: ["Visual Studio Code", "PyCharm", "Azure Data Studio", "Postman", "Anaconda"],
  },
  {
    name: "Methodologies & Concepts",
    icon: Layers,
    skills: ["Agile", "Scrum", "Progressive Web Apps (PWA)", "API Integration"],
  }
];
