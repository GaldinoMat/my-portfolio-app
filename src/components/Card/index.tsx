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
          : "bg-slate-100 dark:bg-[#373737]"
      } ${
        stackCard && "bg-[#292929] dark:bg-[#373737]"
      } shadow-md lg:[&:not(:last-child)]:flex-1 text-center rounded-lg h-80 w-full lg:w-80 flex flex-col items-start justify-center lg:justify-between lg:p-9 gap-2 px-6`}
    >
      <div>
        <Image src={logoSource} alt={alt} width={40} height={40} />
      </div>
      <p
        className={`text-2xl lg:text-xl text-left ${
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
