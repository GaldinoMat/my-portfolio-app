import { InfoType } from "../Layout/components/Socials/components/typings/types"
import { ShowcaseType } from "../PortfolioCard/typings/types"

export type InfoCardType = InfoType & {
  text: string
}

export type PortfolioTypes = {
  portfolioShowcases: ShowcaseType[]
}
