import Image from "next/image"
import { InfoCardType } from "../typings/types"

function Card({ alt, logoSource, text }: InfoCardType) {
  return (
    <div className="bg-[#191919] text-center rounded-lg h-80 lg:w-96 flex flex-col items-center justify-center gap-9 lg:px-4">
      <div className="bg-[#481380] p-8 rounded-3xl">
        <Image src={logoSource} alt={alt} width={80} height={80} />
      </div>
      <p className="text-2xl lg:text-xl lg:whitespace-nowrap px-3">{text}</p>
    </div>
  )
}

export default Card