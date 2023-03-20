import { useLocale } from "@/hooks/useLocale"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

function LocaleChanger() {
  const { locale } = useLocale()

  const { asPath } = useRouter()

  return (
    <div className="mr-auto flex border border-[#212121] lg:mr-0">
      <Link
        className={`px-3 font-medium transition-all ${
          locale === "pt"
            ? "bg-[#212121] text-slate-100 dark:bg-slate-100 dark:text-[#292929]"
            : "bg-slate-100 dark:bg-[#373737]"
        }`}
        href={asPath}
        locale="pt"
      >
        PT
      </Link>
      <Link
        className={`px-3 font-medium transition-all ${
          locale === "en"
            ? "bg-[#212121] text-slate-100 dark:bg-slate-100 dark:text-[#292929]"
            : "bg-slate-100 dark:bg-[#373737]"
        }`}
        href={asPath}
        locale="en"
      >
        EN
      </Link>
    </div>
  )
}

export default LocaleChanger
