import { ThemeProvider } from "next-themes"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
    <ThemeProvider attribute="class">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="bg-slate-100 dark:bg-[#292929]">
          <Header />
          <main className="text-[#212121] dark:text-slate-100 flex flex-col gap-10 items-center justify-center pb-[74.7px]">
            {children}
          </main>
          <Socials />
        </div>
      </motion.div>
    </ThemeProvider>
  )
}

export default Layout
