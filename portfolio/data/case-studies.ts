// export const caseStudies = [
//   {
//     slug: "quiet-interface-deep-dive",
//     title: "The Quiet Interface",
//     subtitle: "Designing for digital calm in an age of chaos",
//     client: "Independent Research",
//     year: "2024",
//     duration: "4 months",
//     role: "Lead Designer & Developer",
//     team: "Solo project with 12 beta testers",

//     challenge:
//       "Users spend an average of 4+ hours daily in infinite scroll interfaces, leading to documented anxiety, reduced attention spans, and a sense of losing control over their digital lives. Existing 'focus' tools were punitive (blocking content) rather than restorative (changing relationships with technology).",

//     solution:
//       "The Quiet Interface is a browser extension and philosophy that doesn't block—it transforms. It replaces infinite scroll with intentional pagination, converts notifications into ambient soundscapes, and introduces 'breathing spaces' (micro-meditations) between interactions.",

//     impact: [
//       "40% reduction in self-reported anxiety after 2 weeks",
//       "2.3x more intentional browsing sessions",
//       "89% of users kept the extension after 30 days",
//       "Featured in 'Tools for Thought' newsletter",
//     ],

//     process: [
//       {
//         phase: "Research",
//         steps: [
//           "Conducted 25 user interviews about digital habits",
//           "Analyzed 500+ hours of screen time data",
//           "Studied behavioral psychology and attention theory",
//           "Created empathy maps and user journey diagrams",
//         ],
//         insights:
//           "Most 'productivity' tools fail because they fight human nature instead of working with it. People don't want to be locked out—they want to feel in control.",
//       },
//       {
//         phase: "Ideation",
//         steps: [
//           "Sketching 50+ intervention concepts",
//           "Prototyping 12 different 'pause' mechanisms",
//           "Testing with paper prototypes and roleplay",
//           "Iterating based on emotional response, not just usability",
//         ],
//         insights:
//           "The most effective interventions were gentle nudges, not hard blocks. A 3-second fade-in before content loads creates anticipation rather than frustration.",
//       },
//       {
//         phase: "Development",
//         steps: [
//           "Built Chrome extension with React + Tailwind",
//           "Implemented custom scroll detection algorithms",
//           "Created ambient sound generator using Web Audio API",
//           "Added analytics to track behavior change (anonymously)",
//         ],
//         insights:
//           "Performance matters immensely—the intervention must be faster than the content it's modifying, or users will disable it.",
//       },
//       {
//         phase: "Testing",
//         steps: [
//           "12-week beta with 50 users",
//           "Weekly surveys and usage data analysis",
//           "A/B tested different intervention intensities",
//           "Iterated based on qualitative feedback",
//         ],
//         insights:
//           "Users wanted customization—some needed stronger interventions, others just wanted visual cues. One size doesn't fit all.",
//       },
//     ],

//     technologies: [
//       "React 18",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Chrome Extension API",
//       "Web Audio API",
//       "IndexedDB",
//       "PocketBase (analytics)",
//     ],

//     designAssets: [
//       { type: "Wireframes", url: "/case-studies/quiet/wireframes.pdf" },
//       { type: "User Flows", url: "/case-studies/quiet/flows.pdf" },
//       { type: "Design System", url: "/case-studies/quiet/design-system.pdf" },
//     ],

//     images: {
//       hero: "/images/case-studies/quiet/hero.jpg",
//       process: [
//         "/images/case-studies/quiet/sketch1.jpg",
//         "/images/case-studies/quiet/sketch2.jpg",
//         "/images/case-studies/quiet/prototype.jpg",
//       ],
//       final: "/images/case-studies/quiet/final.jpg",
//     },

//     testimonial: {
//       quote:
//         "This changed how I think about my relationship with technology. I don't feel 'managed'—I feel supported.",
//       author: "Sarah Chen",
//       role: "Digital Wellness Researcher",
//     },

//     metrics: {
//       users: "2,500+",
//       rating: "4.8/5",
//       retention: "89%",
//     },

