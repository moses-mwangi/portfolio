import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Artifact } from "@/types";

export default function ProjectDrawer({
  project,
  isOpen,
  onClose,
  isNight,
}: {
  // isOpen: (value: React.SetStateAction<Artifact | null>) => void;
  // onClose: (value: React.SetStateAction<Artifact | null>) => void;
  project: Artifact;
  isNight: boolean;
  isOpen: any;
  onClose: any;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-xs bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl z-50 shadow-2xl overflow-y-auto"
            style={{
              backgroundColor: isNight ? "var(--night-bg)" : "var(--paper)",
              color: isNight ? "var(--night-text)" : "var(--ink)",
            }}
          >
            <div className="p-8 md:p-12">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-60 transition"
              >
                ✕
              </button>

              {/* Project header */}
              <div
                className="w-16 h-0.5 mb-8"
                style={{ backgroundColor: project.color }}
              />

              <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                    {project.title}
                  </h2>
                  <div className="flex gap-3 mt-3 text-sm opacity-60">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.yearLong}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  {project.emotion}
                </div>
              </div>

              {/* Memory quote */}
              <div
                className="mb-8 p-6 italic border-l-2"
                style={{ borderColor: project.color }}
              >
                <p className="text-lg leading-relaxed">"{project.memory}"</p>
              </div>

              {/* Full description */}
              <div className="mb-8">
                <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                  DESCRIPTION
                </h3>
                <p className="leading-relaxed">{project.description}</p>
              </div>

              {/* Process */}
              {project.process && (
                <div className="mb-8">
                  <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                    PROCESS
                  </h3>
                  <ul className="space-y-2">
                    {project.process.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="opacity-40">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                  TOOLS & TECH
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: isNight ? "#2A2430" : "var(--blush)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div
                  className="mb-8 p-6 rounded-lg"
                  style={{
                    backgroundColor: isNight ? "#2A2430" : "var(--blush)",
                  }}
                >
                  <p className="text-sm italic leading-relaxed">
                    "{project.testimonial.text}"
                  </p>
                  <p className="text-xs mt-3 opacity-60">
                    — {project.testimonial.author}
                  </p>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full transition hover:opacity-70"
                    style={{ backgroundColor: project.color, color: "white" }}
                  >
                    Live Project →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full border transition hover:opacity-70"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    View Code
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full border transition hover:opacity-70"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
