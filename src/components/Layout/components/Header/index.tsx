import { useState } from "react"
import { useTheme } from "next-themes"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="w-full bg-white dark:bg-onyx fixed z-20">
      <section className="py-4 max-w-[18.75rem] lg:max-w-5xl mx-auto">
        <button
          className="ml-16"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Dark theme
        </button>
        <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </section>
    </header>
  )
}

export default Header
