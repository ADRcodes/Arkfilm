import React from "react"
import About from "../components/About"
import Posters from "../components/Posters"
import Video from "../components/Video"

const Home = () => {
  return (
    <div>
      <Video link="https://player.vimeo.com/video/312278488?h=bc370b44e2" />
      <Posters />
      <About />
    </div>
  )
}

export default Home
