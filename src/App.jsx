import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Spotlight from "./Components/Spotlight";
import Footer from "./Components/Footer";

export default function App() {
  return (
    // <div className="selection:bg-sky-500/30 overflow-x-hidden">
    <div className="bg-navy text-slate-300 min-h-screen font-sans px-6 sm:px-12 lg:px-24">
      <Spotlight />

      <Header />
      {/* <main className="lg:ml-[40%] max-w-3xl px-6 lg:px-24 py-24 space-y-24"> */}
      <main className="max-w-3xl mx-auto pt-24 space-y-32">
        {/* <About /> */} 
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
