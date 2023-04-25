import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const Nav = () => {
  return (
    <div className="px-4 py-2 grid grid-cols-3 bg-primary">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img
            className="w-[45px] h-[45px] object-cover"
            src="src/assets/logos/arkfilm_logo.jpg"
            alt="logo"
          />
          <img
            className="w-[45px] h-[45px] object-cover rounded-full"
            src="src/assets/logos/arkfilm_logo.jpg"
            alt="logo"
          />
          <div
            class="relative  w-[45px] h-[45px] overflow-hidden"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
            <img
              src="src/assets/logos/arkfilm_logo.jpg"
              alt="Your Image"
              class="absolute -top-[70%] left-[2%] h-[280%] w-[280%] object-cover"
            />
          </div>
          <h2 className="bg-primary text-white">Ark Film</h2>
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
    </div>
  )
}

export default Nav
