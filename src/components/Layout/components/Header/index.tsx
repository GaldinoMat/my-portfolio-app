import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"
import ThemeChanger from "./components/ThemeChanger"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const { secondLocale } = useLocale()

  const { asPath } = useRouter()

  return (
    <header className="w-full bg-transparent fixed top-0 z-20">
      <section className="py-4 max-w-xs lg:max-w-5xl mx-auto gap-3 flex justify-end items-center">
        <Link href={asPath} locale={secondLocale}>
          {secondLocale?.toUpperCase()}
        </Link>
        <ThemeChanger />
        <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </section>
    </header>
  )
}

export default Header
