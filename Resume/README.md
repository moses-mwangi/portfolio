# Resume Builder Pro

A unique, professional resume builder built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 **Modern Design**: Clean, professional layouts with beautiful animations
- 📝 **Easy Editing**: Intuitive interface for editing all resume sections
- 👁️ **Live Preview**: See changes in real-time
- 📄 **PDF Export**: Download your resume as a PDF (coming soon)
- 🌙 **Dark Mode**: Built-in dark/light theme support
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Performance**: Optimized with Next.js and modern React patterns

## Unique Features

- **Interactive Timeline**: Visual timeline for work experience
- **Skill Progress Bars**: Animated skill level indicators
- **Micro-interactions**: Hover effects and smooth transitions
- **Modern UI Components**: Built with shadcn/ui for consistency
- **Type Safety**: Full TypeScript support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Edit Resume**: Use the sidebar to navigate between sections
2. **Fill Information**: Add your personal info, experience, education, and skills
3. **Preview**: Switch to the preview tab to see your resume
4. **Export**: Download as PDF (feature coming soon)

## Sections

- Personal Information
- Work Experience
- Education
- Skills (with proficiency levels)
- Projects
- Certificates
- Languages

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **PDF Export**: jsPDF + html2canvas

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── ResumeBuilder.tsx
│   └── ResumePreview.tsx
├── types/
│   └── resume.ts
└── lib/
    └── utils.ts
```

## Contributing

This is a personal project. Feel free to fork and modify for your own use!

## License

MIT License - feel free to use this for your personal resume building needs.
