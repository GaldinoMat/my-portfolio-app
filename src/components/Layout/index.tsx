import { ThemeProvider } from "next-themes"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-slate-100 dark:bg-[#292929]">
        <Header />
        <main className="text-[#212121] flex flex-col gap-10 items-center justify-center pb-[74.7px]">
          {children}
        </main>
        <Socials />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </ThemeProvider>
  )
}

export default Layout
