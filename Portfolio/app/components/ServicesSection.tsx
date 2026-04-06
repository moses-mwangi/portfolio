"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Brain, 
  Code2, 
  Sparkles, 
  Workflow, 
  Palette,
  MessageSquare,
  Cloud,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Transform your business with intelligent automation that learns and adapts to your workflows.",
    features: [
      "Workflow automation with AI",
      "Custom AI agents",
      "Process optimization",
      "Integration with 50+ tools",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Custom ML Models",
    description: "Tailored machine learning solutions designed to solve your unique business challenges.",
    features: [
      "Model development & training",
      "Data preprocessing",
      "Model deployment & monitoring",
      "Performance optimization",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "NLP & LLM Solutions",
    description: "Harness the power of large language models for chatbots, content generation, and more.",
    features: [
      "RAG systems implementation",
      "Chatbot development",
      "Text analysis & processing",
      "Custom knowledge bases",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "AI Consulting",
    description: "Strategic guidance to help you identify and implement AI solutions in your business.",
    features: [
      "AI strategy & roadmap",
      "Technology assessment",
      "Implementation planning",
      "Team training & workshops",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    features: [
      "Next.js & React development",
      "REST & GraphQL APIs",
      "Database design",
      "Cloud architecture",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    features: [
      "User research & analysis",
      "Interface design",
      "Prototyping & testing",
      "Design systems",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ServicesSection() {
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
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary font-mono text-lg">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I help businesses leverage the power of AI to transform their operations, 
            reduce costs, and deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-4`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
