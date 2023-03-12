import Link from "next/link"
import { DrawerType } from "../typings/types"

function DrawerMenu({ isNavOpen, setIsNavOpen }: DrawerType) {
  return (
    <nav
      className={`w-full h-screen fixed bg-[#101010] top-0 left-0 flex flex-col items-center justify-center gap-3 z-10 transition-all ${
        !isNavOpen && "-translate-y-full"
      }`}
    >
      {["Home", "About", "Portfolio", "Contact"].map((item) => (
        <Link
          href={`${item === "Home" ? "/" : item.toLowerCase()}`}
          key={item}
          className="text-[#F5F5F5] text-3xl"
          onClick={() => setIsNavOpen(false)}
        >
          {item}
        </Link>
      ))}
    </nav>
  )
}

export default DrawerMenu
