import { useState, useEffect } from "react"
import { subtitle } from "./primitives"

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className={subtitle({ color: "foreground", size: "sm" })}>{time}</div>
}

export default Clock
