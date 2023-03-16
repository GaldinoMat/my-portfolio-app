import React from "react"
import { PageTitleType } from "./typings/types"

function PageTitle({ prefix, suffix, subtitleText }: PageTitleType) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-3xl lg:text-5xl font-medium">
        <span className="text-[#A6A6A6]">{prefix}</span> {suffix}
      </h3>
      {subtitleText && (
        <p className="text-base lg:text-xl font-medium">{subtitleText}</p>
      )}
    </div>
  )
}

export default PageTitle
