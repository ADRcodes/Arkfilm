import React from "react"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const ContactPage3 = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center pb-[150px] pt-[50px] bg-[#C9C9C9] text-[#212121]">
        <img
          className="w-[30%] aspect-square object-cover "
          src="src/assets/logos/arkfilm_logo.jpg"
          alt="logo"
        />
        <h1 className="heading1 my-[50px]">Contact</h1>
        <p>
          ARK FILM
          <br />
          <br />
          Contactarkfilm@gmail.com
          <br />
          <br />
          1234 Main Street
          <br />
          Anytown, USA 12345
          <br />
          709-555-5555
        </p>
        <div className="flex justify-center gap-5 p-8">
          <Facebook
            size="20"
            link="https://www.facebook.com/theark1979"
          />
          <Instagram
            size="20"
            link="https://www.instagram.com/arkfilm2049/"
          />
          <Twitter
            size="20"
            link="https://twitter.com/theark_1979"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage3
