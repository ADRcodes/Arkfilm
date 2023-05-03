import React from "react"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const ContactPage = () => {
  return (
    <div className="h-[600px] w-full flex justify-center items-center">
      <div className="flex bg-blue-900 h-min">
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="src/assets/logos/arkfilm_logo.jpg"
            alt="logo"
          />
        </div>
        <div className="flex flex-col justify-around p-2">
          <h1 className="heading1 w-[400px]">Contact Ark Film</h1>
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            cupiditate, temporibus aliquid suscipit sunt fugiat neque vero quasi
            deserunt blanditiis reprehenderit ea aut voluptate ducimus
            repellendus saepe. Labore, rerum iure?
          </p>
          <div className="flex justify-center gap-5 p-3">
            <Facebook
              size="40"
              link="https://www.facebook.com/theark1979"
            />
            <Instagram
              size="40"
              link="https://www.instagram.com/arkfilm2049/"
            />
            <Twitter
              size="40"
              link="https://twitter.com/theark_1979"
            />
          </div>
          <p className="text-xl self-center">Contactarkfilm@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
