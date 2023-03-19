import { ReactNode } from "react"

export type LocaleContextType = {
  locale: string | undefined
  secondLocale: string
  messages: LocaleMessages
}

export type LocaleProviderType = {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LocaleMessages = Record<string, any>
