export const experiences = [
  {
    company: "AppLovin",
    logo: "/logos/applovin.png",
    role: "Software Engineer Intern",
    location: "Palo Alto, CA",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "Built a data-center consistency monitoring & alerting system (Python, Prometheus, Grafana) deployed on GKE; cut replication-issue detection time by ~80%",
      "Refactored SQL Migration Syntax Checker into a full MySQL/Vertica integrity validator; increased CI coverage from 40% to 100% and reduced migration failures by 90%",
      "Built an AI agent for DevHub (Backstage) that auto-generates documentation for service repos—cutting service onboarding to <1 minute",
    ],
    tech: ["Python", "TypeScript", "Prometheus", "Grafana", "GKE", "Helm", "Argo"],
  },
  {
    company: "Meta",
    logo: "/logos/meta.png",
    role: "Software Engineer Intern",
    location: "Bellevue, WA",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Boosted XStream Reaper efficiency 5x by building traffic and reference signal collectors in Hack/PHP to detect unused stream processing apps",
      "Enabled automated daily production reaping via a Python Dataswarm pipeline with staged rollouts and monitoring detectors",
      "Delivered $138K/year in capacity savings (~13.8k normalized watts reclaimed) by reaping unused apps at scale",
    ],
    tech: ["Python", "Hack/PHP", "Hive", "SQL", "Dataswarm"],
  },
  {
    company: "Meta",
    logo: "/logos/meta.png",
    role: "Engineering Fellow (MLH)",
    location: "Remote",
    period: "Jun 2024 – Sep 2024",
    bullets: [
      "Built an open-source web app using Python, Flask, and MySQL; achieved 95% test coverage and scaled with Nginx to 10,000+ requests/min",
      "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing manual deployment time by 80%",
      "Built end-to-end monitoring with Prometheus and Grafana, reducing incident response time by 50%",
    ],
    tech: ["Python", "Flask", "MySQL", "Docker", "Nginx", "Prometheus", "GitHub Actions"],
  },
  {
    company: "Enterprise Minds",
    logo: "/logos/enterprise-minds.png",
    role: "AI/ML Intern",
    location: "San Ramon, CA",
    period: "Jun 2023 – Sep 2023",
    bullets: [
      "Designed experiments using open-source LLMs to solve complex business problems, achieving 30% increase in solution efficiency",
      "Built a Conversational AI travel agent with LangChain, Pinecone, and Chainlit",
      "Developed an AI-powered Q&A application using LangChain and ChromaDB, supporting 500+ user queries per day",
    ],
    tech: ["Python", "LangChain", "Pinecone", "Chainlit", "Streamlit", "ChromaDB"],
  },
];

export const projects = [
  {
    title: "Centra",
    description:
      "Intelligent Incident Routing System with decision-grade routing, evidence-backed assignment, bounded execution, outcome learning, and audit replay.",
    tech: ["Python", "AI/ML", "Incident Management"],
    link: "https://github.com/sasankgamini/Centra",
    type: "project" as const,
  },
  {
    title: "Rentora",
    description:
      "Rental platform simplifying home-finding for students. AI-powered matching with 100+ active users. Built as Founder & Developer.",
    tech: ["React", "Node.js", "Firebase", "AI"],
    link: "https://www.rentora.net",
    type: "startup" as const,
  },
  {
    title: "GLYTH",
    description:
      "Deforestation visualization tool using Google Earth Engine data and OpenCV pattern detection. Built a Unity simulation for environmental awareness.",
    tech: ["Python", "Flask", "OpenCV", "Unity", "C#"],
    link: "https://devpost.com/software/glyth",
    award: "CruzHacks 1st Place",
    type: "hackathon" as const,
  },
  {
    title: "Creator Capital",
    description:
      "Platform for investing in content creators. Supporting the future of content creation with a thriving ecosystem where creativity is rewarded.",
    tech: ["React", "Node.js", "Financial APIs"],
    link: "https://devpost.com/software/creator-capital-yw68fs",
    award: "Hackathon Winner",
    type: "hackathon" as const,
  },
];

export const skillCategories = {
  Languages: [
    "Python",
    "C/C++",
    "Java",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "C#",
    "Swift",
    "Bash",
    "YAML",
    "PHP/Hack",
    "SQL",
    "PromQL",
  ],
  Frameworks: [
    "Flask",
    "React",
    "Node.js",
    "LangChain",
    "Streamlit",
    "Chainlit",
    "Backstage",
  ],
  "Developer Tools": [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Helm",
    "Argo",
    "Jenkins",
    "GKE/GCP",
    "MySQL",
    "Vertica",
    "StarRocks",
    "Nginx",
    "Wireshark",
    "Prometheus",
    "Grafana",
    "Alertmanager",
    "Linux/Unix",
    "Firebase",
    "Pinecone",
  ],
  Libraries: [
    "TensorFlow",
    "Keras",
    "Pandas",
    "PyTorch",
    "OpenCV",
    "Matplotlib",
    "NumPy",
    "scikit-learn",
  ],
};

export const socials = {
  github: "https://github.com/sasankgamini",
  linkedin: "https://www.linkedin.com/in/sasankgamini",
  devpost: "https://devpost.com/sasankgamini",
  email1: "sasank.gamini@berkeley.edu",
  email2: "sasankgamini@gmail.com",
};
