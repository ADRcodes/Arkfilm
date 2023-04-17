import React from "react"

const CastCard = ({ image, name, role }) => {
  return (
    <div className="bg-gray-600">
      <img
        className="w-[180px] h-[180px] object-cover grayscale hover:grayscale-0 transition-all"
        src={image}
        alt=""
      />
      <p className="pt-2 px-2">{name}</p>
      <p className="pb-2 px-2 font-light">{role}</p>
    </div>
  )
}

export default CastCard
