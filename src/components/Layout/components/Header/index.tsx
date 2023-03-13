import { useState } from "react"
import DrawerButton from "./components/DrawerButton"
import DrawerMenu from "./components/DrawerMenu"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="w-full py-4 bg-[#101010] px-8 fixed">
      <DrawerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <DrawerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  )
}

export default Header
