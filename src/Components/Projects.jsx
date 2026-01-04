const projects = [
  {
    title: "Airbnb Clone",
    desc: "Designed schemas and APIs for users, listings, bookings, and access control using MongoDB.Implemented authentication, listing lifecycle (create/update/delete), and booking workflows. Deployed a production-ready full-stack application with end-to-end data flow.",
    live: "https://airbnbfrontend-five.vercel.app/",
    github: "https://github.com/krupa-1926/AirBnb.git",
  },
  {
    title: "StudyNotion - Learning Platform",
    desc: "Developed a role-based platform with admin controls for managing users and study content. Implemented structured CRUD APIs and dashboards for scalable content handling. Designed backend data models to support multiple users and content types. Tech: React, Node.js, Express, MongoDB, JWT Authentication Features : Role-based authentication - Course creation & enrollment - Secure APIs - Payment integration (test mode)",
    live: "https://studynotionfrontend-seven.vercel.app/",
    github: "https://github.com/krupa-1926/Study_Notion.git",
  },
  {
    title: "Meetify – Real-Time Chat App",
    desc: "A real-time chat application using WebSockets to learn how messaging systems and real-time communication work.Built backend APIs for meeting sessions, user authentication, and session management.Integrated frontend and backend to support multi-user interaction workflows.Deployed and tested the application for concurrent user usage.Tech: React, Node.js, Socket.IO, MongoDB",
    live: "https://zoomappfrontend.vercel.app/",
    github: "https://github.com/krupa-1926/Meetify-Real_Time_App.git",
  },
  {
    title: "PasteBox - File Sharing App",
    desc: "Designed secure APIs for file metadata, ownership, and authenticated access. Implemented upload/download workflows with user-level access control. Deployed the application with backend validation and data integrity checks. Tech: Node.js, Express, MongoDB, Redis (basic)",
    live: "https://filesharingplatform.vercel.app/",
    github: "https://github.com/krupa-1926/pastebox_file_sharing.git",
  },
  {
    title: "Food - Delivery",
    desc: "This is a full-stack food ordering web application built using the MERN stack featuring dynamic menus, an interactive cart, and seamless user experience. The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more. Tech: MongoDB, Express, React, Node.js ,radis",
    live: "https://food-deliveryapp-kappa.vercel.app/",
    github: "https://github.com/krupa-1926/Food-Delivery_App.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      {projects.map((p) => (
        <div key={p.title} className="p-4 rounded-xl hover:bg-slate-800/40">
          <h4 className="text-slate-200">{p.title}</h4>
          <p className="text-sm mt-2">{p.desc}</p>
          <div className="flex gap-2 mt-3">
            <a
              href={p.live}
              className="px-3 py-1 text-xs bg-sky-400/10 rounded-full text-sky-300"
            >
              Live Demo
            </a>
            <a
              href={p.github}
              className="px-3 py-1 text-xs bg-sky-400/10 rounded-full text-sky-300"
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
