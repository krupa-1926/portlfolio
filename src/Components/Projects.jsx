import Airbnb from "../images/Airbnb.png";
import foodDelivery from "../images/foodDelivery.png";
import meetify from "../images/meetify.png";
import pasteBox from "../images/pasteBox.png";
import studyNotion from "../images/studyNotion.png";

const projects = [
  {
    title: "Airbnb Clone",
    desc: "Designed schemas and APIs for users, listings, bookings, and access control.Implemented authentication, listing lifecycle (create/update/delete), and booking workflows. Deployed a production-ready full-stack application with end-to-end data flow.",
    live: "https://airbnbfrontend-five.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: Airbnb,
  },
  {
    title: "StudyNotion - Learning Platform",
    desc: "Developed a role-based platform with admin controls for managing users and study content. Implemented structured CRUD APIs and dashboards for scalable content handling. Designed backend data models to support multiple users and content types. Role-based authentication - Course creation & enrollment - Secure APIs - Payment integration (test mode)",
    live: "https://studynotionfrontend-seven.vercel.app/",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
    ],
    image: studyNotion,
  },
  {
    title: "Meetify – Real-Time Chat App",
    desc: "A real-time chat application using WebSockets to learn how messaging systems and real-time communication work.Built backend APIs for meeting sessions, user authentication, and session management.Integrated frontend and backend to support multi-user interaction workflows.Deployed and tested the application for concurrent user usage.",
    live: "https://zoomappfrontend.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    image: meetify,
  },
  {
    title: "PasteBox - File Sharing App",
    desc: "Designed secure APIs for file metadata, ownership, and authenticated access. Implemented upload/download workflows with user-level access control. Deployed the application with backend validation and data integrity checks.",
    live: "https://filesharingplatform.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"],
    image: pasteBox,
  },
  {
    title: "Food - Delivery",
    desc: "This is a full-stack food ordering web application featuring dynamic menus, an interactive cart, and seamless user experience. The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more. ",
    live: "https://food-deliveryapp-kappa.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"],
    image: foodDelivery,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-20 scroll-mt-24">
      {/* <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-300"> */}
        <h2 className="
  sticky top-0 lg:static
  backdrop-blur
  z-10
  py-2
  flex items-center gap-4
  text-2xl font-bold text-slate-300
">
        Projects
        <span className="flex-1 h-px bg-slate-700"></span>
      </h2>
      {projects.map((p) => (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-fit"
        >
          <div
            key={p.title}
            className="group relative grid grid-cols-12 gap-4 p-4 rounded-xl hover:bg-slate-800/40 transition"
          >
            {/* LEFT: IMAGE (like date column) */}
            <div className="col-span-12 sm:col-span-3 mt-1">
              <img
                src={p.image}
                alt={p.title}
                className="w-40 h-28 rounded-lg object-cover bg-slate-800 border border-slate-700"
              />
            </div>

            {/* RIGHT: CONTENT */}
            <div className="col-span-12 sm:col-span-9">
              <h4 className="text-slate-200 text-lg font-medium group-hover:text-teal-300 transition">
                {/* <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                > */}
                  {p.title} 
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition">
                    ↗
                  </span>
                {/* </a> */}
              </h4>

              <p className="text-sm mt-2 text-slate-400">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
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
        </a>
      ))}
    </section>
  );
}
