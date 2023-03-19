import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import React from "react"

function ContactBox() {
  const { messages } = useLocale()

  return (
    <div className="flex h-full flex-col gap-5 rounded-lg py-4 lg:h-[32.5rem] lg:w-1/2">
      <ul className="flex flex-col gap-4 text-lg">
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
