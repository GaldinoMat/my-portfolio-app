import Image from "next/image"
import Link from "next/link"
import React from "react"

function PortfolioCard() {
  return (
    <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-center">
      <div className="relative h-72 lg:w-1/2 lg:h-[500px] z-0">
        <Image className="z-0" src="" fill alt="project-image" />
      </div>
      <div className="bg-[#070707] p-6 flex flex-col gap-5 lg:h-64 lg:-ml-12 lg:z-10 lg:w-3/5 justify-center lg:justify-between">
        <h4 className="text-[#481380] text-xl lg:text-3xl font-normal">
          Project title goes here
        </h4>
        <p className="text-sm font-normal lg:text-base">
          Project text goes here
        </p>
        <Link
          className="text-center border border-[#481380] text-[#481380] w-[150px] py-2 mx-auto"
          href="/"
        >
          Link
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard
