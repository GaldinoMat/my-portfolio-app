import React from "react"
import { PortfolioShowcaseType } from "./typings/types"

function PortfolioShowcase({ children }: PortfolioShowcaseType) {
  return (
    <div className="flex w-full flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-10">
      {children}
    </div>
  )
}

export default PortfolioShowcase
