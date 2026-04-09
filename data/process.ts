import { ProcessPhase } from "@/types";

export const processData = {
  philosophy: {
    title: "How I Think",
    description:
      "I don't follow a linear process. I dance between intuition and structure, letting each project find its own rhythm.",
    quote:
      "The best ideas don't come from following rules. They come from knowing when to break them.",
  },

  phases: [
    {
      id: "listen",
      title: "Listen",
      subtitle: "Understanding before acting",
      duration: "1-2 weeks",
      color: "#D46A4A",
      activities: [
        "Stakeholder interviews and empathy mapping",
        "Competitive analysis with emotional lens",
        "User journey mapping (before & after)",
        "Technology audit and constraints mapping",
      ],
      deliverables: [
        "Research Synthesis",
        "Problem Statement",
        "Success Metrics",
      ],
      tools: ["Miro", "Otter.ai", "Notion", "FigJam"],
      visual: "waveform",
    },
    {
      id: "wander",
      title: "Wander",
      subtitle: "Exploring without destination",
      duration: "1-3 weeks",
      color: "#E8C468",
      activities: [
        "Sketching and rapid prototyping",
        "Material exploration (digital + physical)",
        "Inspiration mining across disciplines",
        "Wild ideas session (no constraints)",
      ],
      deliverables: [
        "Concept Board",
        "Prototype Library",
        "Direction Proposals",
      ],
      tools: ["Procreate", "Figma", "After Effects", "Pen & Paper"],
      visual: "constellation",
    },
    {
      id: "build",
      title: "Build",
      subtitle: "Making it real",
      duration: "3-8 weeks",
      color: "#2E5E4E",
      activities: [
        "Iterative development in sprints",
        "User testing with prototype fidelity",
        "Design system implementation",
        "Performance and accessibility optimization",
      ],
      deliverables: ["Working Prototype", "Design System", "Test Results"],
      tools: ["VS Code", "Figma", "Storybook", "Jest"],
      visual: "blocks",
    },
    {
      id: "reflect",
      title: "Reflect",
      subtitle: "Learning from what emerged",
      duration: "1 week",
      color: "#8B7D6B",
      activities: [
        "Post-mortem and knowledge capture",
        "Impact measurement against metrics",
        "Documentation and case study creation",
        "Next iteration planning",
      ],
      deliverables: ["Case Study", "Learnings Doc", "Roadmap"],
      tools: ["Notion", "Loom", "Miro"],
      visual: "spiral",
    },
  ] as ProcessPhase[],

  principles: [
    {
      title: "Start with Why, But Stay Open to Where",
      description:
        "Purpose matters, but so does discovery. I set north stars, not rigid paths.",
    },
    {
      title: "Make It Feel Alive",
      description:
        "Interfaces should breathe. Motion, texture, and responsiveness create presence.",
    },
    {
      title: "Design for Humans, Not Screens",
      description:
        "Every decision affects a person. I prioritize emotional impact over technical elegance.",
    },
    {
      title: "Embrace Constraints Creatively",
      description:
        "Limitations aren't obstacles—they're invitations to innovate differently.",
    },
  ],

  tools: {
    design: ["Figma", "Adobe Creative Suite", "Procreate", "After Effects"],
    code: [
      "React/Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Node.js",
    ],
    research: ["Miro", "UserTesting.com", "Optimal Workshop", "Hotjar"],
    productivity: ["Notion", "Linear", "Superhuman", "Raycast"],
  },
};