//     links: {
//       live: "https://quietinterface.com",
//       github: "https://github.com/yourname/quiet-interface",
//       caseStudyPDF: "/case-studies/quiet-interface.pdf",
//     },

//     relatedProjects: ["concrete-poetry", "invisible-cities"],
//   },
//   {
//     slug: "invisible-cities-mapping-narrative",
//     title: "Invisible Cities Map",
//     subtitle: "Building a non-linear storytelling engine",
//     client: "Digital Literature Foundation",
//     year: "2023",
//     duration: "6 months",
//     role: "Creative Director & Lead Developer",
//     team: "Myself + 2 writers + 1 illustrator",

//     challenge:
//       "Italo Calvino's 'Invisible Cities' is intentionally non-linear, but most digital adaptations force readers into linear paths. How might we create an experience that honors the book's wandering, dreamlike quality while still being navigable?",

//     solution:
//       "An interactive map where every click reveals a new story fragment, and no two journeys are the same. The map 'remembers' your path and visualizes how your story connects to others who have explored before you.",

//     impact: [
//       "50,000+ unique journeys created in first month",
//       "Average session time: 18 minutes (industry avg: 3-5)",
//       "Used in 12 university literature courses",
//       "Won 'Best Digital Narrative' at Electronic Literature Awards",
//     ],

//     process: [
//       {
//         phase: "Research",
//         steps: [
//           "Close reading of Calvino's text and narrative structure",
//           "Analysis of non-linear games (Outer Wilds, Her Story)",
//           "User interviews with literary readers",
//           "Technical exploration of graph databases",
//         ],
//         insights:
//           "Non-linearity works when there's still a sense of progression—users need to feel they're discovering something, not just wandering randomly.",
//       },
//       {
//         phase: "Architecture",
//         steps: [
//           "Designed graph-based narrative structure",
//           "Built prototype with 20 interconnected nodes",
//           "Created visualization engine for user paths",
//           "Developed writing guidelines for 50+ fragments",
//         ],
//         insights:
//           "The database structure matters enormously—we iterated 4 times before finding a model that allowed both flexibility and coherence.",
//       },
//       {
//         phase: "Creation",
//         steps: [
//           "Wrote and edited 55 story fragments",
//           "Commissioned illustrations for each city",
//           "Built interactive map with Canvas API",
//           "Added ambient audio for emotional texture",
//         ],
//         insights:
//           "Content creation took 3x longer than expected. Next time, I'd start with a smaller scope and expand.",
//       },
//       {
//         phase: "Launch",
//         steps: [
//           "Soft launch to 100 beta users",
//           "Gathered path data and heatmaps",
//           "Optimized for mobile (major challenge)",
//           "Public launch with press outreach",
//         ],
//         insights:
//           "The 'shared paths' feature (showing where others went) became unexpectedly popular—people love feeling connected to other explorers.",
//       },
//     ],

//     technologies: [
//       "Next.js",
//       "Canvas API",
//       "Graph Database (Neo4j)",
//       "GSAP",
//       "LocalStorage for path persistence",
//       "Vercel Analytics",
//     ],

//     designAssets: [
//       { type: "Narrative Map", url: "/case-studies/cities/narrative-map.pdf" },
//       {
//         type: "Technical Architecture",
//         url: "/case-studies/cities/architecture.pdf",
//       },
//     ],

//     images: {
//       hero: "/images/case-studies/cities/hero.jpg",
//       process: [
//         "/images/case-studies/cities/sketch1.jpg",
//         "/images/case-studies/cities/map-design.jpg",
//       ],
//       final: "/images/case-studies/cities/final.jpg",
//     },

//     testimonial: {
//       quote:
//         "Finally, a digital adaptation that understands Calvino. It feels like dreaming.",
//       author: "Dr. Elena Rossi",
//       role: "Professor of Digital Literature, Columbia University",
//     },

//     metrics: {
//       sessions: "85,000+",
//       countries: "112",
//       retention: "34% returning",
//     },

