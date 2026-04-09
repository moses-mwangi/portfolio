// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ProcessTimeline({ phases }) {
//   const [expandedPhase, setExpandedPhase] = useState(null);

//   return (
//     <div className="relative">
//       {/* Timeline line */}
//       <div
//         className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
//         style={{ backgroundColor: "var(--border-color)" }}
//       />

//       <div className="space-y-12">
//         {phases.map((phase, idx) => (
//           <motion.div
//             key={phase.id}
//             initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.1 }}
//             className={`relative flex flex-col md:flex-row items-start gap-6 ${
//               idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             }`}
//           >
//             {/* Timeline dot */}
//             <div
//               className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full z-10"
//               style={{ backgroundColor: phase.color }}
//             />

//             {/* Content */}
//             <div
//               className={`w-full md:w-5/12 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
//             >
//               <div
//                 className="p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
//                 style={{
//                   backgroundColor: "var(--bg-secondary)",
//                   borderLeft: `4px solid ${phase.color}`,
//                 }}
//                 onClick={() =>
//                   setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
//                 }
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <div className="text-sm font-mono opacity-50 mb-1">
//                       Phase 0{idx + 1}
//                     </div>
//                     <h3 className="text-xl font-medium">{phase.title}</h3>
//                     <p className="text-sm opacity-60 mt-1">{phase.subtitle}</p>
//                   </div>
//                   <div className="text-xs opacity-40 font-mono">
//                     {phase.duration}
//                   </div>
//                 </div>

//                 <div className="flex gap-2 mt-3">
//                   {phase.activities.slice(0, 2).map((activity) => (
//                     <span
//                       key={activity}
//                       className="text-xs px-2 py-1 rounded-full"
//                       style={{ backgroundColor: `${phase.color}20` }}
//                     >
//                       {activity.substring(0, 20)}...
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-3 text-xs opacity-50">
//                   Click to expand {expandedPhase === phase.id ? "▲" : "▼"}
//                 </div>

//                 <AnimatePresence>
//                   {expandedPhase === phase.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-4 pt-4 border-t"
//                       style={{ borderColor: "var(--border-color)" }}
//                     >
//                       <div className="space-y-4">
//                         <div>
//                           <h4 className="text-xs font-mono opacity-50 mb-2">
//                             Activities
//                           </h4>
//                           <ul className="space-y-1">
//                             {phase.activities.map((activity) => (
//                               <li key={activity} className="text-sm flex gap-2">
//                                 <span>•</span>
//                                 <span>{activity}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div>
//                           <h4 className="text-xs font-mono opacity-50 mb-2">
//                             Deliverables
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {phase.deliverables.map((d) => (
//                               <span
//                                 key={d}
//                                 className="text-xs px-2 py-1 rounded"
//                                 style={{ backgroundColor: `${phase.color}20` }}
//                               >
//                                 {d}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         <div>
//                           <h4 className="text-xs font-mono opacity-50 mb-2">
//                             Tools
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {phase.tools.map((tool) => (
//                               <span
//                                 key={tool}
//                                 className="text-xs px-2 py-1 rounded"
//                                 style={{ backgroundColor: "var(--bg-primary)" }}
//                               >
//                                 {tool}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProcessPhase } from "@/types";

interface ProcessTimelineProps {
  phases: ProcessPhase[];
}

export default function ProcessTimeline({ phases }: ProcessTimelineProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--border-color)" }}
      />

      <div className="space-y-12">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start gap-6 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{ backgroundColor: phase.color }}
            />

            {/* Content */}
            <div
              className={`w-full md:w-5/12 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
            >
              <div
                className="p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderLeft: `4px solid ${phase.color}`,
                }}
                onClick={() =>
                  setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
                }
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-mono opacity-50 mb-1">
                      Phase 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-medium">{phase.title}</h3>
                    <p className="text-sm opacity-60 mt-1">{phase.subtitle}</p>
                  </div>
                  <div className="text-xs opacity-40 font-mono">
                    {phase.duration}
                  </div>
                </div>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {phase.activities.slice(0, 2).map((activity) => (
                    <span
                      key={activity}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${phase.color}20` }}
                    >
                      {activity.substring(0, 20)}...
                    </span>
                  ))}
                </div>

                <div className="mt-3 text-xs opacity-50">
                  Click to expand {expandedPhase === phase.id ? "▲" : "▼"}
                </div>

                <AnimatePresence>
                  {expandedPhase === phase.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-mono opacity-50 mb-2">
                            Activities
                          </h4>
                          <ul className="space-y-1">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="text-sm flex gap-2">
                                <span>•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono opacity-50 mb-2">
                            Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((d) => (
                              <span
                                key={d}
                                className="text-xs px-2 py-1 rounded"
                                style={{ backgroundColor: `${phase.color}20` }}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono opacity-50 mb-2">
                            Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs px-2 py-1 rounded"
                                style={{ backgroundColor: "var(--bg-primary)" }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
