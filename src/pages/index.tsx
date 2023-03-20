import AboutMeHero from "@/components/AboutMe"
import CTAButton from "@/components/CTAButton"
import Layout from "@/components/Layout"
import PageTitle from "@/components/PageTitle"
import PortfolioCard from "@/components/PortfolioCard"
import PortfolioShowcase from "@/components/PortfolioShowcase"
import ServicesList from "@/components/ServicesList"
import StacksList from "@/components/StacksList"
import { PortfolioTypes } from "@/components/typings/types"
import { useLocale } from "@/hooks/useLocale"
import { gql } from "@apollo/client"
import Head from "next/head"
import { GetServerSideProps } from "next/types"
import { useEffect, useState } from "react"
import client from "../../apolloClient"

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

export default function Home({ portfolioShowcases }: PortfolioTypes) {
  const size = useWindowSize()

  const { messages } = useLocale()

  return (
    <>
      <Head>
        <title>Home | Mateus Galdino</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis em Next.js e React. Confira meus projetos e cases de sucesso em e-commerce e outras tecnologias. Com habilidades em design, usabilidade e desenvolvimento web, eu posso ajudar a transformar suas ideias em realidade. Entre em contato e vamos trabalhar juntos!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutMeHero />
        <div className="flex w-full flex-col gap-8 px-8 md:max-w-xl md:px-0 lg:mx-auto lg:max-w-5xl lg:gap-14">
          <ServicesList />
          <div className="flex w-full flex-col gap-6 lg:gap-10">
            <PageTitle
              prefix={messages.Home?.homeCasesPrefix}
              suffix={messages.Home?.homeCasesSuffix}
            />
            <PortfolioShowcase>
              {portfolioShowcases.map((showcase) => (
                <PortfolioCard
                  single
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
            <CTAButton href="/portfolio" text={messages.Home?.casesCTA} />
          </div>
          <StacksList />
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const getPortfolioCases = gql`
    query PortfolioQuery {
      portfolioShowcases(last: 3) {
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
