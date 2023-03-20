import Layout from "@/components/Layout"
import PageTitle from "@/components/PageTitle"
import PortfolioCard from "@/components/PortfolioCard"
import PortfolioShowcase from "@/components/PortfolioShowcase"
import { PortfolioTypes } from "@/components/typings/types"
import { useLocale } from "@/hooks/useLocale"
import { gql } from "@apollo/client"
import type { GetServerSideProps } from "next"
import Head from "next/head"
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

  const { messages } = useLocale()

  return (
    <>
      <Head>
        <title>Portfolio | Mateus Galdino</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis em Next.js e React. Confira meus projetos e cases de sucesso em e-commerce e outras tecnologias. Com habilidades em design, usabilidade e desenvolvimento web, eu posso ajudar a transformar suas ideias em realidade. Entre em contato e vamos trabalhar juntos!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mx-auto flex w-full flex-col gap-8 px-8 pt-[74.7px] md:max-w-xl md:px-0 lg:max-w-5xl lg:gap-14">
          <PageTitle
            prefix={messages.Portfolio?.pageTitlePrefix}
            suffix={messages.Portfolio?.pageTitleSuffix}
            subtitleText={messages.Portfolio?.pageSubTitle}
          />
          <PortfolioShowcase>
            {portfolioShowcases.map((showcase) => (
              <PortfolioCard
                single={false}
                key={showcase.projectName}
                isOwner={showcase.isOwner}
                localizations={showcase.localizations}
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
      </Layout>
    </>
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
        localizations {
          projectDescription {
            text
          }
          locale
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
