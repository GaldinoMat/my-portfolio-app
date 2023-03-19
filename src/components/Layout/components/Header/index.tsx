import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"
import ThemeChanger from "./components/ThemeChanger"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const { locale } = useLocale()

  const { asPath } = useRouter()

  return (
    <header className="w-full bg-transparent fixed top-0 z-20">
      <section className="py-4 max-w-xs md:max-w-xl lg:max-w-5xl mx-auto gap-3 flex justify-end items-center">
        <div className="flex border border-[#212121]">
          <Link
            className={`px-3 transition-all font-medium ${
              locale === "pt"
                ? "bg-[#212121] dark:bg-slate-100 text-slate-100 dark:text-[#292929]"
                : "bg-slate-100 dark:bg-[#373737]"
            }`}
            href={asPath}
            locale="pt"
          >
            PT
          </Link>
          <Link
            className={`px-3 transition-all font-medium ${
              locale === "en"
                ? "bg-[#212121] dark:bg-slate-100 text-slate-100 dark:text-[#292929]"
                : "bg-slate-100 dark:bg-[#373737]"
            }`}
            href={asPath}
            locale="en"
          >
            EN
          </Link>
        </div>
        <ThemeChanger />
        <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </section>
    </header>
  )
}

export default Header
