import Link from "next/link"
import React from "react"

function ContactBox() {
  return (
    <div className="px-4 lg:px-12 py-4 bg-onyx shadow-md shadow-blue-munsell h-full lg:w-1/2 lg:h-[32.5rem] rounded-lg flex flex-col gap-5">
      <ul className="text-lg flex flex-col gap-4 text-silver">
        <li>Brasília, Brazil</li>
        <li>
          You can also find me at:{" "}
          <Link href="mailto:mail.com" className="hover:underline">
            mateusgaldev@gmail.com
          </Link>
        </li>
        <li>Also, be sure to check out out my socials!</li>
      </ul>
    </div>
  )
}

export default ContactBox
