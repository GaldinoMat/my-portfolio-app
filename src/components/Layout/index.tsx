import { ReactNode } from "react"
import Header from "./components/Header"
import Socials from "./components/Socials"

type LayoutType = {
  children: ReactNode
}

function Layout({ children }: LayoutType) {
  return (
    <div className="relative h-screen">
      <Header />
      <main className="h-auto bg-[#101010]">
        <div className="flex flex-col gap-5 h-full items-center justify-center text-white">
          {children}
        </div>
      </main>
      <Socials />
    </div>
  )
}

export default Layout
