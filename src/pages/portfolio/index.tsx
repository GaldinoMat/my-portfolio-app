import PageTitle from "@/components/PageTitle"
import PortfolioCard from "@/components/PortfolioCard"
import { ShowcaseType } from "@/components/typings/types"
import { gql } from "@apollo/client"
import type { GetServerSideProps } from "next"
import React, { useEffect, useState } from "react"
import client from "../../../apolloClient"

type PortfolioTypes = {
  portfolioShowcases: ShowcaseType[]
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}

function Portfolio({ portfolioShowcases }: PortfolioTypes) {
  const size = useWindowSize()

  return (
    <div className="w-full py-20 px-8 flex flex-col gap-6 lg:max-w-7xl lg:mx-auto">
      <PageTitle prefix="My" suffix="portfolio" />
      <div className="flex flex-col gap-20 lg:gap-28">
        {portfolioShowcases.map((showcase) => (
          <PortfolioCard
            key={showcase.projectName}
            isOwner={showcase.isOwner}
            projectDescription={showcase.projectDescription}
            projectImages={showcase.projectImages}
            projectName={showcase.projectName}
            projectReleaseUrl={showcase.projectReleaseUrl}
            projectRepoUrl={showcase.projectRepoUrl}
            windowSize={size.width}
            stackList={showcase.stackList}
          />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const getPortfolioCases = gql`
    query PortfolioQuery {
      portfolioShowcases {
        id
        projectName
        isOwner
        projectReleaseUrl
        projectRepoUrl
        projectDescription {
          text
        }
        projectImages {
          desktopImage {
            url
          }
          mobileImage {
            url
          }
        }
        stackList {
          url
        }
      }
    }
  `

  const { data } = await client.query({
    query: getPortfolioCases,
  })

  return {
    props: data,
  }
}

export default Portfolio
