"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Kivamall",
    subtitle: "eCommerce Platform",
    category: "Founder Project",
    description: "Built a full-featured eCommerce platform from ground up. Led product development, architecture, and team coordination. Served thousands of customers with a seamless shopping experience.",
    problem: "Needed a modern eCommerce solution that could scale with growing demand while providing excellent user experience.",
    solution: "Built a custom platform with React/Next.js frontend, Node.js backend, and PostgreSQL database. Implemented payment integration, inventory management, and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    impact: "Served 10,000+ customers, 99.9% uptime, reduced page load time by 60%",
    github: "https://github.com",
    live: "https://kivamall.com",
    featured: true,
  },
  {
    title: "AI Automation System",
    subtitle: "Workflow Intelligence",
    category: "AI Engineering",
    description: "Intelligent automation system that uses AI to streamline business processes, reduce manual work, and provide predictive insights.",
    problem: "Businesses waste countless hours on repetitive tasks that could be automated with AI.",
    solution: "Developed an AI-powered workflow automation platform using LangChain and custom ML models. Integrated with 50+ business tools.",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI", "Docker", "PostgreSQL"],
    impact: "Saved 40+ hours/week per client, 85% task automation rate",
    github: "https://github.com",
    live: "#",
    featured: true,
  },
  {
    title: "NLP Chatbot",
    subtitle: "Intelligent Assistant",
    category: "NLP Project",
    description: "Context-aware chatbot system built for customer support with advanced sentiment analysis and intent recognition.",
    problem: "Customer support teams overwhelmed with repetitive queries.",
    solution: "Created a RAG-based chatbot using LangChain, Pinecone, and GPT-4. Integrated custom knowledge base with 95% accuracy.",
    technologies: ["Python", "LangChain", "GPT-4", "Pinecone", "FastAPI", "React"],
    impact: "Reduced support tickets by 70%, 24/7 availability, 4.8/5 satisfaction",
    github: "https://github.com",
    live: "#",
    featured: false,
  },
  {
    title: "Computer Vision System",
    subtitle: "Image Analysis AI",
    category: "Computer Vision",
    description: "Real-time image analysis system for quality control and object detection in manufacturing.",
    problem: "Manual quality inspection was slow, error-prone, and costly.",
    solution: "Built a YOLOv8-based detection system with 99.5% accuracy, processing 1000+ images/minute.",
    technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch", "TensorRT", "AWS"],
    impact: "99.5% accuracy, 10x faster processing, $500K annual savings",
    github: "https://github.com",
    live: "#",
    featured: false,
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-lg">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-500 ${
                project.featured ? "lg:grid lg:grid-cols-2 gap-0" : ""
              }`}
            >
              <div className={`p-8 lg:p-12 ${project.featured ? "lg:border-r border-border/30" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-purple-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-secondary/50 text-muted-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-foreground">Problem: </span>
                    <span className="text-sm text-muted-foreground">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Solution: </span>
                    <span className="text-sm text-muted-foreground">{project.solution}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Impact: </span>
                    <span className="text-sm gradient-text font-medium">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-secondary/50 text-muted-foreground text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {project.featured && (
                <div className="relative lg:h-full min-h-[300px] bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-muted-foreground">View Project Details</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-background/50 backdrop-blur-sm rounded-2xl font-semibold hover:bg-secondary/50 hover:border-primary/30 transition-all hover:scale-105"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
