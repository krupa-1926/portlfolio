const experiences = [
  {
    time: "JAN — APR 2024",
    role: "Software Intern · Grownited Pvt Ltd",
    desc: "Developed a local services platform to manage city-level service categories.Designed modular service structures covering transport, healthcare, and utility services.Implemented frontend components and backend APIs to support scalable service operations.Worked on optimizing data flow between frontend and backend for improved responsiveness.",
    tech: ["MongoDB", "Express", "React", "Node" , "Bootstrap"]
  },
  {
    time: "JUL — AUG 2023",
    role: "Software Intern · Sparks To Ideas",
    desc: "Built a mobile-first shopping website (PhoneX) for browsing phone products and accessories.Implemented reusable UI components to improve consistency and maintainability. Focused on delivering a smooth and user-friendly interface for product discovery and navigation.Collaborated with mentors to understand frontend best practices and component-based design.",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    time: "JAN — FEB 2023",
    role: "Software Intern · Praxeware Technologies",
    desc: "Developed a blog management website using HTML, CSS, Python, and Django. Implemented features such as post creation, image uploads, and content management. Built admin-level access to manage, update, and delete user-generated content. Gained hands-on experience with backend development and MVC architecture.",
    tech: ["Python"]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      <h1 className="text-2xl">Experience</h1>
      {/* {experiences.map((exp, i) => (
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
      ))} */}
      {experiences.map((exp, i) => (
  <div
    key={i}
    className="group relative grid grid-cols-12 gap-4 p-4 rounded-xl hover:bg-slate-800/40 transition "
  >
    {/* Date Column */}
    <div className="col-span-12 sm:col-span-3 mt-1">
      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-500">
        {exp.time}
      </p>
    </div>

    {/* Content Column */}
    <div className="col-span-12 sm:col-span-9">
      <h4 className="text-slate-200 font-medium group-hover:text-teal-300 transition">
        {exp.role}
      </h4>

      <p className="text-sm mt-2 text-slate-400 leading-relaxed">
        {exp.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-teal-400/10 text-teal-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
))}

    </section>
  )
}
