import React from "react"
import { PortfolioShowcaseType } from "./typings/types"

function PortfolioShowcase({ children }: PortfolioShowcaseType) {
  return (
    <div className="flex w-full flex-col gap-16 lg:flex-row lg:flex-wrap lg:gap-12">
      {children}
    </div>
  )
}

export default PortfolioShowcase
