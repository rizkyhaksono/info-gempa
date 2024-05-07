import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { useState } from "react"

export default function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <button id="button-header" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-current rounded-lg md:hidden" onClick={toggleMenu}>
      {isOpen ? <IoClose className="text-white w-5 h-5" /> : <GiHamburgerMenu className="text-white w-5 h-5" />}
    </button>
  )
}
