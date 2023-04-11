import React from "react"

const Hero = () => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src="https://player.vimeo.com/video/312278488?h=bc370b44e2"
        width="100%"
        height="100%"
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  )
}

export default Hero
