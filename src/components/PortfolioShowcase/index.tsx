import React from "react"
import { PortfolioShowcaseType } from "./typings/types"

function PortfolioShowcase({ children }: PortfolioShowcaseType) {
  return <div className="flex flex-col gap-20 lg:gap-28">{children}</div>
}

export default PortfolioShowcase
