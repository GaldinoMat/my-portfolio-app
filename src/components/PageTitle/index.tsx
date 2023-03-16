import React from "react"
import { PageTitleType } from "./typings/types"

function PageTitle({
  prefix,
  suffix,
  desktopFontSize = 6,
  mobileFontSize = 4,
}: PageTitleType) {
  return (
    <div>
      <h3
        className={`text-${mobileFontSize}xl lg:text-${desktopFontSize}xl font-medium`}
      >
        <span className="text-paynes-gray">{prefix}</span> {suffix}
      </h3>
    </div>
  )
}

export default PageTitle
