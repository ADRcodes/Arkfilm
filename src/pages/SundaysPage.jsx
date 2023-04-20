import React from "react"

import Still1 from "../assets/NewWoman-Assets/nw-still1.png"
import Still2 from "../assets/NewWoman-Assets/nw-still2.png"
import Still3 from "../assets/NewWoman-Assets/nw-still3.png"
import sundaysData from "../assets/movie-data/sundaysData.json"

import CastCard from "../components/CastCard"
import MovieDescription from "../components/MovieDescription"
import Video from "../components/Video"
import AwardSection from "../components/AwardSection"

const SundaysPage = () => {
  return (
    <div className="flex flex-col bg-green-900">
      {/* ----- Hero Section ----- */}
      <Video link="https://player.vimeo.com/video/312278488?h=bc370b44e2" />
      <div className="section-container pt-1">
        {/* ----- Movie Description ----- */}
        <MovieDescription
          title="Sundays"
          director="Benjamin Noah"
          location="Newfoundland, Canada"
          genres="Short, Adventure, Fantasy"
          resolution="HD"
          length="7"
          language="English"
          subtitles="English"
          rating=""
          synopsis="Sundays a short film disguised as a music video about one man's quest for knowledge and the extreme lengths he will go to find it."
        />
        {/* ----- Awards ----- */}
        <AwardSection movieData={sundaysData} />
        {/* ----- Cast & Crew ----- */}
        <h2 className="heading2">Cast & Crew</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 py-4 self-start">
          <CastCard
            image={Still1}
            name="Benjamin Noah"
            role="Director, Producer"
          />
          <CastCard
            image={Still1}
            name="Greg Brown"
            role="The Man"
          />
          <CastCard
            image={Still1}
            name="David Porter"
            role="The Humanoid"
          />
        </div>
        <h2 className="heading2">The Making Of Sundays</h2>
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
            className="object-cover w-[200px]"
            src={Still1}
            alt=""
          />
          <img
            className="object-cover w-[400px]"
            src={Still2}
            alt=""
          />
          <img
            className="object-cover w-[200px]"
            src={Still1}
            alt=""
          />
          <img
            className="object-cover w-[400px]"
            src={Still3}
            alt=""
          />
          <img
            className="object-cover w-[400px]"
            src={Still2}
            alt=""
          />
          <img
            className="object-cover w-[400px]"
            src={Still3}
            alt=""
          />
          <img
            className="object-cover w-[200px]"
            src={Still1}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SundaysPage
