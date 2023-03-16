import Image from "next/image"
import { InfoCardType } from "../typings/types"

function Card({ alt, logoSource, title, subtitle }: InfoCardType) {
  return (
    <div className="bg-onyx shadow-md [&:not(:last-child)]:flex-1 shadow-blue-munsell text-center rounded-lg h-80 w-full lg:w-80 flex flex-col items-start justify-center lg:justify-between lg:p-9 gap-2 px-6">
      <div className="h-20 w-20">
        <Image src={logoSource} alt={alt} width={48} height={48} />
      </div>
      <p className="text-2xl lg:text-xl text-left text-silver w-40">{title}</p>
      <p className="text-left text-silver w-56">{subtitle}</p>
    </div>
  )
}

export default Card
