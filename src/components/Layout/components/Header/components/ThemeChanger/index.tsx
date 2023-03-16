import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import SunIcon from "public/sun-svgrepo-com.svg"
import MoonIcon from "public/new-moon-svgrepo-com.svg"

function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="relative z-30 h--7 w-7"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image
        src={theme === "light" ? MoonIcon : SunIcon}
        alt="theme-icon"
        fill
      />
    </button>
  )
}

export default ThemeChanger
