import Image from "next/image"
import React from "react"
import JavascriptCode from "public/JavaScript-code.jpg"

function ContactBox() {
  return (
    <div className="px-4 lg:px-12 py-4 bg-onyx shadow-md shadow-blue-munsell h-full lg:w-1/2 lg:h-[32.5rem] rounded-lg flex flex-col gap-5">
      <div className="w-full h-52 relative overflow-hidden rounded-sm">
        <Image
          src={JavascriptCode}
          fill
          alt="contact-me-image"
          className="focus:scale-105 hover:scale-105 transition-all"
        />
      </div>
      <ul className="text-lg flex flex-col gap-4 text-silver">
        <li>
          <h4 className="text-2xl font-medium mb-3">Mateus Galdino</h4>
          <p className="text-xl">Front end developer</p>
        </li>
        <li>Send me a message and let&apos;s schedule a call!</li>
        <li>You can also find me at: mateusgaldev@gmail.com</li>
        <li>Also, be sure to check out out my socials!</li>
      </ul>
    </div>
  )
}

export default ContactBox
