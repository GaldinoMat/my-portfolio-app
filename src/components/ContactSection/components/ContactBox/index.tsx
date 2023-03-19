import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import React from "react"

function ContactBox() {
  const { messages } = useLocale()

  return (
    <div className="py-4 h-full lg:w-1/2 lg:h-[32.5rem] rounded-lg flex flex-col gap-5">
      <ul className="text-lg flex flex-col gap-4">
        <li>Brasilia, {messages.Contact?.country}</li>
        <li>
          {messages.Contact?.emailDisclaimer}{" "}
          <Link href="mailto:mail.com" className="hover:underline">
            mateusgaldev@gmail.com
          </Link>
        </li>
        <li>{messages.Contact?.socialsDisclaimer}</li>
      </ul>
    </div>
  )
}

export default ContactBox
