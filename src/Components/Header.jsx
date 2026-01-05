import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// const sections = ["about", "experience", "projects"];
const sections = [ "experience", "projects"];

export default function Header() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="hidden lg:flex fixed top-0 left-0 h-screen w-[40%] px-24 py-24 flex-col justify-between">
      
      {/* Intro */}
      <div>
        <h1 className="text-4xl font-bold text-slate-200">Krupa Patel</h1>
        <h2 className="mt-3 text-xl text-slate-200">Software Developer</h2>

        <p className="mt-4 text-slate-400 max-w-xs">
          I build robust, high-performance web applications, specializing in the
          MERN stack and secure backend architectures.
        </p>

        {/* Navigation */}
        <nav className="mt-12 uppercase text-xs font-bold tracking-widest">
          <ul className="space-y-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`group flex items-center transition ${
                    active === section
                      ? "text-slate-200"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`h-px mr-4 transition-all ${
                      active === section
                        ? "w-16 bg-teal-300"
                        : "w-8 bg-slate-600 group-hover:w-16"
                    }`}
                  />
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-slate-400">
        <a href="https://github.com/krupa-1926" target="_blank"><Github size={22} /></a>
        <a href="https://www.linkedin.com/in/krupa1926/" target="_blank"><Linkedin size={22} /></a>
        <a href="mailto:krupapatel1926@gmail.com"><Mail size={22} /></a>
      </div>
    </header>
  );
}

