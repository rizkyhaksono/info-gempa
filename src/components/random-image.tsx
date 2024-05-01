import { useState, useEffect } from "react"

export default function RandomImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const imageUrl = windowWidth <= 1280 ? "https://source.unsplash.com/random/1800x3800/?bali" : "https://source.unsplash.com/random/1800x1200/?bali"

  return (
    <div className="absolute -z-10 w-full">
      <img src={imageUrl} alt="Random" className="w-full h-auto md:h-full object-cover object-center" loading="lazy" />
    </div>
  )
}
