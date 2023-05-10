import React from "react"
import Facebook from "../assets/SVGs/Facebook"
import Instagram from "../assets/SVGs/Instagram"
import Twitter from "../assets/SVGs/Twitter"
import ContactPage2 from "./ContactPage2"
import ContactPage3 from "./ContactPage3"
import ContactPage4 from "./ContactPage4"

const ContactPage = () => {
  return (
    <div>
      <div className="h-[800px] w-full flex justify-center items-center">
        <div className="flex bg-gray-700 h-min">
          <div className="w-[400px] flex">
            <img
              className="aspect-square object-cover"
              src="src/assets/logos/arkfilm_logo.jpg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-around p-[20px]">
            <h1 className="heading1 w-[400px]">Contact Ark Film</h1>
            <p className="w-[400px]">
              Welcome to our contact page! If you have any questions or are
              interested in collaborating with us on a film project, please
              reach out.
              <br />
              For press or media inquiries, we are happy to provide additional
              information.
              <br />
              Follow us on social media to stay updated on our latest projects
              and events.
              <br />
              <br />
              Thank you for your interest in our work!
            </p>
            <div className="flex justify-center gap-10 p-8">
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
      <ContactPage2 />
      <ContactPage3 />
      <ContactPage4 />
    </div>
  )
}

export default ContactPage
