import React, { useEffect } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProcessTimeline from "@/app/process/ProcessTimeline";
import ThinkingVisualization from "@/app/process/ThinkingVisualization";
import { processData } from "@/data/process";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProcessPage() {
  const { resolvedTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <Head>
        <title>Process — How I Think & Make | Living Archive</title>
        <meta
          name="description"
          content="A transparent look into my creative process, philosophy, and tools. No black boxes here."
        />
      </Head>

      <div
        className="min-h-screen"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Header />

        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div
                className="w-16 h-0.5 mb-8"
                style={{ backgroundColor: "#D46A4A" }}
              />
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                How I Think &
                <span className="italic block mt-2"> Make Things</span>
              </h1>
              <p className="text-xl opacity-70 leading-relaxed">
                {processData.philosophy.description}
              </p>
              <div
                className="mt-8 p-6 rounded-lg italic border-l-4"
                style={{
                  borderColor: "#D46A4A",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <p className="text-lg">"{processData.philosophy.quote}"</p>
              </div>
            </motion.div>
          </section>

          {/* Interactive Visualization */}
          <section className="mb-32">
            <ThinkingVisualization />
          </section>

          {/* Process Timeline */}
          <section className="max-w-6xl mx-auto px-6 mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                The Phases
              </h2>
              <p className="opacity-60 max-w-2xl mx-auto">
                Every project moves differently, but these are the territories I
                explore
              </p>
            </div>
            <ProcessTimeline phases={processData.phases} />
          </section>

          {/* Principles Grid */}
          <section className="max-w-6xl mx-auto px-6 mb-32">
            <div className="grid md:grid-cols-2 gap-8">
              {processData.principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div className="text-4xl mb-4">0{idx + 1}</div>
                  <h3 className="text-xl font-medium mb-3">
                    {principle.title}
                  </h3>
                  <p className="opacity-70 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tools Stack */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                The Toolkit
              </h2>
              <p className="opacity-60">Instruments I've learned to trust</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {Object.entries(processData.tools).map(
                ([category, tools], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <h3 className="text-sm font-mono tracking-wider opacity-50 mb-4 uppercase">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {tools.map((tool) => (
                        <div key={tool} className="text-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
