import Header from "./Components/Header"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Spotlight from "./Components/Spotlight"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <div className="selection:bg-sky-500/30 overflow-x-hidden">
      <Spotlight />

      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4 ">
          <Header />

          <main className="lg:w-1/2 lg:py-24 space-y-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
