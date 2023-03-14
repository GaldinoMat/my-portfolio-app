import React from "react"

type PageTitleType = {
  prefix: string
  suffix: string
}

function PageTitle({ prefix, suffix }: PageTitleType) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-medium text-center">
        <span className="text-[#481380]">{prefix}</span> {suffix}
      </h3>
    </div>
  )
}

export default PageTitle