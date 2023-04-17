import React from "react"

import logo from "../assets/logos/arkfilm_logo.jpg"

const Footer = () => {
  return (
    <footer>
      <div className="section-container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between gap-10">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ark Film
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0">
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="w-full my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
          ©{" "}
          <a
            href="/"
            className="hover:underline">
            Ark Film™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
