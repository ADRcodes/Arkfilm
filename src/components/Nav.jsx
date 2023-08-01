import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const Nav = () => {
  return (
    <nav className="px-4 py-1 grid grid-cols-3 bg-no-repeat bg-cover bg-[url(src/assets/Arkfilm-Assets/rock-texture-bg.jpeg)]">
      <Link to="/">
        <div className="flex items-center gap-3">
          <div
            className="relative  w-[45px] h-[45px] overflow-hidden"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
            <img
              src="src/assets/logos/arkfilm_logo.jpg"
              alt="Your Image"
              className="absolute -top-[70%] left-[2%] h-[280%] w-[280%] object-cover"
            />
          </div>
          <h2 className=" text-white font-bold text-lg">Ark Film</h2>
        </div>
      </Link>
      <div className="flex gap-4 whitespace-nowrap text-white items-center justify-center">
        <Facebook link="https://www.facebook.com/theark1979" />
        <Instagram link="https://www.instagram.com/arkfilm2049/" />
        <Twitter link="https://twitter.com/theark_1979" />
      </div>

      <div className="flex justify-end">
        <Hamburger />
      </div>
    </nav>
  )
}

export default Nav
