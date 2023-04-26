import React from "react"
import { GiLaurels } from "react-icons/gi"

const AwardCard = ({ image, org, award, nominee, type, year }) => {
  return (
    <div className="flex flex-col items-center sm:w-[240px] w-[150px]">
      {!image && <p className="font-bold text-center">{org}</p>}
      <div className="text-4xl  flex justify-center py-2">
        {image && (
          <img
            className="object-contain w-full h-[150px]"
            src={image}
            alt="laurel"
          />
        )}
        {!image && (
          <div className="">
            <GiLaurels size={70} />
          </div>
        )}
      </div>
      <p className="text-center italic">{type}</p>
      <p className="text-center font-semibold">{award}</p>
      <p className="text-center">{nominee}</p>
      {!image && <p className="font-light">{year}</p>}
    </div>
  )
}

export default AwardCard
