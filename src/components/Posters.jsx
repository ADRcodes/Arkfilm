import React from "react"
import { Link } from "react-router-dom"

import SundaysPoster from "../assets/Sundays-Assest/sundays-poster.png"
import NWPoster from "../assets/NewWoman-Assets/newwoman.png"
import theHuntPoster from "../assets/TheHunt-Assets/thehunt-poster.jpg"

const Posters = () => {
  return (
    <div className="flex mt-[200px]">
      <Link
        to="/sundays"
        className="poster-container">
        <img
          className="poster border-2"
          src={SundaysPoster}
          alt="Sundays Poster"
        />
        <p className="text-center text-xl">
          Sundays <span>(2019)</span>
        </p>
      </Link>
      <Link
        to="/new-woman"
        className="poster-container">
        <img
          className="poster border-2"
          src={NWPoster}
          alt="New Woman Poster"
        />
        <p className="text-center text-xl">
          New Woman <span>(2015)</span>
        </p>
      </Link>
      <Link
        to="/the-hunt"
        className="poster-container">
        <img
          className="poster border-2"
          src={theHuntPoster}
          alt="The Hunt Poster"
        />
        <p className="text-center text-xl">
          The Hunt <span>(2024)</span>
        </p>
      </Link>
    </div>
  )
}

export default Posters
