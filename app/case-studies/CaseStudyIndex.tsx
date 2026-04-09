import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";

export default function CaseStudiesIndex() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Header />

        <main className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                Case Studies
              </h1>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                Deep dives into my most significant projects — the challenges,
                the process, and what I learned.
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, idx) => (
                <Link
                  key={study.slug}
                  href={`/case-studies?slug=${study.slug}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer p-8 rounded-xl transition-all duration-300 hover:scale-[1.01]"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-sm mb-4">
                          <span
                            className="px-2 py-1 rounded text-xs"
                            style={{
                              backgroundColor: "#D46A4A20",
                              color: "#D46A4A",
                            }}
                          >
                            {study.year}
                          </span>
                          <span className="opacity-40">{study.duration}</span>
                        </div>
                        <h2 className="text-3xl font-light mb-3 group-hover:translate-x-1 transition-transform">
                          {study.title}
                        </h2>
                        <p className="opacity-70 mb-4">{study.subtitle}</p>
                        <div className="flex items-center gap-2 text-sm opacity-40 group-hover:opacity-100 transition">
                          <span>Read case study</span>
                          <span>→</span>
                        </div>
                      </div>
                      <div
                        className="md:w-48 h-32 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#D46A4A10" }}
                      >
                        {/* <span className="text-xs opacity-30">
                          📸 Preview {study.images.hero}
                          <Image
                            src={study.images.hero}
                            alt="hh"
                            width={200}
                            height={200}
                          />
                        </span> */}

                        <span className="text-xs opacity-30">
                          <Image
                            src={study.images.final}
                            alt={`Preview of ${study.title}`}
                            width={200}
                            height={200}
                            unoptimized
                            className="rounded-lg"
                          />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
