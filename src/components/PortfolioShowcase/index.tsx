import React from "react"
import { PortfolioShowcaseType } from "./typings/types"

function PortfolioShowcase({ children }: PortfolioShowcaseType) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-16 w-full lg:gap-12">
      {children}
    </div>
  )
}

export default PortfolioShowcase
