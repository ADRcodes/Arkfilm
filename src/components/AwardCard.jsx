import React from "react"

const AwardCard = ({ image, org, award, nominee, type, year }) => {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <p className="font-bold text-center">{org}</p>
      <div className="text-4xl  flex justify-center">{image}</div>
      <p>{type}</p>
      <p>{award}</p>
      <p>{nominee}</p>
      <p className="font-light">{year}</p>
    </div>
  )
}

export default AwardCard
