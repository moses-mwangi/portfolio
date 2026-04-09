"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  Code2, 
  Palette, 
  Bot, 
  Database, 
  Cloud, 
  Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "Keras", level: 82 },
    ],
  },
  {
    title: "NLP & LLMs",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "GPT API Integration", level: 95 },
      { name: "LangChain", level: 92 },
      { name: "RAG Systems", level: 90 },
      { name: "Hugging Face", level: 88 },
      { name: "Text Processing", level: 90 },
    ],
  },
  {
    title: "Computer Vision",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "OpenCV", level: 88 },
      { name: "YOLO", level: 85 },
      { name: "Image Classification", level: 87 },
      { name: "Object Detection", level: 85 },
      { name: "MediaPipe", level: 80 },
    ],
  },
  {
    title: "Engineering",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "Node.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "REST/GraphQL", level: 90 },
    ],
  },
];

const techStack = [
  "Python", "PyTorch", "TensorFlow", "OpenAI", "LangChain", "Hugging Face",
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "Google Cloud", "Git", "GraphQL", "REST API",
  "Computer Vision", "NLP", "LLMs", "RAG", "Agents", "Automation"
];

export default function SkillsSection() {
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
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
