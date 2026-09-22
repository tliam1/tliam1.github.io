import type { Profile } from "../types/index"

export const profile: Profile = {
  name: "Liam Tapper",
  title: "Computer Engineer",
  location: "Port Orchard, Washington",
  email: "02liamkwt@gmail.com",
  picture:
    "https://avatars.githubusercontent.com/u/97718694?v=4",
  about: [
    "I'm a 24 year old computer engineer with a focus on building software. I enjoy working on servicable products that will be utilized by many, but on my spare time, I build game demos or participate in game jams.",
    "I have a strong foundation in Full-Stack Development having worked in a start up environment over the last 2 years. However, I am interested in programming microcontrollers, managing servers, and more. As long as I am creating, I'm happy.",
    "I am currently looking for work! Feel free to reach out!"
  ],
  github: {
    label: "GitHub",
    username: "@tliam1",
    url: "https://github.com/tliam1",
    description:
      "This holds personal projects and course work through out college. My professional work cannot be found here, but a few personal projects can be found here.",
  },
  linkedin: {
    label: "LinkedIn",
    username: "Liam Tapper",
    url: "https://www.linkedin.com/in/liam-tapper-837528264/",
    description:
      "Aloha! I am graduate of University of Hawaii at Manoa with a BS in Computer Engineering! I have two years of experience working in a start up environment working in Full-Stack Software Development",
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "Azure Cloud Services",
    "Git",
    "C",
    "C++"
  ],
  experience: [
    {
      company: "Motojin Investment, Inc",
      role: "Junior Full-Stack Software Engineer",
      dates: "October 2024 — August 2026",
      description:
        "While working at Motojin Investment, my primary job was to develop and maintain web applications as a service with LLMs as a core funcationality. LLM systems were developed for appointment scheduling, document retrieval for QA, and redirecting to live specialists if needed. I led full-stack development using Typescript + React and Python, building high-performance API, end-user pages and database systems with controlled schema history using Alembic. I designed a large-scale administrative interface for monitoring and evaluating user and system interactions, including secure role-based access controls and personalized route guards. I also, integrated third-party technologies and services, including Azure products, RAG, and Graph RAG, to address evolving client requirements.",
      skills: [
        "React", 
        "TypeScript", 
        "Node.js", 
        "Python", 
        "RAG", 
        "Graph RAG", 
        "Microsoft Agent Framework", 
        "Semantic Kernel", 
        "Docker",
        "Microsoft Azure Tenant Services",
        "MCPs",
        "PostgreSQL",
        "Alembic",
        "Restful API",
        "React + Vite",
        "RAGAS",
        "Langchain"
      ],
    },
  ],
}