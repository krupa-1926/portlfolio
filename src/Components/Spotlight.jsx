import { useEffect } from "react"

export default function Spotlight() {
  useEffect(() => {
    const spotlight = document.querySelector(".spotlight")
    window.addEventListener("mousemove", e => {
      spotlight.style.setProperty("--x", `${e.clientX}px`)
      spotlight.style.setProperty("--y", `${e.clientY}px`)
    })
  }, [])

  return (
    <div
      className="spotlight hidden lg:block fixed inset-0 pointer-events-none z-10"
      style={{
        background:
          "radial-gradient(600px circle at var(--x) var(--y), rgba(29,78,216,0.15), transparent 80%)"
      }}
    />
  )
}
