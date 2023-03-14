import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
    <div className="relative">
      <Header />
      <main className="bg-[#101010]">
        <div className="flex flex-col gap-5 items-center justify-center text-white">
          {children}
        </div>
      </main>
      <Socials />
    </div>
  )
}

export default Layout
