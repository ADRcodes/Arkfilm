import React, { useState, useEffect, useRef } from "react"

const Hamburger = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsCollapsed(true)
      }
    }
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [menuRef])

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const menuStyle = {
    transition: "transform 0.2s ease-out",
    transform: isCollapsed ? "translateX(100%)" : "translateX(0%)",
  }

  return (
    <div className="flex justify-center items-center relative">
      <button
        className={`relative flex flex-col justify-between items-center w-8 h-6 bg-transparent border-none cursor-pointer transition-transform duration-250 transform ${
          isCollapsed ? "" : "open"
        }`}
        onClick={(event) => {
          event.stopPropagation()
          toggleCollapse()
        }}>
        <span
          className={`w-full h-1 bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "rotate-45 translate-y-2.5"
          }`}></span>
        <span
          className={`w-full h-1 bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "opacity-0"
          }`}></span>
        <span
          className={`w-full h-1 bg-gray-500 transition-transform duration-250 transform ${
            isCollapsed ? "" : "-rotate-45 -translate-y-2.5"
          }`}></span>
      </button>

      <div
        className="absolute top-8 -right-4 z-40"
        style={menuStyle}
        ref={menuRef}>
        <ul className="flex flex-col items-end rounded-lg shadow-lg w-max">
          <li className="burger-list-item">
            <a href="/sundays">Sundays</a>
          </li>
          <li className="burger-list-item">
            <a href="/new-woman">New Woman</a>
          </li>
          <li className="burger-list-item">
            <a href="/the-hunt">The Hunt</a>
          </li>
          <li className="burger-list-item">
            <a href="#">Behind the Scenes</a>
          </li>
          <li className="burger-list-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger
