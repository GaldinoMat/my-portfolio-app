export type InfoType = {
  logoSource: string
  alt: string
  href?: string | ""
}

export type InfoCardType = InfoType & {
  text: string
}

export type ShowcaseType = {
  isOwner: boolean
  projectDescription: { text: string }
  projectImages: {
    desktopImage: { url: string }
    mobileImage: { url: string }
  }
  projectName: string
  projectReleaseUrl: string
  projectRepoUrl: string
  windowSize?: number
  stackList: { url: string }[]
}
