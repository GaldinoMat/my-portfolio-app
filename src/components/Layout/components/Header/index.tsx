import { useState } from "react"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"
import LocaleChanger from "./components/LocaleChanger"
import ThemeChanger from "./components/ThemeChanger"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="fixed top-0 z-20 w-full bg-transparent">
      <section className="mx-auto flex max-w-xs items-center justify-end gap-3 py-4 md:max-w-xl lg:max-w-5xl">
        <LocaleChanger />
        <ThemeChanger />
        <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </section>
    </header>
  )
}

export default Header
