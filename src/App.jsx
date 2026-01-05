import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Spotlight from "./Components/Spotlight";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="selection:bg-sky-500/30 overflow-x-hidden">
      <Spotlight />

      <Header />
      <main className="lg:ml-[40%] max-w-3xl px-6 lg:px-24 py-24 space-y-24">
        {/* <About /> */}
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
