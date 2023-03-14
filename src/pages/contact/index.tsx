import PageTitle from "@/components/PageTitle"
import Image from "next/image"
import React from "react"
import JavascriptCode from "public/JavaScript-code.jpg"

function Contact() {
  return (
    <div className="w-full h-full lg:h-screen py-20 px-8 flex flex-col gap-6 lg:max-w-7xl lg:mx-auto">
      <PageTitle prefix="Contact" suffix="me" />
      <div className="text-center">
        <p className="text-3xl font-normal">Send me an email!</p>
      </div>
      <div className="flex flex-col h-full lg:flex-row lg:items-center lg:justify-between gap-6 justify-self-center my-auto pb-8">
        <div className="px-4 lg:px-12 py-4 bg-[#191919] h-full lg:w-1/2 lg:h-[32.5rem] rounded-md flex flex-col gap-5">
          <div className="w-full h-52 relative overflow-hidden rounded-sm">
            <Image
              src={JavascriptCode}
              fill
              alt="contact-me-image"
              className="focus:scale-105 hover:scale-105 transition-all"
            />
          </div>
          <ul className="text-lg flex flex-col gap-4">
            <li>
              <h4 className="text-2xl font-medium mb-3">Mateus Galdino</h4>
              <p className="text-xl">Front end developer</p>
            </li>
            <li>Send me a message and let&apos;s schedule a call!</li>
            <li>You can also find me at: mateusgaldev@gmail.com</li>
            <li>Also, be sure to check out out my socials!</li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col gap-5 w-full lg:w-1/2 bg-[#191919] py-5 rounded-md">
          <form className="flex flex-col gap-4 w-full">
            <input
              className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
              placeholder="Your name here"
              type="text"
            />
            <input
              className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
              placeholder="You email here"
              type="email"
            />
            <input
              className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
              placeholder="Subject"
              type="text"
            />
            <textarea
              className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md h-full lg:min-h-[16rem]"
              placeholder="Enter your message here"
            />
            <button
              className="text-center border border-[#481380] text-[#481380] w-[10rem] py-2 mx-auto"
              type="submit"
            >
              Send!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
