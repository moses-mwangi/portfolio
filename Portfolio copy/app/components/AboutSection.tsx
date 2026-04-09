"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Target, Zap, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "Leveraging cutting-edge AI to solve complex problems.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Building systems that grow with your business needs.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on measurable outcomes and real impact.",
  },
  {
    icon: Zap,
    title: "Fast Iteration",
    description: "Rapid prototyping and deployment of AI solutions.",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-lg">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Building the Future with <span className="gradient-text">Intelligent Systems</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m an AI Engineer passionate about transforming complex challenges into elegant, 
                intelligent solutions. My journey began with a fascination for how machines can learn, 
                reason, and adapt—and that curiosity has shaped my entire career.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As the <span className="text-foreground font-medium">founder of Kivamall</span>, 
                I led the development of a full-featured eCommerce platform from scratch. This 
                experience taught me end-to-end product development, from ideation to scaling 
                solutions that serve real users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I specialize in building AI-powered systems that automate workflows, extract 
                insights from data, and create seamless user experiences. I believe in 
                <span className="text-foreground font-medium"> practical AI</span>—technology 
                that delivers tangible business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "30+" },
                { label: "AI Solutions Deployed", value: "15+" },
                { label: "Client Satisfaction", value: "100%" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
