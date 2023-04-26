import React, { useState } from "react"
import AwardCard from "./AwardCard"

function AwardSection({ movieData }) {
  const [showAll, setShowAll] = useState(false)

  const awardsToDisplay = showAll
    ? movieData.awards
    : movieData.awards.slice(0, 6)

  return (
    <div className="w-full">
      <h2 className="heading2">Awards</h2>
      <div className="relative flex gap-6 self-start flex-wrap">
        {awardsToDisplay.map((award, index) => (
          <AwardCard
            image={award.img}
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
            className="absolute -top-10 -right-[14px] text-white py-2 px-4 rounded-lg hover:underline"
            onClick={() => setShowAll(true)}>
            Show All Laurels
          </button>
        )}
        {showAll && (
          <button
            className="absolute -top-10 -right-[14px] text-white py-2 px-4 rounded-lg hover:underline"
            onClick={() => setShowAll(false)}>
            Show Less Laurels
          </button>
        )}
      </div>
    </div>
  )
}

export default AwardSection
