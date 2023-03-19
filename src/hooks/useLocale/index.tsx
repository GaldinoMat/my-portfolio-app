import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type LocaleContextType = {
  locale: string | undefined
  secondLocale: string
  messages: LocaleMessages
}

type LocaleProviderType = {
  children: ReactNode
}

type LocaleMessages = Record<string, any>

const LocaleContext = createContext<LocaleContextType>({
  locale: "",
  secondLocale: "",
  messages: {},
})

export function LocaleProvider({ children }: LocaleProviderType) {
  const { locale, locales, events } = useRouter()

  const [secondLocale, setSecondLocale] = useState(
    locales?.find((cur) => cur !== locale) as string
  )
  const [messages, setMessages] = useState<LocaleMessages>({})

  const handleLocaleChange = useCallback(async () => {
    setSecondLocale(locales?.find((cur) => cur !== locale) as string)

    try {
      const data = await fetch(
        `${window.location.origin}/locales/${locale}.json`
      ).then((resp) => {
        return resp.json()
      })
      setMessages(data)
    } catch (error) {
      console.error(`Error loading messages for locale ${locale}: ${error}`)
      setMessages({})
    }
  }, [locale, locales])

  useEffect(() => {
    handleLocaleChange()
    events.on("routeChangeComplete", handleLocaleChange)

    return () => {
      events.off("routeChangeComplete", handleLocaleChange)
    }
  }, [events, handleLocaleChange])

  const contextValue = useMemo(
    () => ({ locale, messages, secondLocale }),
    [locale, messages, secondLocale]
  )

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextType {
  return useContext(LocaleContext)
}
