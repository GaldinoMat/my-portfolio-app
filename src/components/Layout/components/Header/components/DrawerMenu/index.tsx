import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import { DrawerType } from "../typings/types"

function DrawerMenu({ isNavOpen, setIsNavOpen }: DrawerType) {
  const { messages } = useLocale()

  return (
    <nav
      className={`w-full h-screen fixed bg-[#EAEAEA] dark:bg-[#212121] top-0 left-0 flex flex-col items-center justify-center gap-3 z-20 transition-all ${
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
          key={title?.toLowerCase()}
          className="text-[#212121] font-medium dark:text-slate-100 text-3xl"
          onClick={() => setIsNavOpen(false)}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default DrawerMenu
