import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ShowcaseType } from "./typings/types"

function PortfolioCard({
  isOwner,
  projectDescription,
  projectImages,
  projectName,
  projectReleaseUrl,
  projectRepoUrl,
  windowSize = 0,
  stackList,
  single = false,
}: ShowcaseType) {
  const { desktopImage, mobileImage } = projectImages

  return (
    <div
      className={`w-full ${
        single ? "lg:w-full" : "lg:w-[485px]"
      } h-[32rem] shadow-md lg:flex lg:flex-row lg:items-center lg:justify-center relative group`}
    >
      <div className="relative h-full w-full z-0">
        {windowSize < 1024 ? (
          <Image
            className="z-0 rounded-lg"
            src={mobileImage.url}
            fill
            alt="project-image"
          />
        ) : (
          <Image
            className="z-0 object-cover object-left rounded-lg"
            src={desktopImage.url}
            fill
            alt="project-image"
          />
        )}
      </div>
      <div className="flex w-full h-full absolute lg:p-9 top-0 left-0 bottom-0 right-0 opacity-0 group-hover:bg-[#212121] group-hover:opacity-100 z-0 transition-all group-hover:z-10 rounded-lg">
        <div className="p-6 flex w-full h-full flex-col gap-6 justify-center lg:justify-between lg:items-start">
          <div className="flex w-full justify-between">
            <h4 className="text-white text-xl lg:text-3xl font-normal w-full">
              {projectName}
            </h4>
            {isOwner ? (
              <span className="text-center border border-white text-white p-3 py-1 rounded-md">
                Owner
              </span>
            ) : (
              <span className="text-center border border-white text-white p-3 py-1 rounded-md">
                Collaborator
              </span>
            )}
          </div>
          <p
            className={`text-sm lg:${
              single && "w-2/5"
            } font-normal lg:text-base text-white`}
          >
            {projectDescription.text}
          </p>
          <ul className="flex flex-wrap gap-2">
            {stackList.map((stack) => (
              <li className="relative w-8 h-8" key={stack.url}>
                <Image src={stack.url} alt="icon" fill />
              </li>
            ))}
          </ul>
          <div className="flex gap-6 w-full lg:gap-6">
            <Link
              className="text-center border border-white text-white w-[10rem] py-2 mx-auto lg:mx-0 rounded-md"
              target="_blank"
              href={projectRepoUrl}
            >
              Repository
            </Link>
            {projectReleaseUrl && (
              <Link
                className="text-center border border-white text-white w-[10rem] py-2 mx-auto lg:mx-0 rounded-md"
                target="_blank"
                href={projectReleaseUrl}
              >
                Check it out!
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
