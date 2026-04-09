# Professional CV/Resume

A modern, professional CV/resume page built with Next.js 16 and Tailwind CSS. This is a clean, responsive resume page that displays your professional information in an elegant format.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Customizable**: Easy to modify resume data through TypeScript interfaces
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety with comprehensive interfaces
- **Component-Based**: Modular React components for easy maintenance
- **Print-Friendly**: Optimized for printing when needed

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd Resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Updating Resume Data

Edit the `data/resume.ts` file to update your personal information:

```typescript
export const resumeData: ResumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State",
    website: "https://yourwebsite.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    summary: "Your professional summary...",
  },
  experience: [
    // Your experience entries
  ],
  education: [
    // Your education entries
  ],
  projects: [
    // Your project entries
  ],
  skills: [
    // Your skills categories
  ],
  certificates: [
    // Your certificates (optional)
  ],
  languages: [
    // Your languages (optional)
  ],
};
```

### Styling

The resume uses Tailwind CSS for styling. You can customize colors, fonts, and spacing in `tailwind.config.ts`:

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e40af",
          light: "#3b82f6",
          dark: "#1e3a8a",
        },
        // Add more custom colors
      },
    },
  },
};
```

### Adding New Sections

1. Create a new component in the `components/` directory
2. Add the corresponding TypeScript interface in `lib/types.ts`
3. Import and use the component in `app/page.tsx`

## Printing

The resume is optimized for printing with:

- Proper page breaks to avoid content splitting
- Print-friendly color scheme
- Hidden navigation and controls during printing
- Optimized font sizes and spacing

To print:
1. Click the "Print" button in the application
2. Use browser's print dialog (Ctrl+P or Cmd+P)
3. Select "Save as PDF" for digital distribution

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

The built application will be in the `.next` directory.

## Project Structure

```
Resume/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main resume page
├── components/
│   ├── ResumeHeader.tsx     # Header with contact info
│   ├── SummarySection.tsx   # Professional summary
│   ├── ExperienceSection.tsx # Work experience
│   ├── EducationSection.tsx  # Education background
│   ├── ProjectsSection.tsx   # Personal projects
│   └── SkillsSection.tsx     # Technical skills
├── data/
│   └── resume.ts            # Resume data
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
