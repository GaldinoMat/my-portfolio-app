import Link from "next/link"
import React from "react"

type CTAButtonType = {
  text: string
  href: string
}

function CTAButton({ text, href }: CTAButtonType) {
  return (
    <div>
      <Link
        className="block h-10 text-center border border-onyx text-onyx min-w-[10rem] max-w-[12.5rem] py-2 px-3"
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}

export default CTAButton
