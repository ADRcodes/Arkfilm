import React from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { GiLaurels } from "react-icons/gi"

import Still1 from "../assets/NewWoman-Assets/nw-still1.png"
import Still2 from "../assets/NewWoman-Assets/nw-still2.png"
import Still3 from "../assets/NewWoman-Assets/nw-still3.png"
import Rhiannon from "../assets/NewWoman-Assets/RhiannonMorgan.jpg"
import Stephen from "../assets/NewWoman-Assets/StephenOates.jpg"

import CastCard from "../components/CastCard"
import AwardCard from "../components/AwardCard"
import MovieDescription from "../components/MovieDescription"
import Video from "../components/Video"

const NewWomanPage = () => {
  return (
    <div className="flex flex-col">
      {/* ----- Hero Section ----- */}
      <div className="relative">
        <img
          className="w-full xl:w-3/5 mx-auto brightness-90"
          src={Still3}
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
        />
        {/* ----- Awards ----- */}
        <h2 className="heading2">Awards</h2>
        <div className="flex gap-6 self-start flex-wrap">
          <AwardCard
            image={<GiLaurels />}
            org="Australasia's Film Festival of Time"
            type="Winner"
            award="Best Short"
            nominee="Benjamin Noah"
            year="2020"
          />
          <AwardCard
            // image={<GiLaurels />}
            org="Australasia's Film Festival of Time"
            type="Winner"
            award="Best Director"
            nominee="Benjamin Noah"
            year="2020"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Chatham-Kent Film Festival"
            type="Winner"
            award="Best Actress"
            nominee="Rhiannon Morgan"
            year=""
          />
          <AwardCard
            image={<GiLaurels />}
            org="Chatham-Kent Film Festival"
            type="Winner"
            award="Best Cinematography"
            nominee="Troy Maher"
            year="2020"
          />
          {/* <AwardCard
            image={<GiLaurels />}
            org="Chatham-Kent Film Festival"
            type="Winner"
            award="Best Short Film"
            nominee="Benjamin Noah"
            year="2020"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Chatham-Kent Film Festival"
            type="Nominee"
            award="Best Director"
            nominee="Benjamin Noah"
            year="2020"
          />
          <AwardCard
            image={<GiLaurels />}
            org="Chatham-Kent Film Festival"
            type="Nominee"
            award="Best Costume Design"
            nominee="Deborah Clarke"
            year="2020"
          />
          <AwardCard
            image={<GiLaurels />}
            org="DROP: Russian International Horror Film Festival and Awards"
            type="Winner"
            award="Best Short Film"
            nominee="Benjamin Noah"
            year="2020"
          />
          <AwardCard
            image={<GiLaurels />}
            org=""
            type=""
            award=""
            nominee=""
            year=""
          />
          <AwardCard
            image={<GiLaurels />}
            org=""
            type=""
            award=""
            nominee=""
            year=""
          /> */}
        </div>
        {/* ----- Cast & Crew ----- */}
        <h2 className="heading2">Cast & Crew</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 py-4 self-start">
          <CastCard
            image={Still1}
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

export default NewWomanPage
