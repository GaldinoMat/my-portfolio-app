import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ShowcaseType } from "../typings/types"

function PortfolioCard({
  isOwner,
  projectDescription,
  projectImages,
  projectName,
  projectReleaseUrl,
  projectRepoUrl,
  windowSize = 0,
  stackList,
}: ShowcaseType) {
  const { desktopImage, mobileImage } = projectImages

  return (
    <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-center">
      <div className="relative h-[31rem] lg:w-2/3 z-0">
        {windowSize < 1024 ? (
          <Image
            className="z-0"
            src={mobileImage.url}
            fill
            alt="project-image"
          />
        ) : (
          <Image
            className="z-0"
            src={desktopImage.url}
            fill
            alt="project-image"
          />
        )}
      </div>
      <div className="bg-[#070707] p-6 flex flex-col gap-6 lg:-ml-12 lg:z-10 lg:w-3/5 justify-center lg:justify-between">
        <div className="flex justify-between">
          <h4 className="text-[#481380] text-xl lg:text-3xl font-normal w-full">
            {projectName}
          </h4>
          {isOwner ? (
            <span className="text-center border border-[#481380] text-[#481380] p-3 py-1">
              Owner
            </span>
          ) : (
            <span className="text-center border border-[#481380] text-[#481380] p-3 py-1">
              Collaborator
            </span>
          )}
        </div>
        <p className="text-sm font-normal lg:text-base">
          {projectDescription.text}
        </p>
        <span>
          <ul className="flex gap-2">
            {stackList.map((stack) => (
              <li className="relative w-8 h-8" key={stack.url}>
                <Image src={stack.url} alt="icon" fill />
              </li>
            ))}
          </ul>
        </span>
        <div className="lg:flex lg:justify-center lg:gap-6">
          <Link
            className="text-center border border-[#481380] text-[#481380] w-[10rem] py-2 mx-auto lg:mx-0"
            target="_blank"
            href={projectRepoUrl}
          >
            Repository
          </Link>
          {projectReleaseUrl && (
            <Link
              className="text-center border border-[#481380] text-[#481380] w-[10rem] py-2 mx-auto lg:mx-0"
              target="_blank"
              href={projectReleaseUrl}
            >
              Check it out!
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
