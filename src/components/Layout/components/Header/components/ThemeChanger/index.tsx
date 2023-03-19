import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import SunIcon from "public/sun-svgrepo-com.svg"
import MoonIcon from "public/new-moon-svgrepo-com.svg"
import { Theme, ToastContainer } from "react-toastify"

function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="relative z-30 h-7 w-7"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image
        src={currentTheme === "light" ? MoonIcon : SunIcon}
        alt="theme-icon"
        sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
        fill
      />
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
        theme={theme as Theme}
      />
    </button>
  )
}

export default ThemeChanger
