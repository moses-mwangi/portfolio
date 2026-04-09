// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function CaseStudyNav({ sections }) {
//   const [activeSection, setActiveSection] = useState("");
//   const [isVisible, setIsVisible] = useState(true);
//   let lastScrollY = 0;

//   useEffect(() => {
//     const handleScroll = () => {
//       // Hide on scroll down, show on scroll up
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
//       lastScrollY = currentScrollY;

//       // Determine active section
//       const sectionElements = sections.map((s) =>
//         document.getElementById(`phase-${s.toLowerCase().replace(/\s/g, "-")}`),
//       );
//       for (let i = sectionElements.length - 1; i >= 0; i--) {
//         const element = sectionElements[i];
//         if (element && element.getBoundingClientRect().top <= 200) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [sections]);

//   if (!isVisible) return null;

//   return (
//     <motion.div
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-20 z-30 max-w-5xl mx-auto px-6 mb-8"
//     >
//       <div
//         className="flex flex-wrap justify-center gap-2 p-2 rounded-full"
//         style={{
//           backgroundColor: "var(--bg-secondary)",
//           border: "1px solid var(--border-color)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         {sections.map((section) => (
//           <button
//             key={section}
//             onClick={() => {
//               const element = document.getElementById(
//                 `phase-${section.toLowerCase().replace(/\s/g, "-")}`,
//               );
//               if (element)
//                 element.scrollIntoView({ behavior: "smooth", block: "start" });
//             }}
//             className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
//               activeSection === section ? "font-medium" : "opacity-50"
//             }`}
//             style={{
//               backgroundColor:
//                 activeSection === section ? "#D46A4A20" : "transparent",
//               color:
//                 activeSection === section ? "#D46A4A" : "var(--text-primary)",
//             }}
//           >
//             {section}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CaseStudyNavProps {
  sections: string[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;

      const sectionElements = sections.map((s) =>
        document.getElementById(`phase-${s.toLowerCase().replace(/\s/g, "-")}`),
      );
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-20 z-30 max-w-5xl mx-auto px-6 mb-8"
    >
      <div
        className="flex flex-wrap justify-center gap-2 p-2 rounded-full"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          backdropFilter: "blur(10px)",
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              const element = document.getElementById(
                `phase-${section.toLowerCase().replace(/\s/g, "-")}`,
              );
              if (element)
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeSection === section ? "font-medium" : "opacity-50"
            }`}
            style={{
              backgroundColor:
                activeSection === section ? "#D46A4A20" : "transparent",
              color:
                activeSection === section ? "#D46A4A" : "var(--text-primary)",
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
