import React, { ReactNode } from "react"

type PortfolioShowcaseType = {
  children: ReactNode
}

function PortfolioShowcase({ children }: PortfolioShowcaseType) {
  return <div className="flex flex-col gap-20 lg:gap-28">{children}</div>
}

export default PortfolioShowcase
