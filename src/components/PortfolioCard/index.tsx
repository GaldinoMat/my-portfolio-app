import { useLocale } from "@/hooks/useLocale"
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
  localizations,
}: ShowcaseType) {
  const [isMobileOpen, setisMobileOpen] = useState(false)
  const { desktopImage, mobileImage } = projectImages

  const { locale, messages } = useLocale()

  const handlePortfolioClick = (bool: boolean) => {
    if (windowSize < 820) setisMobileOpen(bool)
  }

  return (
    <div
      className={`w-full ${
        single ? "lg:w-full" : "lg:w-[485px]"
      } group relative h-[32rem] rounded-lg shadow-md lg:flex lg:flex-row lg:items-center lg:justify-center`}
      onClick={() => handlePortfolioClick(!isMobileOpen)}
      onKeyDown={() => handlePortfolioClick(true)}
      tabIndex={0}
      role="button"
    >
      <div className="relative z-0 h-full w-full">
        {windowSize < 768 ? (
          <Image
            className="z-0 rounded-lg object-cover object-top"
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
            className="z-0 rounded-lg object-cover object-left-bottom"
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
        className={`absolute top-0 left-0 bottom-0 right-0 z-0 flex h-full w-full rounded-lg opacity-0 transition-all group-hover:z-10 lg:p-9
        ${
          windowSize > 820
            ? "group-hover:bg-[#212121] group-hover:opacity-100 dark:group-hover:bg-[#373737]"
            : isMobileOpen
            ? "bg-[#212121] opacity-100 dark:bg-[#373737]"
            : ""
        }`}
      >
        <div className="flex h-full w-full flex-col justify-center gap-6 p-6 lg:items-start lg:justify-between">
          <div className="flex w-full justify-between">
            <h4 className="w-full text-xl font-normal text-slate-100 lg:text-3xl">
              {projectName}
            </h4>
            {isOwner ? (
              <span className="rounded-md border border-slate-100 p-3 py-1 text-center text-slate-100">
                {messages.Portfolio?.isOwner}
              </span>
            ) : (
              <span className="rounded-md border border-slate-100 p-3 py-1 text-center text-slate-100">
                {messages.Portfolio?.isCollab}
              </span>
            )}
          </div>
          <p
            className={`text-sm lg:${
              single && "w-2/5"
            } font-normal text-slate-100 lg:text-base`}
          >
            {locale === "pt"
              ? localizations[0].projectDescription.text
              : projectDescription.text}
          </p>
          <ul className="flex flex-wrap gap-2">
            {stackList.map((stack) => (
              <li className="relative h-8 w-8" key={stack.url}>
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
          <div className="flex w-full gap-6 lg:gap-6">
            <Link
              className="mx-auto w-[10rem] rounded-md border border-slate-100 py-2 text-center text-slate-100 lg:mx-0"
              target="_blank"
              href={projectRepoUrl}
            >
              {messages.Portfolio?.ctaRepository}
            </Link>
            {projectReleaseUrl && (
              <Link
                className="mx-auto w-[10rem] rounded-md border border-slate-100 py-2 text-center text-slate-100 lg:mx-0"
                target="_blank"
                href={projectReleaseUrl}
              >
                {messages.Portfolio?.ctaCheckIt}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
