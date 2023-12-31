import React from "react"

const Facebook = ({ link, size }) => {
  let width = "20px"
  let height = "20px"

  if (size) {
    width = size + "px"
    height = size + "px"
  }

  return (
    <a href={link}>
      <svg
        style={{ width: width, height: height }}
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 320 512">
        <path
          fill="currentColor"
          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
        />
      </svg>
    </a>
  )
}

export default Facebook
