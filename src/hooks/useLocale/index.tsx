import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type LocaleContextType = {
  locale: string | undefined
  secondLocale: string | undefined
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
  const router = useRouter()

  const { locales } = router

  const [locale, setLocale] = useState(router.locale)

  const [secondLocale, setSecondLocale] = useState(
    locales?.find((cur) => cur !== locale)
  )
  const [messages, setMessages] = useState<LocaleMessages>({})

  useEffect(() => {
    const handleLocaleChange = async () => {
      setLocale(router.locale)
      setSecondLocale(locales?.find((cur) => cur !== locale))

      try {
        const data = await fetch(
          `${window.location.origin}/locales/${locale}.json`
        ).then((resp) => {
          return resp.json()
        })
        setMessages(data)
      } catch (error) {
        setMessages({})
        console.error(`Error loading messages for locale ${locale}: ${error}`)
        setMessages({})
      }
    }

    handleLocaleChange()

    router.events.on("routeChangeComplete", handleLocaleChange)

    return () => {
      router.events.off("routeChangeComplete", handleLocaleChange)
    }
  }, [locale, locales, router])

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
