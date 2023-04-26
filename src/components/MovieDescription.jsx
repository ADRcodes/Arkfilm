import React from "react"
import { BsClockFill, BsVolumeUpFill } from "react-icons/bs"
import { MdSubtitles } from "react-icons/md"

const MovieDescription = ({
  title,
  director,
  location,
  genres,
  resolution,
  length,
  language,
  subtitles,
  rating,
  synopsis,
  reviews,
  font,
}) => {
  return (
    <div className="relative grid grid-cols-3 gap-2">
      <h1 className="heading1 self-start font-semibold underline order-1 md:col-span-1 col-span-3">
        {title}
      </h1>
      <div className="md:order-3 order-2 md:col-span-1 col-span-3">
        <p>
          Directed by <span className="font-semibold">{director}</span>{" "}
        </p>
        <p className="mb-2">{location}</p>
        <p className="font-light">{genres}</p>
        <div className="flex">
          <p className="font-light flex items-center gap-1 my-1">
            <span className="bg-gray-500 px-1 font-bold text-sm mr-1">
              {resolution}
            </span>
            <span className="flex  gap-1 items-center mr-1">
              <BsClockFill /> {length}
            </span>
            <span className="flex gap-1 items-center mr-1">
              <BsVolumeUpFill /> {language}
            </span>
            <span className="flex gap-1 items-center">
              <MdSubtitles /> {subtitles}
            </span>
          </p>
        </div>
        <p className="font-light">{rating}</p>
      </div>
      <h2 className="heading2 p-0 pb-2 self-end md:order-2 order-3 md:col-span-2 col-span-3">
        Synopsis
      </h2>
      <div
        className={`md:col-span-2 col-span-3 md:order-4 order-3 ${font} nw-text`}>
        <p>{synopsis}</p>
      </div>
      {reviews && (
        <a
          className="absolute -bottom-2 right-0 hover:underline"
          href={reviews}
          target="_blank">
          See reviews on IMDB
        </a>
      )}
    </div>
  )
}

export default MovieDescription
