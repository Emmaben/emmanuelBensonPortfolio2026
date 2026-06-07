
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imgset: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Apple Website",
    description: "A modern Apple-inspired landing page showcasing the iPhone 15 Pro, featuring smooth scroll animations built with GSAP, and developed using React and Tailwind CSS. The project focuses on creating an immersive product experience through responsive design, interactive animations, and modern front-end development practices.",
    image: "/imgs/appleWebsite1.png",
    imgset: ["/imgs/appleWebsite1.png", "/imgs/appleWebsite2.png"],
    tags: ["Reactjs", "Tailwind", "Vite"],
    links: {
      github: "https://github.com/Emmaben/appleWebsite",
      live: "https://apple-website-pi-drab.vercel.app/",
    },
  },
  {
    id: 2,
    title: "CVKit",
    description: "Free, ad-supported job-application toolkit (React + Vite): AI cover letter & CV builder, ATS score checker, interview question generator, and LinkedIn writer — with PDF export, templates, and CV import. Secure serverless API keeps keys safe.",
    image: "/imgs/cvKit.png",
    imgset: ["/imgs/cvKit.png"],
    tags: ["React", "Vercel Serverless Functions", "Node.js", "Anthropic Claude API"],
    links: {
      github: "https://github.com/Emmaben/cvKit",
      live: "https://cv-kit-rho.vercel.app/",
    },
  },
  {
    id: 3,
    title: "My Early Software Developer Portfolio",
    description: "A personal software development portfolio showcasing my earlier projects, web design skills, and experience building responsive and interactive user interfaces using modern web technologies.",
    image: "/imgs/oldPortfolio.png",
    imgset: ["/imgs/oldPortfolio.png"],
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Emmaben/Emmanuel-Benson-Portfolio/tree/main",
      live: "https://emmanuel-benson-portfolio-git-main-emmanuel-bensons-projects.vercel.app/"
    },
  },
  {
    id: 4,
    title: "Fake News Detection System",
    description: "Honours dissertation: a comparative study of classical ML models (Logistic Regression, SVM) and transformer models (BERT, RoBERTa) for fake news detection across the LIAR and ISOT datasets (45,000+ articles). Built a reproducible Python pipeline for data cleaning, TF-IDF feature extraction, model training, and evaluation. Fine-tuned transformers with the Hugging Face Trainer API and exposed generalisation failure across domains.",
    image: "/imgs/aiTechniques.png",
    imgset: ["/imgs/aiTechniques.png"],
    tags: ["Python", "Scikit-learn", "Hugging Face Transformers", "BERT", "RoBERTa", "Pandas"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 5,
    title: "DE-Store — Distributed Store Management System",
    description: "A microservice-style retail platform built with Service-Oriented Architecture (SOA), featuring independent price, inventory, finance, and reporting services exposed through REST APIs. Modelled relational data with SQLAlchemy, integrated an external finance-approval API, and built a responsive Bootstrap dashboard frontend with low-stock alerts and sales performance reporting.",
    image: "/imgs/mas.png",
    imgset: ["/imgs/mas.png"],
    tags: ["Python", "Flask", "SQLAlchemy", "REST APIs", "Bootstrap", "SOA"],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: 6,
    title: "AI Techniques: LLM Summarisation & A* Pathfinding",
    description: "A comparative study of Large Language Model (LLM) summarisation techniques combined with an implementation of the A* search algorithm for optimal pathfinding.",
    image: "/imgs/aiTechniques.png",
    imgset: ["/imgs/aiTechniques.png"],
    tags: ["Python", "Jupyter Notebook", "Hugging Face Transformers", "NumPy / Pandas", "Matplotlib "],
    links: {
      github: "https://github.com/Emmaben/lunar-lander-evolutionary-ai",
      live: "",
    },
  },
  {
    id: 7,
    title: "Search & Rescue Multi-Agent Simulation",
    description: "A multi-agent system simulation of a search and rescue operation, demonstrating autonomous agent behaviour, environment interaction, and intelligent decision-making.",
    image: "/imgs/mas.png",
    imgset: ["/imgs/mas.png"],
    tags: ["HTML", "CSS", "JavaScript", "Leaflet.js", "OpenStreetMap"],
    links: {
      github: "https://github.com/Emmaben/Multi-Agent-System-MAS-simulation",
      live: "",
    },
  },
  {
    id: 8,
    title: "Evolutionary Neural Network for Lunar Lander",
    description: "Java-based implementation of an Evolutionary Algorithm for optimising neural network controllers in the Lunar Lander problem. Implements tournament selection, uniform crossover, Gaussian mutation, and elitist replacement, with performance evaluated across multiple runs for generalisation.",
    image: "/imgs/lunar.png",
    imgset: ["/imgs/lunar.png"],
    tags: ["Java", "Object-Oriented Programming", "Evolutionary Computation", "Neural Networks"],
    links: {
      github: "https://github.com/Emmaben/lunar-lander-evolutionary-ai",
      live: "",
    },
  },
];
