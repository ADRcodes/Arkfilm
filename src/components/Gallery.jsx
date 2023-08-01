import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const NWimages = [
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-08cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-08cbw.jpg",
    description: "Ben and Noah",
    type: "promotional",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-25cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-25cbw.jpg",
    description: "Ben and Noah",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-35cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-35cbw.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-44cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-44cbw.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-51c.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-51c.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-53c.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-53c.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-55c.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-55c.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-62cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-62cbw.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-66c.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-66c.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/BenBW-12.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/BenBW-12.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/BenBW-46.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/BenBW-46.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/BenBW-60.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/BenBW-60.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/benColord-11.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/benColord-11.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/benColord-21.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/benColord-21.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/benColord-48.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/benColord-48.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/benColord-70.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/benColord-70.jpg",
  },
  {
    original:
      "src/assets/NewWoman-Assets/BTS/BTS Director shifting a prop while continuity Amanda Foote looks on. Photo by Ritchie Perez.jpg",
    thumbnail:
      "src/assets/NewWoman-Assets/BTS/BTS Director shifting a prop while continuity Amanda Foote looks on. Photo by Ritchie Perez.jpg",
  },
  {
    original:
      "src/assets/NewWoman-Assets/BTS/BTS Lead Actor Rhiannon Morgan and Producer_Director Benjamin Noah.jpg",
    thumbnail:
      "src/assets/NewWoman-Assets/BTS/BTS Lead Actor Rhiannon Morgan and Producer_Director Benjamin Noah.jpg",
  },
  {
    original:
      "src/assets/NewWoman-Assets/BTS/BTS Stephen Oates Co-Star Of New Woman on Location. Photo By David Howells.jpg",
    thumbnail:
      "src/assets/NewWoman-Assets/BTS/BTS Stephen Oates Co-Star Of New Woman on Location. Photo By David Howells.jpg",
  },
  {
    original:
      "src/assets/NewWoman-Assets/BTS/Rhiannon Morgan in between takes. Photo By David Howells.jpg",
    thumbnail:
      "src/assets/NewWoman-Assets/BTS/Rhiannon Morgan in between takes. Photo By David Howells.jpg",
  },
  {
    original:
      "src/assets/NewWoman-Assets/BTS/Stephen Oates Co-Star Of New Woman on Location. Photo By David Howells.jpg",
    thumbnail:
      "src/assets/NewWoman-Assets/BTS/Stephen Oates Co-Star Of New Woman on Location. Photo By David Howells.jpg",
  },
  {
    original: "src/assets/NewWoman-Assets/BTS/unnamed-1.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/unnamed-1.jpg",
  },
]

const Sundaysimages = [
  {
    original: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-08cbw.jpg",
    thumbnail: "src/assets/NewWoman-Assets/BTS/ben_noah_film_dec2017-08cbw.jpg",
  },
]

const Gallery = ({ film }) => {
  let images = []

  if (film === "NW") {
    images = NWimages
  } else if (film === "Sundays") {
    images = Sundaysimages
  }

  return (
    <div className="w-[100%] overflow-hidden">
      <ImageGallery
        items={images}
        renderItem={(item) => (
          <div className="image-gallery-image">
            <img
              src={item.original}
              alt={item.originalAlt}
              style={{ height: "600px" }} // Adjust the height as needed
              className="object-cover m-auto"
            />
          </div>
        )}
        renderThumbInner={(item) => (
          <img
            src={item.thumbnail}
            alt={item.thumbnailAlt}
            style={{ height: "100px" }} // Adjust the height as needed
            className="object-cover m-auto"
          />
        )}
      />
    </div>
  )
}

export default Gallery
