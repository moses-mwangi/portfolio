"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Kivamall",
    location: "Kenya",
    period: "2020 - Present",
    description: "Built and scaled a full-featured eCommerce platform from the ground up. Led product development, team coordination, and business strategy.",
    highlights: [
      "Led end-to-end product development",
      "Scaled platform to 10,000+ customers",
      "Implemented AI-powered recommendations",
      "Managed cross-functional team of 8",
    ],
    type: "founder",
  },
  {
    title: "AI Engineer",
    company: "Freelance / Consulting",
    location: "Remote",
    period: "2022 - Present",
    description: "Delivering cutting-edge AI solutions for startups and enterprises. Specializing in NLP, Computer Vision, and AI automation systems.",
    highlights: [
      "Built 15+ AI-powered solutions",
      "RAG systems & LLM integration",
      "Computer Vision deployments",
      "Workflow automation platforms",
    ],
    type: "professional",
  },
  {
    title: "Full Stack Developer",
    company: "Various Clients",
    location: "Remote",
    period: "2019 - 2022",
    description: "Developed custom web applications and digital solutions for diverse clients across multiple industries.",
    highlights: [
      "30+ successful projects delivered",
      "Modern stack implementation",
      "API development & integration",
      "Cloud architecture design",
    ],
    type: "freelance",
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div 
                    className={`p-6 md:p-8 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-2 md:justify-end mb-3 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li 
                          key={hIndex} 
                          className={`flex items-center gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
