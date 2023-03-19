import { useRouter } from "next/router"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  LocaleContextType,
  LocaleProviderType,
  LocaleMessages,
} from "./typings/types"

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
  const messagesCache = useRef<Record<string, LocaleMessages>>({})
  const [messages, setMessages] = useState<LocaleMessages>(() => {
    if (locale && messagesCache.current[locale]) {
      return messagesCache.current[locale]
    }
    return {}
  })

  const handleLocaleChange = useCallback(async () => {
    setSecondLocale(locales?.find((cur) => cur !== locale) as string)

    if (locale && messagesCache.current[locale]) {
      setMessages(messagesCache.current[locale])
    } else {
      try {
        const data = await fetch(
          `${window.location.origin}/locales/${locale}.json`
        ).then((resp) => {
          return resp.json()
        })
        messagesCache.current[locale as string] = data
        setMessages(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error loading messages for locale ${locale}: ${error}`)
        setMessages({})
      }
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
