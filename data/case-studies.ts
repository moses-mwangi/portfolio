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
      hero: "https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Quiet+Interface+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/34495e/ecf0f1?text=Research+Sketches+1&font=montserrat",
        "https://placehold.co/800x600/2c3e50/ecf0f1?text=User+Journey+Map&font=montserrat",
        "https://placehold.co/800x600/1a252f/ecf0f1?text=Prototype+Testing&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/27ae60/ffffff?text=Quiet+Interface+Final&font=montserrat",
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

    relatedProjects: ["concrete-poetry", "invisible-cities-mapping-narrative"],
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
      hero: "https://placehold.co/1920x1080/8e44ad/ecf0f1?text=Invisible+Cities+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/9b59b6/ecf0f1?text=Narrative+Map+Sketch&font=montserrat",
        "https://placehold.co/800x600/8e44ad/ecf0f1?text=Graph+Architecture&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/3498db/ffffff?text=Invisible+Cities+Final&font=montserrat",
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

    relatedProjects: ["quiet-interface-deep-dive", "concrete-poetry"],
  },
  {
    slug: "resume-builder-smart-match",
    title: "SmartMatch Resume Builder",
    subtitle: "AI-powered resume optimization with job description matching",
    client: "CareerTech Solutions",
    year: "2024",
    duration: "5 months",
    role: "Lead Product Designer & Full-Stack Developer",
    team: "Myself + 3 engineers + 1 ML specialist",

    challenge:
      "Job seekers spend 8+ hours per application tailoring resumes, yet 75% are rejected by ATS before reaching human eyes. Existing resume builders offer templates but no intelligence—users don't know why their resume fails or how to improve it.",

    solution:
      "An intelligent resume builder that analyzes job descriptions in real-time, provides match scoring (0-100%), highlights missing keywords, and suggests tailored improvements. Users can upload existing resumes or build new ones with AI-powered content suggestions.",

    impact: [
      "Average match score improved from 47% to 83% after optimization",
      "Users reported 3x faster application process",
      "4.9/5 rating from 2,000+ beta users",
      "Featured in 'Best Career Tools of 2024' by Product Hunt",
    ],

    process: [
      {
        phase: "Research",
        steps: [
          "Interviewed 50 job seekers across 12 industries",
          "Analyzed 10,000+ ATS rejection patterns",
          "Studied recruiter behavior with 15 hiring managers",
          "Mapped user journey from job search to interview",
        ],
        insights:
          "Users don't just want a resume—they want confidence. The biggest pain point is the black box of ATS systems and not knowing why they're rejected.",
      },
      {
        phase: "Design",
        steps: [
          "Created 30+ wireframes for resume editor",
          "Designed match score visualization dashboard",
          "Prototyped keyword highlighting system",
          "User tested 5 different UX flows for job description input",
        ],
        insights:
          "Visual feedback is critical—users need to see exactly where improvements are needed. Color-coded highlighting (red/yellow/green) became the core interaction pattern.",
      },
      {
        phase: "Development",
        steps: [
          "Built React + TypeScript frontend with Tailwind",
          "Integrated OpenAI API for content suggestions",
          "Created custom NLP parser for job descriptions",
          "Implemented PDF generation with jsPDF",
          "Built ATS-friendly template engine",
        ],
        insights:
          "PDF generation is surprisingly complex—ATS parsers prefer specific formatting. We had to reverse-engineer 8 major ATS systems to ensure compatibility.",
      },
      {
        phase: "Launch & Iteration",
        steps: [
          "Beta launch with 500 users",
          "Collected 2,000+ match score data points",
          "Added cover letter generator based on user feedback",
          "Launched resume scoring API for enterprise clients",
        ],
        insights:
          "Cover letter generation was a requested feature we initially deprioritized—it became our second most-used feature within 3 weeks.",
      },
    ],

    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Custom NLP Parser",
      "jsPDF",
      "Node.js/Express",
      "PostgreSQL",
      "Redis",
    ],

    designAssets: [
      { type: "User Flow", url: "/case-studies/resume-builder/user-flow.pdf" },
      {
        type: "Component Library",
        url: "/case-studies/resume-builder/components.pdf",
      },
      {
        type: "API Documentation",
        url: "/case-studies/resume-builder/api-docs.pdf",
      },
    ],

    images: {
      hero: "https://placehold.co/1920x1080/1a5276/ecf0f1?text=SmartMatch+Resume+Builder+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/2e86c1/ecf0f1?text=Resume+Editor+Wireframes&font=montserrat",
        "https://placehold.co/800x600/1b4f72/ecf0f1?text=Match+Score+Dashboard&font=montserrat",
        "https://placehold.co/800x600/2471a3/ecf0f1?text=Keyword+Highlighting+System&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/27ae60/ffffff?text=SmartMatch+Final+Product&font=montserrat",
    },

    testimonial: {
      quote:
        "I went from 0 callbacks to 3 interviews in one week after using SmartMatch. The match scoring showed me exactly what I was missing.",
      author: "Michael Torres",
      role: "Product Manager (hired via SmartMatch)",
    },

    metrics: {
      users: "15,000+",
      matchScoreAvg: "83%",
      timeSaved: "3x faster",
    },

    links: {
      live: "https://smartmatch-resume.com",
      github: "https://github.com/yourname/smartmatch-resume",
      caseStudyPDF: "/case-studies/smartmatch-resume.pdf",
    },

    relatedProjects: [
      "quiet-interface-deep-dive",
      "invisible-cities-mapping-narrative",
    ],
  },
  {
    slug: "ats-optimizer-pro",
    title: "ATS Optimizer Pro",
    subtitle: "Enterprise-grade resume parsing and optimization engine",
    client: "HR Tech Innovations",
    year: "2024",
    duration: "3 months",
    role: "Lead Developer & Integration Specialist",
    team: "Myself + 2 backend engineers",

    challenge:
      "Large enterprises receive 10,000+ applications per role, but their ATS systems reject qualified candidates due to formatting issues. Companies needed a tool to help candidates optimize resumes BEFORE submission.",

    solution:
      "An API-first resume optimizer that analyzes resumes against job descriptions, provides actionable feedback, and generates ATS-optimized versions. Includes batch processing for recruitment agencies and white-label options for enterprise clients.",

    impact: [
      "Processed 50,000+ resumes in first 2 months",
      "Reduced ATS false rejections by 67%",
      "Enterprise clients include 3 Fortune 500 companies",
      "99.9% uptime with sub-2 second response times",
    ],

    process: [
      {
        phase: "Requirements",
        steps: [
          "Interviewed 20 enterprise recruiters",
          "Analyzed 8 major ATS systems (Greenhouse, Lever, Workday, etc.)",
          "Mapped compliance requirements (GDPR, CCPA)",
          "Defined API rate limits and security protocols",
        ],
        insights:
          "Enterprise clients care most about security, compliance, and batch processing. Speed is important but reliability is critical.",
      },
      {
        phase: "Architecture",
        steps: [
          "Designed microservices architecture",
          "Built resume parsing engine with Python/Flask",
          "Created matching algorithm with TF-IDF + BERT embeddings",
          "Implemented Redis caching for performance",
          "Added rate limiting and API key management",
        ],
        insights:
          "Hybrid approach (TF-IDF for speed + BERT for accuracy) gave best results—95% match accuracy with 200ms response time.",
      },
      {
        phase: "Integration",
        steps: [
          "Built REST API with OpenAPI/Swagger docs",
          "Created SDKs for Python, JavaScript, and Ruby",
          "Developed white-label React component library",
          "Integrated with Zapier for no-code workflows",
        ],
        insights:
          "Good documentation is everything for enterprise APIs. We spent 30% of dev time on docs and it paid off in faster integrations.",
      },
      {
        phase: "Deployment",
        steps: [
          "Deployed on AWS ECS with auto-scaling",
          "Set up monitoring with Datadog",
          "Conducted security audit and penetration testing",
          "Launched with 5 beta enterprise clients",
        ],
        insights:
          "Auto-scaling is non-negotiable for unpredictable workloads. We saw 10x traffic spikes during end-of-month hiring pushes.",
      },
    ],

    technologies: [
      "Python/Flask",
      "TensorFlow (BERT)",
      "PostgreSQL",
      "Redis",
      "AWS ECS",
      "Docker",
      "OpenAPI/Swagger",
      "Datadog",
    ],

    designAssets: [
      {
        type: "API Documentation",
        url: "/case-studies/ats-optimizer/api-docs.pdf",
      },
      {
        type: "Architecture Diagram",
        url: "/case-studies/ats-optimizer/architecture.pdf",
      },
      {
        type: "Security Compliance",
        url: "/case-studies/ats-optimizer/security.pdf",
      },
    ],

    images: {
      hero: "https://placehold.co/1920x1080/1b4f72/ecf0f1?text=ATS+Optimizer+Pro+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/2e86c1/ecf0f1?text=API+Architecture&font=montserrat",
        "https://placehold.co/800x600/1a5276/ecf0f1?text=BERT+Matching+Algorithm&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/27ae60/ffffff?text=ATS+Optimizer+Dashboard&font=montserrat",
    },

    testimonial: {
      quote:
        "ATS Optimizer Pro reduced our candidate screening time by 60%. The API integration was seamless and the team provided excellent support.",
      author: "Jennifer Walsh",
      role: "VP of Talent Acquisition, Fortune 500 Tech Company",
    },

    metrics: {
      resumesProcessed: "50,000+",
      accuracy: "95%",
      uptime: "99.9%",
    },

    links: {
      live: "https://atsoptimizer.com",
      github: "https://github.com/yourname/ats-optimizer",
      caseStudyPDF: "/case-studies/ats-optimizer.pdf",
    },

    relatedProjects: ["resume-builder-smart-match"],
  },
  {
    slug: "cover-letter-generator-ai",
    title: "CoverLetter AI",
    subtitle: "Personalized cover letters that sound like you",
    client: "Independent Project",
    year: "2024",
    duration: "2 months",
    role: "Solo Developer & Designer",
    team: "Solo project with 200 beta testers",

    challenge:
      "Generic cover letters get ignored, but customizing each letter takes 30-60 minutes. Most AI cover letter tools produce robotic, generic content that recruiters can spot instantly.",

    solution:
      "A cover letter generator that learns your voice. Users provide 3 writing samples, and the AI matches your tone, vocabulary, and sentence structure. Each letter is tailored to the job description but sounds authentically like you.",

    impact: [
      "10,000+ cover letters generated in first month",
      "4.7/5 average quality rating from users",
      "Recruiters couldn't distinguish AI letters from human-written in blind tests",
      "95% of users said letters 'sounded like them'",
    ],

    process: [
      {
        phase: "Voice Training",
        steps: [
          "Built prompt engineering system for tone matching",
          "Created writing sample parser (3 samples = voice profile)",
          "Developed style transfer algorithm",
          "Tested with 50 diverse writing styles",
        ],
        insights:
          "Fewer, high-quality samples work better than many low-quality ones. 3 samples of 200+ words each is the sweet spot.",
      },
      {
        phase: "Template System",
        steps: [
          "Designed 12 cover letter templates for different industries",
          "Built customizable section system (intro, body, closing)",
          "Added achievement extraction from resumes",
          "Created recruiter-specific customization options",
        ],
        insights:
          "Creative roles want narrative letters, corporate roles want bullet-point achievements. One size doesn't fit all industries.",
      },
      {
        phase: "Refinement",
        steps: [
          "Added manual edit mode for fine-tuning",
          "Built version comparison (before/after voice matching)",
          "Implemented feedback loop for continuous improvement",
          "Created PDF export with professional formatting",
        ],
        insights:
          "The 'edit mode' is used by 80% of users—people want AI assistance, not replacement. Giving control builds trust.",
      },
    ],

    technologies: [
      "Next.js 14",
      "OpenAI GPT-4",
      "LangChain",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "React PDF",
    ],

    designAssets: [
      {
        type: "Tone Analysis",
        url: "/case-studies/cover-letter/tone-analysis.pdf",
      },
      {
        type: "Template Library",
        url: "/case-studies/cover-letter/templates.pdf",
      },
    ],

    images: {
      hero: "https://placehold.co/1920x1080/6c3483/ecf0f1?text=CoverLetter+AI+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/7d3c98/ecf0f1?text=Voice+Matching+Interface&font=montserrat",
        "https://placehold.co/800x600/6c3483/ecf0f1?text=Template+Selection&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/27ae60/ffffff?text=CoverLetter+AI+Final&font=montserrat",
    },

    testimonial: {
      quote:
        "I was skeptical about AI cover letters, but this actually sounds like me. I've used it for 5 applications and got 3 interviews.",
      author: "David Kim",
      role: "Marketing Director",
    },

    metrics: {
      lettersGenerated: "10,000+",
      avgRating: "4.7/5",
      interviewRate: "60%",
    },

    links: {
      live: "https://coverletterai.com",
      github: "https://github.com/yourname/coverletter-ai",
      caseStudyPDF: "/case-studies/coverletter-ai.pdf",
    },

    relatedProjects: ["resume-builder-smart-match", "ats-optimizer-pro"],
  },
  {
    slug: "resume-ats-scorer",
    title: "Resume ATS Scorer",
    subtitle: "Free tool that predicts ATS success before you apply",
    client: "Open Source Community Project",
    year: "2024",
    duration: "1.5 months",
    role: "Creator & Maintainer",
    team: "Solo with 15 open source contributors",

    challenge:
      "Most ATS checking tools cost $20-50/month, putting them out of reach for many job seekers. Free alternatives are inaccurate or spammy.",

    solution:
      "A completely free, open-source ATS scorer that analyzes resumes against job descriptions. Provides match percentage, keyword analysis, formatting checks, and actionable recommendations. No signup, no paywall, no data collection.",

    impact: [
      "100,000+ resumes analyzed in first 3 months",
      "4.9/5 on Product Hunt (#2 product of the day)",
      "15 open source contributors from 8 countries",
      "Used by career centers at 20+ universities",
    ],

    process: [
      {
        phase: "Algorithm Development",
        steps: [
          "Built keyword extraction from job descriptions",
          "Created formatting validation for 8 ATS systems",
          "Developed scoring algorithm (0-100)",
          "Tested against 500 real resume/ATS outcomes",
        ],
        insights:
          "Simple keyword matching (60%) + formatting (20%) + structure (20%) gave most accurate predictions. Complex ML didn't improve accuracy enough to justify cost.",
      },
      {
        phase: "Privacy First",
        steps: [
          "Designed for zero data storage",
          "Built client-side processing only",
          "No analytics or tracking",
          "Open source for transparency",
        ],
        insights:
          "Privacy is a feature users love. Many told us they chose this tool specifically because we don't store their data.",
      },
      {
        phase: "Accessibility",
        steps: [
          "Built keyboard navigation support",
          "Added screen reader compatibility",
          "Designed for color blindness",
          "Optimized for slow connections",
        ],
        insights:
          "Accessibility isn't just ethical—it expands your audience. We got users from 50+ countries, including many with limited bandwidth.",
      },
    ],

    technologies: [
      "Vanilla JavaScript",
      "HTML5/CSS3",
      "PDF.js (client-side parsing)",
      "LocalStorage for temporary data",
      "Web Workers for performance",
    ],

    designAssets: [
      {
        type: "Scoring Algorithm",
        url: "/case-studies/ats-scorer/algorithm.pdf",
      },
      {
        type: "Accessibility Audit",
        url: "/case-studies/ats-scorer/accessibility.pdf",
      },
    ],

    images: {
      hero: "https://placehold.co/1920x1080/1e8449/ecf0f1?text=Resume+ATS+Scorer+Hero&font=montserrat",
      process: [
        "https://placehold.co/800x600/2ecc71/ecf0f1?text=Scoring+Dashboard&font=montserrat",
        "https://placehold.co/800x600/27ae60/ecf0f1?text=Keyword+Analysis+View&font=montserrat",
      ],
      final:
        "https://placehold.co/1920x1080/3498db/ffffff?text=ATS+Scorer+Live+Demo&font=montserrat",
    },

    testimonial: {
      quote:
        "Finally, an ATS checker that's actually free and actually works. I used it to optimize my resume and got a job at Google.",
      author: "Alex Rivera",
      role: "Software Engineer",
    },

    metrics: {
      analyses: "100,000+",
      rating: "4.9/5",
      contributors: "15",
    },

    links: {
      live: "https://resumeatsscorer.com",
      github: "https://github.com/yourname/resume-ats-scorer",
      caseStudyPDF: "/case-studies/ats-scorer.pdf",
    },

    relatedProjects: [
      "resume-builder-smart-match",
      "ats-optimizer-pro",
      "cover-letter-generator-ai",
    ],
  },
];
