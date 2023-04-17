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
}) => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <h1 className="heading1 self-start font-semibold underline">{title}</h1>
        <h2 className="heading2 col-span-2 p-0 pb-2 self-end">Synopsis</h2>
        <div>
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
        <div className="col-span-2">
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
