import { ResumeData } from "@/lib/types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    summary: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Strong problem-solving skills and a commitment to writing clean, maintainable code.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "2022-01-01",
      endDate: "2024-01-01",
      current: true,
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product team to define technical requirements",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    },
    {
      id: "2",
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      location: "Austin, TX",
      startDate: "2020-06-01",
      endDate: "2021-12-31",
      description: [
        "Developed and maintained RESTful APIs for e-commerce platform",
        "Built responsive front-end components using React and TypeScript",
        "Optimized database queries improving performance by 40%",
        "Participated in agile development process",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    },
    {
      id: "3",
      company: "StartUp Labs",
      position: "Junior Developer",
      location: "Denver, CO",
      startDate: "2019-01-01",
      endDate: "2020-05-31",
      description: [
        "Assisted in development of company's flagship product",
        "Wrote unit tests and integration tests",
        "Fixed bugs and implemented new features",
        "Collaborated with UX team on responsive design",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MySQL", "Jest"],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      startDate: "2015-09-01",
      endDate: "2019-05-31",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 semesters",
        "President of Computer Science Club",
        "Teaching Assistant for Data Structures course",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and inventory management.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
      link: "https://ecommerce-demo.johndoe.dev",
      github: "https://github.com/johndoe/ecommerce-platform",
      highlights: [
        "Implemented secure payment processing with Stripe",
        "Built responsive design with Tailwind CSS",
        "Achieved 99.9% uptime with automated monitoring",
      ],
    },
    {
      id: "2",
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      link: "https://taskapp.johndoe.dev",
      github: "https://github.com/johndoe/task-management",
      highlights: [
        "Real-time collaboration using WebSockets",
        "Drag-and-drop interface for task organization",
        "Mobile-responsive design",
      ],
    },
    {
      id: "3",
      name: "Weather Dashboard",
      description: "A weather dashboard that displays current conditions and forecasts for multiple locations.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      link: "https://weather.johndoe.dev",
      github: "https://github.com/johndoe/weather-dashboard",
      highlights: [
        "Integrated multiple weather APIs",
        "Interactive charts for weather trends",
        "Location-based weather detection",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
    },
    {
      category: "Tools & Others",
      items: ["VS Code", "Figma", "Jira", "Agile", "Scrum", "REST APIs"],
    },
  ],
  certificates: [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-06-01",
      link: "https://aws.amazon.com/certification/",
    },
    {
      id: "2",
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022-11-15",
      link: "https://cloud.google.com/certification",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Native",
    },
    {
      name: "Spanish",
      proficiency: "Professional Working",
    },
    {
      name: "French",
      proficiency: "Elementary",
    },
  ],
};
