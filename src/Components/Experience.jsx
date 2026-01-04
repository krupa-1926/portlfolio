const experiences = [
  {
    time: "JAN 2024 — APR 2024",
    role: "Software Intern · Grownited Pvt Ltd",
    desc: "Developed a local services platform to manage city-level service categories.Designed modular service structures covering transport, healthcare, and utility services.Implemented frontend components and backend APIs to support scalable service operations.Worked on optimizing data flow between frontend and backend for improved responsiveness.",
    tech: ["MongoDB", "Express", "React", "Node" , "Bootstrap"]
  },
  {
    time: "JUL 2023 — AUG 2023",
    role: "Software Intern · Sparks To Ideas",
    desc: "Built a mobile-first shopping website (PhoneX) for browsing phone products and accessories.Implemented reusable UI components to improve consistency and maintainability. Focused on delivering a smooth and user-friendly interface for product discovery and navigation.Collaborated with mentors to understand frontend best practices and component-based design.",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    time: "JAN 2023 — FEB 2023",
    role: "Software Intern · Praxeware Technologies",
    desc: "Developed a blog management website using HTML, CSS, Python, and Django. Implemented features such as post creation, image uploads, and content management. Built admin-level access to manage, update, and delete user-generated content. Gained hands-on experience with backend development and MVC architecture.",
    tech: ["Python"]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      {experiences.map((exp, i) => (
        <div key={i} className="p-4 rounded-xl hover:bg-slate-800/40">
          <p className="text-xs text-slate-500">{exp.time}</p>
          <h4 className="text-slate-200 mt-1">{exp.role}</h4>
          <p className="text-sm mt-2">{exp.desc}</p>
          <div className="flex gap-2 mt-3">
            {exp.tech.map(t => (
              <span key={t} className="px-3 py-1 text-xs bg-sky-400/10 rounded-full text-sky-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
