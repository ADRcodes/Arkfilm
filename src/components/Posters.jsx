import React from "react"
import { Link } from "react-router-dom"

import SundaysPoster from "../assets/Sundays-Assest/sundays-poster.png"
import NWPoster from "../assets/NewWoman-Assets/newwoman.png"
import theHuntPoster from "../assets/TheHunt-Assets/thehunt-poster.jpg"

const Posters = () => {
  return (
    <div className="flex">
      <Link
        to="/new-woman"
        className="w-1/3">
        <img
          className="w-full h-full lg:p-5"
          src={NWPoster}
          alt="New Woman Poster"
        />
      </Link>
      <Link
        to="/sundays"
        className="w-1/3">
        <img
          className="w-full lg:p-5"
          src={SundaysPoster}
          alt="Sundays Poster"
        />
      </Link>
      <Link
        to="/the-hunt"
        className="w-1/3">
        <img
          className="w-full lg:p-5"
          src={theHuntPoster}
          alt="The Hunt Poster"
        />
      </Link>
    </div>
  )
}

export default Posters
