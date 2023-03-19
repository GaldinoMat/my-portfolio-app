import { ThemeProvider } from "next-themes"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
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
      <ThemeProvider attribute="class">
        <div className="bg-slate-100 dark:bg-[#292929]">
          <Header />
          <main className="flex flex-col items-center justify-center gap-10 pb-[74.7px] text-[#212121] dark:text-slate-100">
            {children}
          </main>
          <Socials />
        </div>
      </ThemeProvider>
    </motion.div>
  )
}

export default Layout
