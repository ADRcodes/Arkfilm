import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const Nav = () => {
  return (
    <div className="px-4 py-2 flex justify-between bg-primary">
      <Link to="/">
        <div className="flex">
          {/* <img src="" alt="" /> */}
          <h2 className="bg-primary text-white">Ark Film</h2>
        </div>
      </Link>
      <div className="flex gap-2 whitespace-nowrap text-white items-center">
        <Facebook link="https://www.facebook.com/theark1979" />
        <Instagram link="https://www.instagram.com/arkfilm2049/" />
        <Twitter link="https://twitter.com/theark_1979" />
      </div>
      <Hamburger />
    </div>
  )
}

export default Nav
