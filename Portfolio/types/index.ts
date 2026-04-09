export interface Artifact {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  emotion: string;
  color: string;
  memory: string;
  description: string;
  process: string[];
  technologies: string[];
  image: string | null;
  video: string | null;
  liveUrl: string | null;
  github: string | null;
  yearLong: string;
  role: string;
  testimonial: {
    text: string;
    author: string;
  } | null;
}

export interface ProcessPhase {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
  activities: string[];
  deliverables: string[];
  tools: string[];
  visual: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  challenge: string;
  solution: string;
  impact: string[];
  process: {
    phase: string;
    steps: string[];
    insights: string;
  }[];
  technologies: string[];
  designAssets: { type: string; url: string }[];
  images: {
    hero: string;
    process: string[];
    final: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  } | null;
  metrics: {
    [key: string]: string;
  };
  links: {
    live: string | null;
    github: string | null;
    caseStudyPDF: string | null;
  };
  relatedProjects: string[];
}

export const themes = {
  LIGHT: "light",
  DARK: "dark",
  AUTO: "auto",
} as const;

export type ThemeType =
  | typeof themes.LIGHT
  | typeof themes.DARK
  | typeof themes.AUTO;

export interface ThemeContextType {
  theme: ThemeType;
  resolvedTheme: "light" | "dark";
  toggleTheme: () => void;

  themes: {
    LIGHT: "light";
    DARK: "dark";
    AUTO: "auto";
  };
}
