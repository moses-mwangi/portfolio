# AGENTS.md

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. It showcases a developer's skills, projects, and services.

## Build Commands

```bash
# Development
bun run dev          # Start development server on http://localhost:3000

# Production
bun run build        # Build for production
bun run start        # Start production server

# Linting
bun run lint         # Run ESLint with Next.js core-web-vitals config
```

**Note:** No test framework is currently configured. Do not add tests unless explicitly requested.

## Code Style Guidelines

### Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS with shadcn/ui (new-york style)
- **Icons:** lucide-react
- **Animations:** Framer Motion, AOS
- **Theme:** next-themes (dark/light mode)

### Path Aliases

- Use `@/*` for absolute imports (e.g., `@/components`, `@/lib/utils`)
- Components are in `/components/`
- Page components are in `/app/components/`
- Utils are in `/lib/`

### Component Structure

#### Client vs Server Components

- Add `"use client"` at the top of files that use:
  - React hooks (`useState`, `useEffect`, `useRef`, etc.)
  - Browser APIs (`window`, `document`)
  - Event handlers (`onClick`, `onChange`)
  - `next-themes` `useTheme` hook
  - Framer Motion animations

#### Component File Naming

- Use PascalCase: `Navbar.tsx`, `ContactForm.tsx`
- Group related components: `components/projects.tsx/ProjectService.ts`
- UI components: `components/ui/Button.tsx`

### Imports

```typescript
// Correct order:
import React from "react"; // React (if needed)
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Relative imports for same-feature modules
import { projects } from "./ProjectService";
```

### ClassName Merging

Always use the `cn()` utility for merging Tailwind classes:

```typescript
import { cn } from "@/lib/utils";

// Good
<div className={cn("base-class", condition && "conditional-class", className)} />

// Avoid
<div className={`base-class ${condition ? "conditional-class" : ""} ${className}`} />
```

### Types and Interfaces

```typescript
// Props interfaces for components
interface NavbarProps {
  isScrolled: boolean;
  onMenuToggle?: () => void;
}

// Or use type for simpler objects
type NavItem = {
  name: string;
  href: string;
};
```

### Naming Conventions

- **Components:** PascalCase (`Navbar`, `ContactForm`)
- **Functions:** camelCase (`handleSubmit`, `formatDate`)
- **Variables:** camelCase (`isLoading`, `projectList`)
- **Constants:** PascalCase or UPPER_SNAKE_CASE (`const NAV_ITEMS`, `const API_URL`)
- **Files:** kebab-case for non-component files (`project-service.ts`)

### Tailwind CSS Patterns

- Use semantic color tokens: `bg-background`, `text-foreground`, `border-border`
- Use `primary`, `secondary`, `accent`, `muted` color tokens
- Use `hsl(var(--variable))` for custom colors in tailwind.config.ts
- Apply responsive classes: `hidden lg:flex`, `px-4 md:px-6`

### Error Handling

- Use try/catch for async operations
- Display user-friendly error messages via toast notifications
- Log errors appropriately for debugging

### Best Practices

1. **Accessibility:** Use `aria-label` on icon-only buttons
2. **Images:** Use Next.js `<Image />` component when possible
3. **Links:** Use Next.js `<Link>` for internal navigation
4. **Performance:** Keep client components to a minimum; prefer server components
5. **SEO:** Add proper metadata in `layout.tsx` and page components

### Adding shadcn/ui Components

If you need to add new UI components:

```bash
npx shadcn@latest add [component-name]
```

This will create the component in `components/ui/` and update `components.json`.

### Code to Avoid

- Do not use `any` type - use `unknown` or proper types
- Avoid inline styles - use Tailwind classes
- Do not use `console.log` in production code
- Avoid hardcoded strings - extract to constants or i18n files
