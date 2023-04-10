import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="px-4 py-2 flex justify-between bg-primary">
      <Link to="/">
        <div className="flex">
          {/* <img src="" alt="" /> */}
          <h2 className="bg-primary text-white">Ark Film</h2>
        </div>
      </Link>
      <div className="flex gap-2 whitespace-nowrap text-white">
        <Link to="/new-woman" className="w-1/3">
          New Woman
        </Link>
        <Link to="/sundays" className="w-1/3">
          Sundays Poster
        </Link>
        <Link to="/the-hunt" className="w-1/3">
          The Hunt Poster
        </Link>
      </div>
      <div>Burger</div>
    </div>
  )
}

export default Nav
