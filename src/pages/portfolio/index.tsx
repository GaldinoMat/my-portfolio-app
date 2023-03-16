import PageTitle from "@/components/PageTitle"
import PortfolioCard from "@/components/PortfolioCard"
import PortfolioShowcase from "@/components/PortfolioShowcase"
import { PortfolioTypes } from "@/components/typings/types"
import { gql } from "@apollo/client"
import type { GetServerSideProps } from "next"
import React, { useEffect, useState } from "react"
import client from "../../../apolloClient"

export function useWindowSize() {
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
    <div className="w-full lg:max-w-5xl lg:mx-auto px-8 lg:px-0 flex flex-col gap-8 lg:gap-18">
      <PageTitle
        prefix="My"
        suffix="portfolio."
        subtitleText="From Concept to Reality: My journey as a developer"
      />
      <PortfolioShowcase>
        {portfolioShowcases.map((showcase) => (
          <PortfolioCard
            single={false}
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
      </PortfolioShowcase>
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
