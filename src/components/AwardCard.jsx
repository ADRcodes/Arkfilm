import React from "react"

const AwardCard = ({ image, org, award, nominee, type, year }) => {
  return (
    <div className="flex flex-col items-center w-[240px]">
      {/* <p className="font-bold text-center">{org}</p> */}
      <div className="text-4xl  flex justify-center py-2">
        <img
          className="object-contain w-full h-[150px]"
          src={image}
          alt="laurel"
        />
      </div>
      <p className="text-center italic">{type}</p>
      <p className="text-center font-semibold">{award}</p>
      <p className="text-center">{nominee}</p>
      {/* <p className="font-light">{year}</p> */}
    </div>
  )
}

export default AwardCard
