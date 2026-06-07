
import { Code, Database, Layout, Terminal, Cpu, Container, Layers, Brain } from "lucide-react";
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
    skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "HTML5", "CSS3"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "GSAP", "Responsive Design"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Flask", "Node.js", ".NET (Entity Framework Core, Dapper)", "REST API Design"],
  },
  {
    name: "Machine Learning / AI",
    icon: Brain,
    skills: ["Scikit-learn", "Transformers (BERT, RoBERTa)", "SHAP", "Model Evaluation", "Pandas"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    name: "DevOps & Deployment",
    icon: Cpu,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Agile/Scrum"],
  },
  {
    name: "Development Tools",
    icon: Container,
    skills: ["Figma", "Visual Studio Code", "PyCharm", "Postman", "Anaconda"],
  },
  {
    name: "Methodologies & Concepts",
    icon: Layers,
    skills: ["Agile", "Scrum", "REST API Design", "Service-Oriented Architecture (SOA)"],
  }
];
