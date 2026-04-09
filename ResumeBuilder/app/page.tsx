"use client";

import { useState } from "react";
import { Sparkles, FileText, Copy } from "lucide-react";

export default function Home() {
  const [role, setRole] = useState("");
  const [generated, setGenerated] = useState("");

  const handleGenerate = () => {
    if (!role) return;

    setGenerated(`
      <h3><strong>${role}</strong></h3>
      <p>Creative and results-driven ${role} with experience in building scalable solutions and delivering high-quality work.</p>
      <ul>
        <li>Strong problem-solving skills</li>
        <li>Experience with modern tools</li>
        <li>Ability to deliver results fast</li>
      </ul>
    `);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">AI Resume Builder</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#demo" className="hover:text-primary">
            Demo
          </a>
          <a href="#preview" className="hover:text-primary">
            Preview
          </a>
          <a
            href="/dashboard"
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Get Started test
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Build Your Resume with <span className="text-primary">AI</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Generate resumes, cover letters, and content instantly.
        </p>
      </section>

      {/* AI DEMO */}
      <section id="demo" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow border">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" />
            <h2 className="font-semibold">Try AI Generator</h2>
          </div>

          <div className="flex gap-3">
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter job role (e.g. Software Engineer)"
              className="flex-1 border rounded-lg px-4 py-2"
            />

            <button
              onClick={handleGenerate}
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              Generate
            </button>
          </div>

          {/* OUTPUT */}
          {generated && (
            <div className="mt-6 border rounded-lg p-4 bg-gray-50 relative">
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                <Copy size={16} />
              </button>

              <div
                className="text-sm [&_ul]:list-disc [&_ul]:ml-5"
                dangerouslySetInnerHTML={{ __html: generated }}
              />
            </div>
          )}
        </div>
      </section>

      {/* RESUME PREVIEW MOCKUP */}
      <section
        id="preview"
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-bold">Live Resume Preview</h2>

          <p className="mt-4 text-gray-600">
            See your resume update instantly as you type. No guesswork. No
            stress.
          </p>

          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>✔ Real-time editing</li>
            <li>✔ Clean modern templates</li>
            <li>✔ Ready for download</li>
          </ul>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border">
          <div className="border-b pb-2 mb-3">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-sm text-gray-500">Fullstack Developer</p>
          </div>

          <div className="text-sm text-gray-700 space-y-2">
            <p>
              Passionate developer experienced in building scalable web
              applications and modern digital solutions.
            </p>

            <ul className="list-disc ml-5">
              <li>React / Next.js</li>
              <li>Node.js APIs</li>
              <li>Database design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI IMAGE / CONTENT MOCK */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold">More than just resumes</h2>

        <p className="text-gray-500 mt-2">
          Generate content, ideas, and even visuals with AI
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl">
            <FileText className="mb-3" />
            <h3 className="font-semibold">AI Cover Letters</h3>
            <p className="text-sm text-gray-600">
              Tailored cover letters instantly
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <Sparkles className="mb-3" />
            <h3 className="font-semibold">AI Content</h3>
            <p className="text-sm text-gray-600">
              Generate summaries & job descriptions
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <FileText className="mb-3" />
            <h3 className="font-semibold">Export Ready</h3>
            <p className="text-sm text-gray-600">
              Download PDF or share instantly
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-primary text-white">
        <h2 className="text-3xl font-bold">Start Building Today</h2>

        <p className="mt-2 text-white/80">
          Your next job starts with a better resume
        </p>

        <a
          href="/dashboard"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium"
        >
          Get Started Free
        </a>
      </section>
    </main>
  );
}
