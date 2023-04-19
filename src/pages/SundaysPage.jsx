import React from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { GiLaurels } from "react-icons/gi"

import Still1 from "../assets/NewWoman-Assets/nw-still1.png"
import Still2 from "../assets/NewWoman-Assets/nw-still2.png"
import Still3 from "../assets/NewWoman-Assets/nw-still3.png"

import CastCard from "../components/CastCard"
import AwardCard from "../components/AwardCard"
import MovieDescription from "../components/MovieDescription"
import Video from "../components/Video"
import MovieAwardCards from "../components/AwardSection"

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
        <MovieAwardCards />
        {/* <div className="flex gap-6 self-start flex-wrap">
          <AwardCard
            image={<GiLaurels />}
            org="Broken Knuckle Film Festival"
            type="Winner"
            award="Best Music Video"
            nominee="Benjamin Noah"
            year="2015"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Canada International Film Festival"
            type="Winner"
            award="Music Video"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Canada Shorts Film Festival"
            type="Winner"
            award="Best Short"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="IndieWise Film Festival"
            type="Winner"
            award="Best Director"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="
International Open Film Festival (IOFF)"
            type="Nominee"
            award="Best International Short Film"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Leeds International Film Festival"
            type="Nominee"
            award="Best International Music Video"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Near Nazareth Film Festival"
            type="Winner"
            award="Best Music Video"
            nominee="Benjamin Noah"
            year="2016"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Snowtown Film Festival"
            type="Nominee"
            award="Outstanding Foreign Short Film"
            nominee="Benjamin Noah"
            year="2017"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Top Shorts Film Festival"
            type="Winner"
            award="Best Music Video"
            nominee="Benjamin Noah"
            year="2017"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Top Shorts Film Festival"
            type="Winner"
            award="Music Video"
            nominee="Benjamin Noah"
            year="2017"
          />
        </div> */}
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
