import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    // <header className="lg:sticky lg:top-0 lg:w-1/2 lg:h-screen lg:py-24 flex flex-col justify-between">
        <header className="hidden lg:flex fixed top-0 left-0 h-screen w-1/2 max-w-[50%] px-24 py-24 flex-col justify-between">

      
      {/* Top Section */}
      <div>
        <h1 className="text-4xl font-bold text-slate-200">Krupa Patel</h1>
        <h2 className="mt-3 text-xl text-slate-200">Software Developer</h2>

        <p className="mt-4 max-w-xs text-slate-400">
          I build robust, high-performance web applications, specializing in the
          MERN stack and secure backend architectures.
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block mt-16 uppercase text-xs font-bold tracking-widest">
          <ul className="space-y-6">
            {["About", "Experience", "Projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center text-slate-400 hover:text-slate-200 transition"
                >
                  <span className="h-px w-8 bg-slate-600 mr-4 group-hover:w-16 transition-all" />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-slate-400">
        <a
          href="https://github.com/krupapatel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition"
        >
          <Github size={22} />
        </a>

        <a
          href="https://linkedin.com/in/krupapatel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="mailto:krupapatel1926@gmail.com"
          className="hover:text-teal-300 transition"
        >
          <Mail size={22} />
        </a>
      </div>
    </header>
  );
}
