import React, { useState } from "react"
import movieData from "../assets/movie-data/NewWomanData"
import AwardCard from "./AwardCard"
import { GiLaurels } from "react-icons/gi"

function MovieAwardCards() {
  const [showAll, setShowAll] = useState(false)

  const awardsToDisplay = showAll
    ? movieData.awards
    : movieData.awards.slice(0, 4)

  return (
    <div className="w-full">
      <h2 className="heading2">Awards</h2>
      <div className="relative flex gap-6 self-start flex-wrap">
        {awardsToDisplay.map((award, index) => (
          <AwardCard
            image={<GiLaurels />}
            key={index}
            org={award.org}
            type={award.type}
            award={award.award}
            nominee={award.nominee}
            year={award.year}
          />
        ))}
        {!showAll && (
          <button
            className="absolute -top-10 right-0 text-white py-2 px-4 rounded-lg hover:underline"
            onClick={() => setShowAll(true)}>
            Show All
          </button>
        )}
        {showAll && (
          <button
            className="absolute -top-10 right-0 text-white py-2 px-4 rounded-lg hover:underline"
            onClick={() => setShowAll(false)}>
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}

export default MovieAwardCards
