import PortfolioCard from "@/components/PortfolioCard"
import React from "react"

function Portfolio() {
  return (
    <div className="w-full py-20 px-8 flex flex-col gap-6 lg:max-w-7xl lg:mx-auto">
      <div>
        <h3 className="text-4xl font-medium text-center">
          <span className="text-[#481380]">My</span> portfolio
        </h3>
      </div>
      <div className="flex flex-col gap-20 lg:gap-28">
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  )
}

export default Portfolio
