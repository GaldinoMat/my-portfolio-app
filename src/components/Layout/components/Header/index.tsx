import { useState } from "react"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"
import ThemeChanger from "./components/ThemeChanger"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="w-full bg-transparent fixed top-0 z-20">
      <section className="py-4 max-w-xs lg:max-w-5xl mx-auto flex justify-end">
        <ThemeChanger />
        <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </section>
    </header>
  )
}

export default Header
