import { InfoType } from "../Layout/components/Socials/components/typings/types"
import { ShowcaseType } from "../PortfolioCard/typings/types"

export type InfoCardType = InfoType & {
  title: string
  subtitle: string
}

export type PortfolioTypes = {
  portfolioShowcases: ShowcaseType[]
}
