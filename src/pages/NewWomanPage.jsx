import React from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"

import Still1 from "../assets/NewWoman-Assets/New Woman Film Still 1.png"
import Still2 from "../assets/NewWoman-Assets/New Woman Film Still 2.png"
import Still3 from "../assets/NewWoman-Assets/New Woman Film Still 3.png"
import Still4 from "../assets/NewWoman-Assets/New Woman Film Still 4.png"
import Still5 from "../assets/NewWoman-Assets/New Woman Film Still 7.png"
import Rhiannon from "../assets/NewWoman-Assets/RhiannonMorgan.jpg"
import Stephen from "../assets/NewWoman-Assets/StephenOates.jpg"
import Ben from "../assets/Arkfilm-Assets/Directors photo.jpg"
import NewWomanSquare from "../assets/NewWoman-Assets/new-woman-square-cover3_web.jpg"
import newWomanData from "../assets/movie-data/newWomanData.json"

import CastCard from "../components/CastCard"
import MovieDescription from "../components/MovieDescription"
import Video from "../components/Video"
import AwardSection from "../components/AwardSection"

const NewWomanPage = () => {
  const font = "nw-text"
  return (
    <div className="flex flex-col">
      {/* ----- Hero Section ----- */}
      <div className="relative">
        <img
          className="w-full xl:w-3/5 mx-auto brightness-90"
          src={NewWomanSquare}
          alt=""
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] text-white">
          <BsFillPlayCircleFill />
        </p>
      </div>
      <div className="section-container pt-1">
        {/* ----- Movie Description ----- */}
        <MovieDescription
          title="New Woman"
          director="Benjamin Noah"
          location="Newfoundland, Canada"
          genres="Short, History, Horror, Romance, Thriller"
          resolution="HD"
          length="20"
          language="English"
          subtitles="English"
          rating="14+"
          synopsis="A gothic romance concerning a male pickpocket and a wealthy woman
              descending into a labyrinth of terror in 1888."
          font={font}
        />
        {/* ----- Awards ----- */}
        <AwardSection movieData={newWomanData} />
        {/* ----- Cast & Crew ----- */}
        <h2 className="heading2">Cast & Crew</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 py-4 self-start">
          <CastCard
            image={Ben}
            name="Benjamin Noah"
            role="Director, Producer"
          />
          <CastCard
            image={Rhiannon}
            name="Rhiannon Morgan"
            role="*role*"
          />
          <CastCard
            image={Stephen}
            name="Benjamin Noah"
            role="*role*"
          />
        </div>
        {/* ----- Trailer ----- */}
        <h2 className="heading2">Trailer</h2>
        <Video link="https://player.vimeo.com/video/312278488?h=bc370b44e2" />
        <h2 className="heading2">The Making Of New Woman</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          incidunt quo magni itaque asperiores, fuga eos earum. Voluptatibus
          provident cupiditate esse nisi aut quod, alias praesentium
          necessitatibus unde velit sint.
        </p>
        {/* ----- Stills ----- */}
        <h2 className="heading2">Stills</h2>
        <div className="flex flex-wrap gap-2">
          <img
            className="object-cover w-[40%]"
            src={Still1}
            alt=""
          />
          <img
            className="object-cover w-[58%]"
            src={Still2}
            alt=""
          />
          <img
            className="object-cover w-[49%]"
            src={Still3}
            alt=""
          />
          <img
            className="object-cover w-[49%]"
            src={Still4}
            alt=""
          />
          <img
            className="object-cover w-[400px]"
            src={Still5}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default NewWomanPage
