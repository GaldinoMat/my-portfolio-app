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
      className={`${first ? "bg-[#212121]" : "bg-white"} ${
        stackCard && "bg-[#212121]"
      } shadow-md lg:[&:not(:last-child)]:flex-1 text-center rounded-lg h-80 w-full lg:w-80 flex flex-col items-start justify-center lg:justify-between lg:p-9 gap-2 px-6`}
    >
      <div
        className={`h-14 w-14 text-center flex items-center justify-center ${
          stackCard && "bg-white rounded-full"
        } `}
      >
        <Image
          className={`${stackCard && "rounded-full"} `}
          src={logoSource}
          alt={alt}
          width={40}
          height={40}
        />
      </div>
      <p
        className={`text-2xl lg:text-xl text-left ${
          first ? "text-white" : "text-black"
        } ${stackCard && "text-white"} w-40`}
      >
        {title}
      </p>
      <p
        className={`text-left ${first ? "text-white" : "text-black"} ${
          stackCard && "text-white"
        } w-56`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default Card
