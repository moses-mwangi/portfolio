import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const App = () => {
  return (
    <div className="relative w-72 h-72 mx-auto">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          width={200}
          height={200}
          src="/images/image.png"
          alt="center"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <motion.div
        className="absolute top-1/2 left-1/2 w-full h-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <span className="inline-block text-center whitespace-nowrap">
          Your Rotating Text Here
        </span>
      </motion.div>
    </div>
  );
};

export default App;

// About Me
// Hello! I'm [Your Name], a passionate and dedicated junior frontend developer with a keen eye for design and a love for crafting seamless user experiences. I specialize in creating responsive, user-friendly websites and applications using modern web technologies.

// My Journey
// I began my coding journey with a fascination for how websites work and quickly fell in love with frontend development. I thrive on turning ideas into reality through code, and I continuously seek to improve my skills and stay updated with the latest industry trends.

// Skills
// Languages: HTML, CSS, JavaScript
// Frameworks/Libraries: React, Vue.js
// Tools: Git, Webpack, npm
// Design: UI/UX principles, responsive design, accessibility
// Projects
// I've worked on several projects, including:

// [Project Name]: A brief description of what this project is, the technologies used, and what you accomplished.
// [Project Name]: Another brief description of a different project, focusing on your role and the outcome.
// Learning and Growth
// I'm committed to continuous learning and regularly participate in coding bootcamps, online courses, and developer communities. I enjoy collaborating with others and believe that the best solutions come from teamwork and open communication.

// Personal Touch
// When I'm not coding, you can find me [insert personal interests or hobbies, e.g., "exploring new hiking trails," "playing the guitar," or "experimenting with new recipes in the kitchen"]. I believe that a healthy balance of work and play fuels creativity and productivity.

///////////////////////////////////////////////////////////

// About Me
// Introduction
// I am a passionate and dedicated Frontend Developer with a strong foundation in web development technologies and a keen eye for design. My journey in frontend development began [X years/months] ago, and I have since honed my skills through continuous learning and hands-on experience in various projects. I thrive on creating user-friendly, responsive, and visually appealing web applications that provide a seamless user experience.

// Skills
// Programming Languages & Frameworks

// HTML5: Proficient in creating structured, semantic web pages.
// CSS3: Expertise in styling web applications with a strong understanding of Flexbox, Grid, and responsive design principles.
// JavaScript (ES6+): Strong knowledge of vanilla JavaScript as well as modern frameworks.
// React.js: Experienced in building dynamic single-page applications (SPAs) using React, Redux for state management, and React Router for navigation.
// Vue.js: Familiarity with Vue.js for creating interactive web interfaces.
// TypeScript: Comfortable with adding static typing to JavaScript to enhance code quality and maintainability.

// Tools & Technologies
// Version Control: Proficient with Git and GitHub for version control and collaboration.
// Package Managers: Experienced with npm and Yarn for managing project dependencies.
// Build Tools: Familiar with Webpack, Babel, and other build tools to optimize and transpile code.
// Testing: Knowledgeable in writing unit and integration tests using Jest and React Testing Library.
// Design Tools: Proficient in using tools like Figma, Sketch, and Adobe XD for collaborating with designers and implementing designs accurately.

// Additional Skills
// Responsive Design: Expertise in building responsive web applications that work seamlessly across different devices and screen sizes.
// Accessibility: Strong understanding of web accessibility standards (WCAG) and best practices to ensure web applications are usable by everyone.
// Performance Optimization: Skills in optimizing web applications for performance, including lazy loading, code splitting, and caching strategies.
// API Integration: Experience in integrating RESTful and GraphQL APIs to fetch and manage data in web applications.

// Projects
// Project 1: [Project Name]
// Description: A brief description of the project and its purpose.
// Technologies Used: List of technologies and tools used (e.g., React, Redux, CSS Modules, RESTful API).
// Key Features:
// Feature 1: Description of a key feature you implemented.
// Feature 2: Description of another key feature.
// Challenges & Solutions: Briefly describe any challenges faced during development and how you overcame them.
// Project 2: [Project Name]
// Description: A brief description of the project and its purpose.
// Technologies Used: List of technologies and tools used (e.g., Vue.js, Vuex, Sass, GraphQL).
// Key Features:
// Feature 1: Description of a key feature you implemented.
// Feature 2: Description of another key feature.
// Challenges & Solutions: Briefly describe any challenges faced during development and how you overcame them.

// Experience
// Company Name | Frontend Developer | [Dates]
// Role & Responsibilities: Describe your role and key responsibilities in the company.
// Achievements:
// Achievement 1: Description of a significant achievement or contribution.
// Achievement 2: Description of another significant achievement or contribution.
// Company Name | Frontend Developer Intern | [Dates]
// Role & Responsibilities: Describe your role and key responsibilities during the internship.
// Achievements:
// Achievement 1: Description of a significant achievement or contribution.
// Achievement 2: Description of another significant achievement or contribution.

// Education
// Degree Name | Major | University Name | Graduation Year
// Relevant coursework: List any relevant courses or projects.
// Certifications
// Certification Name | Issuing Organization | Year

// Contact
// Email: [Your Email]
// LinkedIn: [Your LinkedIn Profile]
// GitHub: [Your GitHub Profile]
// Portfolio: [Link to your online portfolio]
