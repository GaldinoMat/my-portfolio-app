import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import { DrawerType } from "../typings/types"

function DrawerMenu({ isNavOpen, setIsNavOpen }: DrawerType) {
  const { messages } = useLocale()

  return (
    <nav
      className={`fixed top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center gap-3 bg-[#EAEAEA] transition-all dark:bg-[#212121] ${
        !isNavOpen && "-translate-y-full"
      }`}
    >
      {[
        ["Home", "/"],
        [messages.Navigation?.navPortfolio, "portfolio"],
        [messages.Navigation?.navContact, "contact"],
      ].map(([title, url]) => (
        <Link
          href={url}
          key={url}
          className="text-3xl font-medium text-[#212121] dark:text-slate-100"
          onClick={() => setIsNavOpen(false)}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default DrawerMenu
