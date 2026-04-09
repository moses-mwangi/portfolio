"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Moses transformed our business with AI automation. We went from 20 hours/week on manual tasks to just 2 hours. His expertise in LangChain and custom AI agents is exceptional.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The NLP chatbot Moses built for our customer support has reduced tickets by 70%. It's like having a team member who never sleeps and knows everything about our products.",
    author: "Michael Chen",
    role: "Product Manager, ShopEasy",
    rating: 5,
  },
  {
    quote: "Working with Moses on our computer vision system was incredible. His understanding of both the technical and business aspects made the project a huge success.",
    author: "David Williams",
    role: "CTO, ManufacTech",
    rating: 5,
  },
  {
    quote: "He doesn't just build AI—he understands how to apply it to real business problems. Our recommendation engine increased conversions by 40%.",
    author: "Emily Rodriguez",
    role: "Founder, FashionHub",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <motion.div
        className="container relative mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary font-mono text-lg">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take my word for it—hear from some of the amazing people I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
