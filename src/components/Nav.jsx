import React from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger"

const Nav = () => {
  return (
    <div className="px-4 py-2 flex justify-between bg-primary">
      <Link to="/">
        <div className="flex">
          {/* <img src="" alt="" /> */}
          <h2 className="bg-primary text-white">Ark Film</h2>
        </div>
      </Link>
      <div className="flex gap-2 whitespace-nowrap text-white">
        <Link
          to="/new-woman"
          className="">
          New Woman
        </Link>
        <Link
          to="/sundays"
          className="">
          Sundays
        </Link>
        <Link
          to="/the-hunt"
          className="">
          The Hunt
        </Link>
      </div>
      <Hamburger />
    </div>
  )
}

export default Nav
