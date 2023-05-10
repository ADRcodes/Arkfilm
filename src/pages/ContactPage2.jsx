import React from "react"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"

const ContactPage2 = () => {
  return (
    <div className="w-full flex justify-center items-center my-[200px]">
      <div className="flex flex-col h-min">
        <div
          className="relative  w-[700px] h-[700px] overflow-hidden bg-black"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
          <img
            src="src/assets/logos/arkfilm_logo.jpg"
            alt="Your Image"
            className="absolute top-[20%] left-[20%] h-[60%] w-[60%] object-cover "
          />
          <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2">
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
            <p className="text-xl self-center pt-3">Contactarkfilm@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage2
