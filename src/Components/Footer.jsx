import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Social Icons */}
        <div className="flex items-center gap-6 text-slate-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Center: Footer Text */}
        <p className="max-w-xl text-center text-sm text-slate-400 leading-relaxed">
          Loosely designed in <span className="text-slate-200">Figma</span> and
          coded in <span className="text-slate-200">Visual Studio Code</span> by
          yours truly. Built with{" "}
          <span className="text-slate-200">Next.js</span> and{" "}
          <span className="text-slate-200">Tailwind CSS</span>, deployed with{" "}
          <span className="text-slate-200">Vercel</span>. All text is set in the{" "}
          <span className="text-slate-200">Inter</span> typeface.
        </p>  
      </div>
  
  );
}