//     links: {
//       live: "https://invisiblecitiesmap.com",
//       github: "https://github.com/yourname/invisible-cities",
//       caseStudyPDF: "/case-studies/invisible-cities.pdf",
//     },

//     relatedProjects: ["quiet-interface", "concrete-poetry"],
//   },
// ];

import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "quiet-interface-deep-dive",
    title: "The Quiet Interface",
    subtitle: "Designing for digital calm in an age of chaos",
    client: "Independent Research",
    year: "2024",
    duration: "4 months",
    role: "Lead Designer & Developer",
    team: "Solo project with 12 beta testers",

    challenge:
      "Users spend an average of 4+ hours daily in infinite scroll interfaces, leading to documented anxiety, reduced attention spans, and a sense of losing control over their digital lives. Existing 'focus' tools were punitive (blocking content) rather than restorative (changing relationships with technology).",

    solution:
      "The Quiet Interface is a browser extension and philosophy that doesn't block—it transforms. It replaces infinite scroll with intentional pagination, converts notifications into ambient soundscapes, and introduces 'breathing spaces' (micro-meditations) between interactions.",

    impact: [
      "40% reduction in self-reported anxiety after 2 weeks",
      "2.3x more intentional browsing sessions",
      "89% of users kept the extension after 30 days",
      "Featured in 'Tools for Thought' newsletter",
    ],

    process: [
      {
        phase: "Research",
        steps: [
          "Conducted 25 user interviews about digital habits",
          "Analyzed 500+ hours of screen time data",
          "Studied behavioral psychology and attention theory",
          "Created empathy maps and user journey diagrams",
        ],
        insights:
          "Most 'productivity' tools fail because they fight human nature instead of working with it. People don't want to be locked out—they want to feel in control.",
      },
      {
        phase: "Ideation",
        steps: [
          "Sketching 50+ intervention concepts",
          "Prototyping 12 different 'pause' mechanisms",
          "Testing with paper prototypes and roleplay",
          "Iterating based on emotional response, not just usability",
        ],
        insights:
          "The most effective interventions were gentle nudges, not hard blocks. A 3-second fade-in before content loads creates anticipation rather than frustration.",
      },
      {
        phase: "Development",
        steps: [
          "Built Chrome extension with React + Tailwind",
          "Implemented custom scroll detection algorithms",
          "Created ambient sound generator using Web Audio API",
          "Added analytics to track behavior change (anonymously)",
        ],
        insights:
          "Performance matters immensely—the intervention must be faster than the content it's modifying, or users will disable it.",
      },
      {
        phase: "Testing",
        steps: [
          "12-week beta with 50 users",
          "Weekly surveys and usage data analysis",
          "A/B tested different intervention intensities",
          "Iterated based on qualitative feedback",
        ],
        insights:
          "Users wanted customization—some needed stronger interventions, others just wanted visual cues. One size doesn't fit all.",
      },
    ],

    technologies: [
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "Chrome Extension API",
      "Web Audio API",
      "IndexedDB",
      "PocketBase (analytics)",
    ],

    designAssets: [
      { type: "Wireframes", url: "/case-studies/quiet/wireframes.pdf" },
      { type: "User Flows", url: "/case-studies/quiet/flows.pdf" },
      { type: "Design System", url: "/case-studies/quiet/design-system.pdf" },
    ],

    images: {
      hero: "/images/case-studies/quiet/hero.jpg",
      process: [
        "/images/case-studies/quiet/sketch1.jpg",
        "/images/case-studies/quiet/sketch2.jpg",
      ],
      final: "/images/case-studies/quiet/final.jpg",
    },

    testimonial: {
      quote:
        "This changed how I think about my relationship with technology. I don't feel 'managed'—I feel supported.",
      author: "Sarah Chen",
      role: "Digital Wellness Researcher",
    },

    metrics: {
      users: "2,500+",
      rating: "4.8/5",
      retention: "89%",
    },

    links: {
      live: "https://quietinterface.com",
      github: "https://github.com/yourname/quiet-interface",
      caseStudyPDF: "/case-studies/quiet-interface.pdf",
    },

    relatedProjects: ["concrete-poetry", "invisible-cities"],
  },
  {
    slug: "invisible-cities-mapping-narrative",
    title: "Invisible Cities Map",
    subtitle: "Building a non-linear storytelling engine",
    client: "Digital Literature Foundation",
    year: "2023",
    duration: "6 months",
    role: "Creative Director & Lead Developer",
    team: "Myself + 2 writers + 1 illustrator",

    challenge:
      "Italo Calvino's 'Invisible Cities' is intentionally non-linear, but most digital adaptations force readers into linear paths. How might we create an experience that honors the book's wandering, dreamlike quality while still being navigable?",

    solution:
      "An interactive map where every click reveals a new story fragment, and no two journeys are the same. The map 'remembers' your path and visualizes how your story connects to others who have explored before you.",

    impact: [
      "50,000+ unique journeys created in first month",
      "Average session time: 18 minutes (industry avg: 3-5)",
      "Used in 12 university literature courses",
      "Won 'Best Digital Narrative' at Electronic Literature Awards",
    ],

    process: [
      {
        phase: "Research",
        steps: [
          "Close reading of Calvino's text and narrative structure",
          "Analysis of non-linear games (Outer Wilds, Her Story)",
          "User interviews with literary readers",
          "Technical exploration of graph databases",
        ],
        insights:
          "Non-linearity works when there's still a sense of progression—users need to feel they're discovering something, not just wandering randomly.",
      },
      {
        phase: "Architecture",
        steps: [
          "Designed graph-based narrative structure",
          "Built prototype with 20 interconnected nodes",
          "Created visualization engine for user paths",
          "Developed writing guidelines for 50+ fragments",
        ],
        insights:
          "The database structure matters enormously—we iterated 4 times before finding a model that allowed both flexibility and coherence.",
      },
      {
        phase: "Creation",
        steps: [
          "Wrote and edited 55 story fragments",
          "Commissioned illustrations for each city",
          "Built interactive map with Canvas API",
          "Added ambient audio for emotional texture",
        ],
        insights:
          "Content creation took 3x longer than expected. Next time, I'd start with a smaller scope and expand.",
      },
      {
        phase: "Launch",
        steps: [
          "Soft launch to 100 beta users",
          "Gathered path data and heatmaps",
          "Optimized for mobile (major challenge)",
          "Public launch with press outreach",
        ],
        insights:
          "The 'shared paths' feature (showing where others went) became unexpectedly popular—people love feeling connected to other explorers.",
      },
    ],

    technologies: [
      "Next.js",
      "Canvas API",
      "Graph Database (Neo4j)",
      "GSAP",
      "LocalStorage for path persistence",
      "Vercel Analytics",
    ],

    designAssets: [
      { type: "Narrative Map", url: "/case-studies/cities/narrative-map.pdf" },
      {
        type: "Technical Architecture",
        url: "/case-studies/cities/architecture.pdf",
      },
    ],

    images: {
      hero: "/images/case-studies/cities/hero.jpg",
      process: [
        "/images/case-studies/cities/sketch1.jpg",
        "/images/case-studies/cities/map-design.jpg",
      ],
      final: "/images/case-studies/cities/final.jpg",
    },

    testimonial: {
      quote:
        "Finally, a digital adaptation that understands Calvino. It feels like dreaming.",
      author: "Dr. Elena Rossi",
      role: "Professor of Digital Literature, Columbia University",
    },

    metrics: {
      sessions: "85,000+",
      countries: "112",
      retention: "34% returning",
    },

    links: {
      live: "https://invisiblecitiesmap.com",
      github: "https://github.com/yourname/invisible-cities",
      caseStudyPDF: "/case-studies/invisible-cities.pdf",
    },

    relatedProjects: ["quiet-interface", "concrete-poetry"],
  },
];
