export type InfoType = {
  logoSource: string
  alt: string
  href?: string | ""
}

export type InfoCardType = InfoType & {
  text: string
}
