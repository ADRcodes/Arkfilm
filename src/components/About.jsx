import React from "react"

const About = () => {
  return (
    <div className="section-container mx-auto my-10">
      <h1 className="heading2 mb-4">About Ark Film</h1>
      <div className="grid grid-cols-4 gap-10">
        <div className="w-48 h-48 rounded-full self-center">
          <img
            className="w-full h-full object-cover rounded-full"
            src="src/assets/logos/arkfilm_logo.jpg"
            alt="logo"
          />
        </div>
        <p className="col-span-3 self-center">
          Ark Film was formed in 2015 by Benjamin Noah in Newfoundland &
          Labrador. The collective of artists hand-picked Noah gather with a
          focus on pushing the envelope of independent filmmaking. A goal of
          transcending form and genre is at the forefront of each project,
          displaying a level of quality that far outreaches their budgets and
          schedules. Completing our final medium-format projects is nearing
          production - paving the way for several long-form projects currently
          in development. Stay Tuned!
        </p>
      </div>
    </div>
  )
}

export default About
