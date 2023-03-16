import { ThemeProvider } from "next-themes"
import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
    <ThemeProvider attribute="class">
      <div className="relative">
        <Header />
        <main className="bg-white dark:bg-onyx flex flex-col gap-10 items-center justify-center text-onyx py-16">
          {children}
        </main>
        <Socials />
      </div>
    </ThemeProvider>
  )
}

export default Layout
