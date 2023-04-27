import React from "react"

import Still1 from "../assets/Sundays-Assest/film still.png"
import Still2 from "../assets/Sundays-Assest/sundays-still2.png"
import Ben from "../assets/Arkfilm-Assets/Directors photo.jpg"
import David from "../assets/Sundays-Assest/David Porter.jpeg"
import Greg from "../assets/Sundays-Assest/GregBrown.jpg"

import sundaysData from "../assets/movie-data/sundaysData.json"

import CastCard from "../components/CastCard"
import MovieDescription from "../components/MovieDescription"
import Video from "../components/Video"
import AwardSection from "../components/AwardSection"

const SundaysPage = () => {
  return (
    <div className="flex flex-col bg-[#355E3B]">
      {/* ----- Hero Section ----- */}
      <Video link="https://player.vimeo.com/video/131556128?h=c48e6148fa" />
      <div className="section-container pt-1">
        {/* ----- Movie Description ----- */}
        <MovieDescription
          title="Sundays"
          director="Benjamin Noah"
          location="Newfoundland, Canada"
          genres="Music Video, Short, Adventure, Fantasy"
          resolution="HD"
          length="7"
          language="English"
          subtitles="English"
          rating=""
          synopsis="Sundays a short film disguised as a music video about one man's quest for knowledge and the extreme lengths he will go to find it. Music by Terra"
        />
        {/* ----- Awards ----- */}
        <AwardSection movieData={sundaysData} />
        {/* ----- Cast & Crew ----- */}
        <h2 className="heading2 mt-8">Cast & Crew</h2>
        <div className="flex gap-5 py-4 self-start">
          <CastCard
            image={Ben}
            name="Benjamin Noah"
            role="Director, Producer"
          />
          <CastCard
            image={Greg}
            name="Greg Brown"
            role="The Man"
          />
          <CastCard
            image={David}
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
        <h2 className="heading2 mt-8">Stills</h2>
        <div className="flex flex-wrap gap-2">
          <img
            className="object-cover w-full"
            src={Still1}
            alt=""
          />
          <img
            className="object-cover w-full"
            src={Still2}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SundaysPage
