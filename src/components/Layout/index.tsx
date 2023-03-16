import { ThemeProvider } from "next-themes"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import Socials from "./components/Socials"
import { LayoutType } from "./typings/types"

function Layout({ children }: LayoutType) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Header />
        <main className="bg-white dark:bg-onyx flex flex-col gap-10 items-center justify-center text-onyx">
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
