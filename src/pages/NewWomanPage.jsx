import React from "react"
import {
  BsFillPlayCircleFill,
  BsClockFill,
  BsVolumeUpFill,
} from "react-icons/bs"
import { MdSubtitles } from "react-icons/md"
import { GiLaurels } from "react-icons/gi"

import Still1 from "../assets/NewWoman-Assets/nw-still1.png"
import Still2 from "../assets/NewWoman-Assets/nw-still2.png"
import Still3 from "../assets/NewWoman-Assets/nw-still3.png"

const NewWomanPage = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="w-full xl:w-3/5 mx-auto brightness-90"
          src={Still3}
          alt=""
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] text-white">
          <BsFillPlayCircleFill />
        </p>
      </div>
      {/* <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src="https://player.vimeo.com/video/312278488?h=bc370b44e2"
          frameborder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </div> */}
      <div className="section-container pt-1">
        <h1 className="heading1 self-start font-semibold">New Woman</h1>
        <div className="grid grid-cols-2">
          <div>
            <p>
              Directed by <span className="font-semibold">Benjamin Noah</span>{" "}
            </p>
            <p className="mb-2">Newfoundland, Canada</p>
            <p className="font-light">Short film, Horror, Independent</p>
            <div className="flex">
              <p className="font-light flex items-center gap-1 my-1">
                <span className="bg-gray-400 px-1 font-bold text-sm mr-1">
                  HD
                </span>
                <span className="flex  gap-1 items-center mr-1">
                  <BsClockFill /> 30
                </span>
                <span className="flex gap-1 items-center mr-1">
                  <BsVolumeUpFill /> English
                </span>
                <span className="flex gap-1 items-center">
                  <MdSubtitles /> English
                </span>
              </p>
            </div>
            <p className="font-light">14+</p>
          </div>
          <div className="">
            <h2 className="heading2 pt-0 pb-2">Synopsis</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              incidunt quo magni itaque asperiores, fuga eos earum. Voluptatibus
              provident cupiditate esse nisi aut quod, alias praesentium
              necessitatibus unde velit sint.
            </p>
          </div>
        </div>
        <h2 className="heading2 self-start mt-5">Awards</h2>
        <div className="flex gap-6 self-start">
          <div>
            <div className="text-4xl">
              <GiLaurels />
            </div>
            <p>Venice Film Festival</p>
            <p className="font-light">2017</p>
          </div>
          <div>
            <div className="text-4xl">
              <GiLaurels />
            </div>
            <p>Venice Film Festival</p>
            <p className="font-light">2017</p>
          </div>
          <div>
            <div className="text-4xl">
              <GiLaurels />
            </div>
            <p>Venice Film Festival</p>
            <p className="font-light">2017</p>
          </div>
        </div>
        <h2 className="heading2 self-start mt-5">Cast & Crew</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 py-4 self-start">
          <div className="bg-gray-200">
            <img
              className="w-[180px] grayscale hover:sepia"
              src={Still1}
              alt=""
            />
            <p className="pt-2 px-2">Benjamin Noah</p>
            <p className="pb-2 px-2 font-light">Director, Producer</p>
          </div>
          <div className="bg-gray-200">
            <img
              className="w-[180px]"
              src={Still1}
              alt=""
            />
            <p className="pt-2 px-2">Benjamin Noah</p>
            <p className="pb-2 px-2 font-light">Director, Producer</p>
          </div>
          <div className="bg-gray-200">
            <img
              className="w-[180px]"
              src={Still1}
              alt=""
            />
            <p className="pt-2 px-2">Benjamin Noah</p>
            <p className="pb-2 px-2 font-light">Director, Producer</p>
          </div>
          <div className="bg-gray-200">
            <img
              className="w-[180px]"
              src={Still1}
              alt=""
            />
            <p className="pt-2 px-2">Benjamin Noah</p>
            <p className="pb-2 px-2 font-light">Director, Producer</p>
          </div>
          <div className="bg-gray-200">
            <img
              className="w-[180px]"
              src={Still1}
              alt=""
            />
            <p className="pt-2 px-2">Benjamin Noah</p>
            <p className="pb-2 px-2 font-light">Director, Producer</p>
          </div>
        </div>
        <div className="">
          <h2 className="heading2 mt-5">The Making Of New Woman</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            incidunt quo magni itaque asperiores, fuga eos earum. Voluptatibus
            provident cupiditate esse nisi aut quod, alias praesentium
            necessitatibus unde velit sint.
          </p>
        </div>
        <div className="w-full">
          <h2 className="heading2 mt-5">Stills</h2>
          <div className="flex flex-wrap gap-2">
            <img
              className="object-cover w-[200px]"
              src={Still1}
              alt=""
            />
            <img
              className="object-cover w-[400px]"
              src={Still2}
              alt=""
            />
            <img
              className="object-cover w-[200px]"
              src={Still1}
              alt=""
            />
            <img
              className="object-cover w-[400px]"
              src={Still3}
              alt=""
            />
            <img
              className="object-cover w-[400px]"
              src={Still2}
              alt=""
            />
            <img
              className="object-cover w-[400px]"
              src={Still3}
              alt=""
            />
            <img
              className="object-cover w-[200px]"
              src={Still1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewWomanPage
