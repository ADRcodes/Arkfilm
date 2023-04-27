import React from "react"

const CastCard = ({ image, name, role }) => {
  return (
    <div className="bg-gray-600">
      <img
        className="w-[180px] h-[180px] object-cover grayscale hover:grayscale-0 transition-all"
        src={image}
        alt=""
      />
      <div className="py-2">
        <p className="px-2">{name}</p>
        <p className="px-2 font-light">{role}</p>
      </div>
    </div>
  )
}

export default CastCard
