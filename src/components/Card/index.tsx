import Image from "next/image"
import { InfoCardType } from "../typings/types"

function Card({
  alt,
  logoSource,
  title,
  subtitle,
  first = false,
  stackCard = false,
}: InfoCardType) {
  return (
    <div
      className={`${
        first
          ? "bg-[#292929] dark:bg-slate-100"
          : stackCard
          ? "bg-[#292929] dark:bg-[#373737]"
          : "bg-slate-100 dark:bg-[#373737]"
      } flex h-80 w-full flex-col items-start justify-center gap-2 rounded-lg px-6 text-center shadow-md md:w-[17rem] lg:w-[20.25rem] lg:justify-between lg:p-9`}
    >
      <div>
        <Image src={logoSource} alt={alt} width={40} height={40} />
      </div>
      <p
        className={`text-left text-2xl lg:text-xl ${
          first
            ? "text-slate-100 dark:text-[#292929]"
            : stackCard
            ? "text-slate-100"
            : "text-[#292929] dark:text-slate-100"
        } w-40`}
      >
        {title}
      </p>
      <p
        className={`text-left ${
          first
            ? "text-slate-100 dark:text-[#292929]"
            : stackCard
            ? "text-slate-100"
            : "text-[#292929] dark:text-slate-100"
        } w-56`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default Card
