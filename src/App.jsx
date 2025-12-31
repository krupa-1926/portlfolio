import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-indigo-400">Krupa Patel <h3>- Software Development Engineer Portfolio</h3></span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          I am a Full-Stack Developer with strong experience in building
scalable web applications and backend systems using the MERN stack.
I enjoy solving backend problems, designing APIs, and building real-time systems.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/krupa-1926" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/krupa1912" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:krupapatel1926@email.com" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500">
            <Mail size={18} /> Email
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "REST APIs",
            "Git & GitHub",
            "Basic System Design",
          ].map((skill) => (
            <div key={skill} className="bg-gray-900 rounded-xl px-4 py-3 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="space-y-6">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">SkillSphere – Learning Platform</h3>
            <p className="text-gray-400 mt-2">
              A full-stack LMS where instructors can create courses and students can enroll.
              Built to understand authentication, APIs, and database modeling.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: React, Node.js, Express, MongoDB, JWT Authentication
              Features :
- Role-based authentication
- Course creation & enrollment
- Secure APIs
- Payment integration (test mode)
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/krupa-1926/Study_Notion.git" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://studynotionfrontend-seven.vercel.app/" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>
<hr className="border-gray-800 my-12" />

          {/* Project 2 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Meetify – Real-Time Chat App</h3>
            <p className="text-gray-400 mt-2">
              A real-time chat application using WebSockets to learn how messaging systems
              and real-time communication work.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: React, Node.js, Socket.IO, MongoDB
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/krupa-1926/Meetify-Real_Time_App.git" className="text-indigo-400 hover:underline">GitHub</a>
               <a href="https://zoomappfrontend.vercel.app/" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div><hr className="border-gray-800 my-12" />

          {/* Project 3 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">AirBnb</h3>
            <p className="text-gray-400 mt-2">
              Backend-focused project to understand REST APIs, database indexing, and
              basic system design concepts.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: Node.js, Express, MongoDB, Redis (basic)
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/krupa-1926/AirBnb.git" className="text-indigo-400 hover:underline">GitHub</a>
               <a href="https://airbnbfrontend-five.vercel.app/" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div><hr className="border-gray-800 my-12" />

          {/* Project 4 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">PasteBox - File Sharing App</h3>
            <p className="text-gray-400 mt-2">
              Backend-focused project to understand REST APIs, database indexing, and
              basic system design concepts.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: Node.js, Express, MongoDB, Redis (basic)
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/krupa-1926/pastebox_file_sharing.git" className="text-indigo-400 hover:underline">GitHub</a>
               <a href="https://filesharingplatform.vercel.app/" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div><hr className="border-gray-800 my-12" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8 text-center text-gray-500">
        Built with React & Tailwind © {new Date().getFullYear()} Krupa Patel • SDE Intern Portfolio
      </footer>
    </div>
  );
}
