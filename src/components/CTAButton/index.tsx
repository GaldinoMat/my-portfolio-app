import Link from "next/link"
import React from "react"
import { CTAButtonType } from "./typings/types"

function CTAButton({ text, href }: CTAButtonType) {
  return (
    <div>
      <Link
        className="block h-10 min-w-[10rem] max-w-[12.5rem] rounded-md border-2 border-[#212121] py-2 px-3 text-center font-medium text-[#212121] dark:border-slate-100 dark:text-slate-100"
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}

export default CTAButton
