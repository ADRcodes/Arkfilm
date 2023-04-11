import React from "react"

const Video = ({ link }) => {
  return (
    <div className="relative w-full">
      <div className=" relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={link}
          frameBorder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </div>
    </div>
  )
}

export default Video
