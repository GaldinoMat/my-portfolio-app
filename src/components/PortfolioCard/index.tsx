import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
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
  const [isMobileOpen, setisMobileOpen] = useState(false)
  const { desktopImage, mobileImage } = projectImages

  const handlePortfolioClick = (bool: boolean) => {
    if (windowSize < 1024) setisMobileOpen(bool)
  }

  return (
    <div
      className={`w-full ${
        single ? "lg:w-full" : "lg:w-[485px]"
      } h-[32rem] shadow-md lg:flex lg:flex-row lg:items-center lg:justify-center relative group`}
      onClick={() => handlePortfolioClick(!isMobileOpen)}
      onKeyDown={() => handlePortfolioClick(true)}
      tabIndex={0}
      role="button"
    >
      <div className="relative h-full w-full z-0">
        {windowSize < 1024 ? (
          <Image
            className="z-0 rounded-lg"
            src={mobileImage.url}
            fill
            priority
            sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
            alt="project-image"
          />
        ) : (
          <Image
            className="z-0 object-cover object-left-bottom rounded-lg"
            src={desktopImage.url}
            fill
            priority
            sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
            alt="project-image"
          />
        )}
      </div>
      <div
        className={`flex w-full h-full absolute lg:p-9 top-0 left-0 bottom-0 right-0 opacity-0 z-0 transition-all group-hover:z-10 rounded-lg
        ${
          windowSize > 1024
            ? "group-hover:bg-[#212121] dark:group-hover:bg-[#373737] group-hover:opacity-100"
            : isMobileOpen
            ? "bg-[#212121] dark:bg-[#373737] opacity-100"
            : ""
        }`}
      >
        <div className="p-6 flex w-full h-full flex-col gap-6 justify-center lg:justify-between lg:items-start">
          <div className="flex w-full justify-between">
            <h4 className="text-slate-100 text-xl lg:text-3xl font-normal w-full">
              {projectName}
            </h4>
            {isOwner ? (
              <span className="text-center border border-slate-100 text-slate-100 p-3 py-1 rounded-md">
                Owner
              </span>
            ) : (
              <span className="text-center border border-slate-100 text-slate-100 p-3 py-1 rounded-md">
                Collaborator
              </span>
            )}
          </div>
          <p
            className={`text-sm lg:${
              single && "w-2/5"
            } font-normal lg:text-base text-slate-100`}
          >
            {projectDescription.text}
          </p>
          <ul className="flex flex-wrap gap-2">
            {stackList.map((stack) => (
              <li className="relative w-8 h-8" key={stack.url}>
                <Image
                  src={stack.url}
                  alt="icon"
                  fill
                  sizes="(max-width: 768px) 3.125rem,
              (max-width: 1200px) 2.5rem,
              2rem"
                />
              </li>
            ))}
          </ul>
          <div className="flex gap-6 w-full lg:gap-6">
            <Link
              className="text-center border border-slate-100 text-slate-100 w-[10rem] py-2 mx-auto lg:mx-0 rounded-md"
              target="_blank"
              href={projectRepoUrl}
            >
              Repository
            </Link>
            {projectReleaseUrl && (
              <Link
                className="text-center border border-slate-100 text-slate-100 w-[10rem] py-2 mx-auto lg:mx-0 rounded-md"
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
