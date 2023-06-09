export type ShowcaseType = {
  isOwner: boolean
  localizations: { projectDescription: { text: string } }[]
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
  single?: boolean
}
