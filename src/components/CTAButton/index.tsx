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
        className="block h-10 text-center border-2 border-[#212121] dark:border-slate-100 text-[#212121] dark:text-slate-100 font-medium min-w-[10rem] max-w-[12.5rem] py-2 px-3 rounded-md"
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}

export default CTAButton
