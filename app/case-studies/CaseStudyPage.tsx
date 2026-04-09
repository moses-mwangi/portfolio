"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTheme } from "@/contexts/ThemeContext";

import CaseStudyNav from "@/components/CaseStudyNav";
import { caseStudies } from "@/data/case-studies";
import { artifacts } from "@/data/artifacts";
import CaseStudiesIndex from "@/components/CaseStudyIndex";

export default function CaseStudyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const { resolvedTheme } = useTheme();
  const [study, setStudy] = useState<ReturnType<
    typeof caseStudies.find
  > | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<
    ReturnType<typeof artifacts.filter> | []
  >([]);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    if (slug) {
      const found = caseStudies.find((cs) => cs.slug === slug);
      setStudy(found);

      if (found?.relatedProjects) {
        const related = artifacts.filter((a) =>
          found.relatedProjects.includes(a.id),
        );
        setRelatedProjects(related);
      }
    }
  }, [slug]);

  if (!study || slug === null) {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <CaseStudiesIndex />
        </Suspense>
      </>
    );
  }

  {
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-primary)",
          }}
        >
          <Header />

          {/* Sticky Navigation */}
          <CaseStudyNav sections={study.process.map((p) => p.phase)} />

          {/* Hero Section */}
          <section className="pt-32 pb-16">
            <div className="max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 text-sm mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: "#D46A4A20", color: "#D46A4A" }}
                  >
                    Case Study
                  </span>
                  <span className="opacity-40">{study.year}</span>
                  <span className="opacity-40">•</span>
                  <span className="opacity-40">{study.duration}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                  {study.title}
                </h1>
                <p className="text-xl opacity-70 max-w-3xl leading-relaxed">
                  {study.subtitle}
                </p>

                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div>
                    <div className="text-xs font-mono opacity-40 mb-1">
                      Role
                    </div>
                    <div className="text-sm">{study.role}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono opacity-40 mb-1">
                      Client
                    </div>
                    <div className="text-sm">{study.client}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono opacity-40 mb-1">
                      Team
                    </div>
                    <div className="text-sm">{study.team}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono opacity-40 mb-1">
                      Timeline
                    </div>
                    <div className="text-sm">{study.duration}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <div
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="aspect-video relative">
                {/* Replace with actual image */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: "#D46A4A20" }}
                >
                  <span className="opacity-30">📸 Hero Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="max-w-5xl mx-auto px-6 mb-24">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-0.5 mb-6"
                  style={{ backgroundColor: "#D46A4A" }}
                />
                <h2 className="text-2xl font-light mb-4">The Challenge</h2>
                <p className="leading-relaxed opacity-80">{study.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-0.5 mb-6"
                  style={{ backgroundColor: "#E8C468" }}
                />
                <h2 className="text-2xl font-light mb-4">The Solution</h2>
                <p className="leading-relaxed opacity-80">{study.solution}</p>
              </motion.div>
            </div>
          </div>

          {/* Process Deep Dive */}
          <div
            className="bg-opacity-30 py-20 mb-20"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-3">The Process</h2>
                <p className="opacity-60">
                  How we got from problem to solution
                </p>
              </div>

              <div className="space-y-16">
                {study.process.map((phase, idx) => (
                  <motion.div
                    key={idx}
                    id={`phase-${phase.phase.toLowerCase().replace(/\s/g, "-")}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                        style={{
                          backgroundColor: "#D46A4A20",
                          color: "#D46A4A",
                        }}
                      >
                        {idx + 1}
                      </div>
                      <h3 className="text-2xl font-light">{phase.phase}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 ml-4 md:ml-16">
                      <div>
                        <h4 className="text-sm font-mono opacity-50 mb-3">
                          Key Steps
                        </h4>
                        <ul className="space-y-2">
                          {phase.steps.map((step, stepIdx) => (
                            <li key={stepIdx} className="flex gap-3 text-sm">
                              <span className="opacity-40">→</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: "var(--bg-primary)" }}
                      >
                        <h4 className="text-sm font-mono opacity-50 mb-2">
                          Key Insight
                        </h4>
                        <p className="text-sm italic opacity-80">
                          {phase.insights}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="max-w-5xl mx-auto px-6 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-3">The Impact</h2>
              <p className="opacity-60">Measurable outcomes and responses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {Object.entries(study.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <div className="text-3xl font-light mb-2">{value}</div>
                  <div className="text-xs font-mono opacity-50 uppercase">
                    {key}
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-3 max-w-2xl mx-auto">
              {study.impact.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 text-sm"
                >
                  <span className="text-[#D46A4A]">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          {study.testimonial && (
            <div className="max-w-4xl mx-auto px-6 mb-20">
              <div
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <div className="text-4xl mb-4 opacity-30">"</div>
                <p className="text-xl italic leading-relaxed">
                  {study.testimonial.quote}
                </p>
                <div className="mt-6">
                  <div className="font-medium">{study.testimonial.author}</div>
                  <div className="text-sm opacity-50">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="max-w-5xl mx-auto px-6 mb-20">
            <h3 className="text-sm font-mono opacity-50 mb-4 text-center">
              Technologies Used
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="max-w-6xl mx-auto px-6 mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light">Related Explorations</h3>
                <p className="opacity-50 text-sm">
                  Projects that share similar themes or techniques
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-lg cursor-pointer"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                    onClick={() => router.push(`/case-study/${project.id}`)}
                  >
                    <div className="text-sm opacity-50 mb-2">
                      {project.category}
                    </div>
                    <h4 className="text-lg font-medium mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm opacity-70">{project.memory}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Links & Downloads */}
          <div className="max-w-5xl mx-auto px-6 mb-20">
            <div className="flex flex-wrap justify-center gap-4">
              {study.links.live && (
                <a
                  href={study.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm transition hover:opacity-70"
                  style={{ backgroundColor: "#D46A4A", color: "white" }}
                >
                  View Live Project →
                </a>
              )}
              {study.links.github && (
                <a
                  href={study.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm border transition hover:opacity-70"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  View Code
                </a>
              )}
              {study.links.caseStudyPDF && (
                <a
                  href={study.links.caseStudyPDF}
                  download
                  className="px-6 py-3 rounded-full text-sm border transition hover:opacity-70"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  Download PDF ↓
                </a>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </Suspense>
    </>
  );
}
